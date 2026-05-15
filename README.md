# 🤖 AI Resume Builder

A full-stack web application that lets users build, preview, and download professional resumes — with AI-powered suggestions, JWT authentication, and PDF export.

> Built as my first full-stack project.

---

## ✨ Features

- 🔐 **User Authentication** — Register/login with bcrypt password hashing and JWT tokens
- 📝 **Multi-step Resume Builder** — Step-by-step form for Personal Info, Education, Skills, Projects, and Experience
- 👁 **Live Preview** — See your resume update in real time as you type
- 🤖 **AI Suggestions** — Get 3 actionable resume improvements powered by OpenRouter AI
- 📄 **PDF Export** — Download your resume as a professional PDF
- 💾 **Save System** — Save multiple resumes locally and manage them from the dashboard
- 🌙 **Dark Mode** — Fully dark UI by default with light mode toggle
- 📱 **Responsive** — Works on desktop and mobile

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas + Mongoose |
| Auth | JWT + bcrypt |
| AI | OpenRouter API |
| PDF | html2pdf.js |

---

## 📁 Project Structure

```
ai-resume-builder/
├── backend/
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── models/
│   │   └── user.js         # User schema
│   ├── routes/
│   │   ├── auth.js         # Register & login routes
│   │   └── resume.js       # AI suggestion route
│   └── server.js           # Express server entry point
├── frontend/
│   └── index.html          # Single-page frontend app
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A MongoDB Atlas account
- An OpenRouter API key (https://openrouter.ai)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-resume-builder.git
   cd ai-resume-builder
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Create a `.env` file** inside the `backend/` folder
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_random_jwt_secret
   OPENROUTER_API_KEY=your_openrouter_api_key
   ```

4. **Start the server**
   ```bash
   node server.js
   ```

5. **Open the app**

   Open `frontend/index.html` in your browser.

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `MONGO_URI` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | A long random string for signing JWT tokens |
| `OPENROUTER_API_KEY` | Your API key from openrouter.ai |

---

## 🙋‍♂️ Author

**Ritesh** — First full-stack project.

Feel free to star ⭐ the repo if you found it useful!
