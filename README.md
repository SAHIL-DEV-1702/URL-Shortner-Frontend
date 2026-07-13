# 🔗 URL Shortener

A modern, full-stack URL shortening application that converts long URLs into short, shareable links. Built with Node.js, Express, React, and MongoDB.

## 📋 Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- **User Authentication**: Secure sign-up and login with JWT tokens and bcrypt password hashing
- **URL Shortening**: Convert long URLs into short, memorable links
- **URL Management**: View, edit, and delete your shortened URLs
- **User Dashboard**: Comprehensive dashboard to manage all your shortened URLs
- **Cookie & Token Storage**: Flexible authentication with both cookie-based and token-based sessions
- **Responsive Design**: Modern, mobile-friendly UI built with Tailwind CSS
- **URL Analytics**: Track and manage your shortened URLs effectively
- **Input Validation**: Robust server-side validation using Joi
- **Error Handling**: Comprehensive error handling and user-friendly error messages

---

## 📸 Screenshots

### 🏠 Home Page

![Home Page](URL-Shortner-frontend/ScreenShoots/homePage.png)

### 🔐 Login Page

![Login](URL-Shortner-frontend/ScreenShoots/login.png)

### 📝 Registration Page

![Register](URL-Shortner-frontend/ScreenShoots/register.png)

### 📊 Dashboard

![Dashboard](URL-Shortner-frontend/ScreenShoots/dashboard.png)

---

## 🛠️ Tech Stack

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**:
  - JWT (JSON Web Tokens)
  - Bcrypt for password hashing
- **Validation**: Joi
- **Utilities**:
  - Cookie Parser
  - CORS
  - dotenv for environment variables
  - Nanoid for URL ID generation
- **Development**: Nodemon for auto-reload

### Frontend

- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: TanStack React Router
- **State Management**: Redux Toolkit & React Redux
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Data Fetching**: TanStack React Query
- **Linting**: ESLint

---

## 📁 Project Structure

```
URL-Shortner/
├── URL_shortener/                    # Backend Application
│   ├── app.js                        # Express server entry point
│   ├── package.json
│   ├── __tests__/                    # Test files
│   │   ├── auth.cookies.test.js
│   │   └── auth.token.test.js
│   └── src/
│       ├── config/                   # Configuration files
│       │   ├── config.js
│       │   └── mongodb.config.js
│       ├── controller/               # Route controllers
│       │   ├── auth.controller.js
│       │   ├── shortUrl.controller.js
│       │   └── user.controller.js
│       ├── dao/                      # Data access objects
│       │   ├── shortUrl.js
│       │   └── user.dao.js
│       ├── middleware/               # Custom middleware
│       │   └── auth.middleware.js
│       ├── models/                   # Mongoose schemas
│       │   ├── shorturl.model.js
│       │   └── user.model.js
│       ├── routes/                   # API routes
│       │   ├── auth.routes.js
│       │   ├── shortUrl.routes.js
│       │   └── user.routes.js
│       ├── services/                 # Business logic
│       │   ├── auth.service.js
│       │   └── shortUrl.service.js
│       └── utils/                    # Utility functions
│           ├── attach.user.js
│           ├── errorHandler.js
│           └── helper.js
│
└── URL-Shortner-frontend/            # Frontend Application
    ├── package.json
    ├── vite.config.js
    ├── eslint.config.js
    ├── index.html
    ├── ScreenShoots/                 # Application screenshots
    ├── public/
    └── src/
        ├── main.jsx
        ├── index.css
        ├── RootLayout.jsx
        ├── api/                      # API services
        │   ├── shortUrl.api.js
        │   └── user.api.js
        ├── components/               # Reusable components
        │   ├── LoginForm.jsx
        │   ├── RegisterForm.jsx
        │   ├── NavBar.jsx
        │   ├── UrlForm.jsx
        │   └── UserUrls.jsx
        ├── pages/                    # Page components
        │   ├── AuthPage.jsx
        │   ├── DashBoardPage.jsx
        │   └── HomePage.jsx
        ├── routing/                  # Route configuration
        │   ├── authroute.js
        │   ├── dashBoard.js
        │   ├── homePage.js
        │   ├── rootRoute.js
        │   └── routeTree.js
        ├── store/                    # Redux store
        │   ├── store.js
        │   └── slice/
        │       └── authSlice.js
        └── utils/
            ├── axiosInstance.js
            └── helper.js
```

---

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the backend directory:

```bash
cd URL_shortener
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd URL-Shortner-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the frontend root directory (if needed):

```env
VITE_API_URL=http://localhost:5000/api
```

---

## ⚙️ Configuration

### Backend Configuration

- **Database**: Update MongoDB connection string in `.env`
- **Port**: Configure server port in `.env` (default: 5000)
- **JWT Secret**: Set a strong JWT secret in `.env`

### Frontend Configuration

- **API Base URL**: Configure Axios instance in `src/utils/axiosInstance.js`
- **Build Output**: Configured in `vite.config.js`

---

## ▶️ Running the Application

### Start Backend Server

```bash
cd URL_shortener
npm run dev
```

Server will run on `http://localhost:5000`

### Start Frontend Development Server

```bash
cd URL-Shortner-frontend
npm run dev
```

Frontend will run on `http://localhost:5173` (default Vite port)

### Build Frontend for Production

```bash
cd URL-Shortner-frontend
npm run build
```

---

## 📚 API Documentation

### Authentication Endpoints

#### Register User

```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Login User

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Logout

```http
POST /api/auth/logout
```

### URL Shortening Endpoints

#### Create Short URL

```http
POST /api/shorturl/create
Content-Type: application/json
Authorization: Bearer {token}

{
  "originalUrl": "https://example.com/very/long/url/path"
}
```

#### Get All User URLs

```http
GET /api/shorturl/user
Authorization: Bearer {token}
```

#### Get URL Details

```http
GET /api/shorturl/:shortUrlId
```

#### Update Short URL

```http
PUT /api/shorturl/:shortUrlId
Content-Type: application/json
Authorization: Bearer {token}

{
  "originalUrl": "https://new-url.com"
}
```

#### Delete Short URL

```http
DELETE /api/shorturl/:shortUrlId
Authorization: Bearer {token}
```

### User Endpoints

#### Get User Profile

```http
GET /api/user/profile
Authorization: Bearer {token}
```

#### Update User Profile

```http
PUT /api/user/profile
Content-Type: application/json
Authorization: Bearer {token}

{
  "username": "newUsername",
  "email": "newemail@example.com"
}
```

---

## 💻 Usage

1. **Create an Account**: Register with your email and password
2. **Login**: Access your account with credentials
3. **Shorten URLs**: Enter a long URL and generate a short link
4. **Manage URLs**: View all your shortened URLs in the dashboard
5. **Edit URLs**: Update or delete your shortened links
6. **Share**: Copy and share your shortened URLs with others

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow ESLint rules for frontend
- Keep code clean and well-commented
- Write meaningful commit messages

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

## 🎯 Future Enhancements

- [ ] URL expiration dates
- [ ] Custom short URLs
- [ ] QR code generation
- [ ] Click analytics and statistics
- [ ] Bulk URL shortening
- [ ] API key management for programmatic access
- [ ] Dark mode theme
- [ ] URL preview before redirect
- [ ] Advanced filtering and search

---

**Made with ❤️ by [Your Name/Team]**
