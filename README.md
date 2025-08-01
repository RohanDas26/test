
# AcadMate: Your Academic Sidekick

![AcadMate Banner](https://placehold.co/1200x600/6366f1/ffffff?text=AcadMate&font=inter)

**AcadMate is a comprehensive, all-in-one productivity application designed to help students organize their study life, stay focused, and get help whenever they need it.**

This application integrates essential tools into a single, beautiful interface, complete with a powerful AI assistant powered by the Google Gemini API.

---

## ✨ Key Features

- **✅ Pomodoro Timer:** Boost your focus and productivity with a built-in Pomodoro timer featuring customizable work and break sessions.
- **📝 Notes Manager:** A full-featured note-taking system to capture your ideas, lecture notes, and thoughts. All notes are saved locally in your browser.
- **📚 PDF Viewer:** Upload, organize, and read your PDF textbooks, research papers, and lecture slides directly within the app.
- **🤖 AI Chat Assistant:** Powered by Google's Gemini Pro, the AI chat can help you understand complex topics, debug code, summarize articles, and more.
- **🌐 ERP / LMS Launcher:** Quick links to launch your university's essential web portals in a new tab.
- **👤 User Authentication & Profiles:** A secure, local-first authentication system. Customize your profile with a name, profile picture, and other details.
- **🌗 Light & Dark Modes:** A beautiful, theme-aware interface that automatically adapts to your system preference or can be toggled manually.
- **📱 Progressive Web App (PWA):** Install AcadMate on your desktop or mobile device for an app-like experience, including offline access.

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **AI:** [Google Gemini API](https://ai.google.dev/)
- **Icons:** A custom set of SVG icons.
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- `npm` or `yarn` package manager

### Local Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/acadmate.git
    cd acadmate
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    - Create a new file named `.env.local` in the root of your project directory.
    - Add your Google Gemini API key to this file. The AI Chat feature will not work without it.
      ```
      GEMINI_API_KEY=your_api_key_here
      ```
    - You can get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or another port if 5173 is busy).

---

## 📦 Progressive Web App (PWA)

This application is a Progressive Web App, which means it can be "installed" on most modern desktop and mobile browsers.

-   **Offline Functionality:** The app will load and be usable even without an internet connection.
-   **Native Experience:** When installed, the app runs in its own window, has an app icon on your home screen or desktop, and feels like a native application.
-   **How to Install:** In your browser's address bar (like Chrome or Edge), look for an "Install" icon (usually looks like a computer with a down arrow). Click it to add AcadMate to your device.

---

## ☁️ Deploying to Vercel

You can deploy this application to Vercel for free with one click.

1.  **Push to a Git Repository:**
    - Create a new repository on GitHub, GitLab, or Bitbucket.
    - Push the project code to your repository.

2.  **Import to Vercel:**
    - Sign up or log in to [Vercel](https://vercel.com).
    - From your dashboard, click "Add New..." -> "Project".
    - Select your Git repository.
    - Vercel will automatically detect that you're using Vite and configure the correct build settings.

3.  **Add Environment Variable:**
    - In the Vercel project settings, navigate to the "Environment Variables" section.
    - Add a new variable with the key `GEMINI_API_KEY`.
    - Paste your Google Gemini API Key into the value field.
    - **Important:** Ensure the variable is available for all environments (Production, Preview, Development).

4.  **Deploy:**
    - Click the "Deploy" button. Vercel will build and host your application, providing you with a live URL.
