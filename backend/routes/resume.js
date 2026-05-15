const express = require("express");
const router = express.Router();

router.post("/generate-resume", async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.MISTRAL_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:5000",
                "X-Title": "AI Resume Builder"
            },
            body: JSON.stringify({
                model: "openrouter/auto",
                messages: [
                    {
                        role: "system",
                        content: "You are a professional resume consultant. Provide 3 actionable improvements for this resume."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            })
        });

        const data = await response.json();

        // Guard against API errors
        if (!response.ok || !data.choices || !data.choices[0]) {
            console.error("OpenRouter error response:", data);
            return res.status(500).json({
                message: "AI analysis failed.",
                error: data.error?.message || "Unknown error"
            });
        }

        const resume = data.choices[0].message.content;
        res.json({ resume });

    } catch (error) {
        console.error("OpenRouter API Error:", error);
        res.status(500).json({
            message: "AI analysis failed.",
            error: error.message
        });
    }
});

module.exports = router;