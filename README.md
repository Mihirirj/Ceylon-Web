# CeylonWeb - Multi-Language React Showcase


 This project is a demonstration of a modern, multi-language React application built with Vite, showcasing internationalization (i18n) capabilities using `react-i18next`. The application supports English, Sinhala (සිංහල), and Tamil (தமிழ்) languages, allowing users to dynamically switch content.

The project aims to illustrate a clean, component-based architecture, responsive design, and a professional UI with a subtle Sri Lankan theme. It's designed to be a portfolio piece demonstrating skills in React, modern JavaScript, localization, and front-end styling.


[Screenshot (5170)](https://github.com/user-attachments/assets/378e4eef-f3e5-4863-b4f5-f4dcc25e9d4b)



##  Features

*   **Multi-Language Support:**
    *   English (Default/Fallback)
    *   Sinhala (සිංහල)
    *   Tamil (தமிழ்)
*   **Dynamic Language Switching:** Users can easily change the display language using a UI switcher.
*   **Browser Language Detection:** Attempts to detect the user's preferred browser language on initial load.
*   **Language Persistence:** Remembers the user's selected language across sessions (using localStorage).
*   **`react-i18next` Integration:** Robust localization managed via JSON translation files.
*   **Modern UI/UX:** Clean, responsive design with a Sri Lankan-inspired aesthetic.
*   **Component-Based Architecture:** Well-structured React components for maintainability.
*   **Vite Powered:** Fast development and build times.
*   **Google Fonts Integration:** Utilizes Poppins, Noto Sans Sinhala, and Noto Sans Tamil for optimal text rendering.

## 🛠️ Tech Stack

*   **React:** JavaScript library for building user interfaces.
*   **Vite:** Next-generation front-end tooling for fast development.
*   **i18next:** Internationalization framework.
*   **react-i18next:** React bindings for i18next.
*   **i18next-http-backend:** Loads translations from a backend (or public folder).
*   **i18next-browser-languagedetector:** Detects user language.
*   **JavaScript (ES6+)**
*   **CSS3:** Custom styling with responsive design principles.

![Screenshot (5165)](https://github.com/user-attachments/assets/cbdb58e1-ecd2-45c0-b768-314fd8d45d11)

(![Screenshot (5169)](https://github.com/user-attachments/assets/4d68e215-67df-4f86-b939-b2032621b331)


##  Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v16 or later recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/ceylonweb-app.git
    cd ceylonweb-app
    ```
    *(Replace `YOUR_USERNAME/ceylonweb-app.git` with your actual repository URL)*

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
    The application will typically be available at `http://localhost:5173`.

### Building for Production

To create a production build:
```bash
npm run build
