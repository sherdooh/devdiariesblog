
# 📘 DevDiaries Blog

> A modern, full-featured blogging platform powered by **Next.js**, **MongoDB**, **Firebase**, and **Tailwind CSS**—featuring a sleek admin dashboard and robust user authentication.

[![License](https://img.shields.io/github/license/sherdooh/devdiariesblog)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/sherdooh/devdiariesblog)](https://github.com/sherdooh/devdiariesblog/stargazers)
[![Issues](https://img.shields.io/github/issues/sherdooh/devdiariesblog)](https://github.com/sherdooh/devdiariesblog/issues)

---

## 🌟 About the Project
**DevDiaries Blog** is a responsive, full-stack blogging platform designed for easy content creation and management. Built using **Next.js**, **React**, **MongoDB**, **Firebase**, and **Tailwind CSS**, it offers a dynamic user experience and a secure admin dashboard with Firebase authentication for authorized access.

<p align="center">
  <img src="https://i.ibb.co/BwGZrBS/Screenshot-2024-11-09-230117.png" alt="Homepage Screenshot" width="800" />
</p>

- **[Live Demo](https://devdiariesblog.vercel.app/)**: Explore the live version of DevDiaries Blog!

---

## 🚀 Features

### Frontend
- **Modern UI**: A visually pleasing, responsive interface for mobile and desktop.
- **Blog Listings & Filters**: View and filter posts by category and search for specific topics.
- **Detailed Post Pages**: Full post view with related posts and comments section.
- **Interactive Comments**: Engage with posts through user comments.
- **Email Subscriptions**: Easy newsletter sign-up.

### Backend
- **RESTful API**: Efficient data handling with Next.js API routes.
- **MongoDB Database**: Flexible NoSQL database for fast data retrieval.
- **Data Security**: Enhanced with Firebase authentication for secure access.

### Admin Dashboard (Firebase Protected)
- **Firebase Authentication**: Only authenticated users can access admin functionalities.
- **Post Management**: Add, edit, or delete blog posts.
- **Subscriber Management**: View and control newsletter subscribers.
- **Message Management**: Review and respond to reader messages.
- **Secure Access**: Admin-only area protected by Firebase authentication.
- **Analytics Dashboard**: Track blog views, user activity, and popular posts.

---

## 🛠️ Technologies Used

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>


<br>

- **Next.js** - Full-stack framework for server-rendered React applications.
- **React** - For building dynamic user interfaces.
- **MongoDB** - NoSQL database for managing data.
- **Firebase** - Authentication and authorization for protected routes.
- **Tailwind CSS** - CSS framework for responsive and modern design.
- **Node.js & Express.js** - Server-side framework for REST API.
- **Axios** - HTTP client for making API requests.
- **Vercel** - Deployment platform for Next.js applications.

---

## ⚙️ Installation Guide

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or above)
- **MongoDB**

### Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sherdooh/devdiariesblog.git
   cd devdiariesblog
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory with your MongoDB connection string and Firebase credentials:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_API_BASE_URL=your_api_base_url
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   ```
   
4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser to view the application.

---

## 🎉 Usage

- **Homepage**: Browse all blog posts with filter options by category.
- **Post Page**: View detailed content for each post, leave a comment, and read related posts.
- **Admin Dashboard**: Accessible at `/admin`, protected by Firebase authentication.

### Admin Dashboard Walkthrough
1. **Firebase Login**: Only authenticated admins can access the admin dashboard.
2. **Post Management**: Create, edit, or delete posts. 
3. **Subscriber Management**: Access and export subscriber lists.
4. **Message Center**: View and respond to reader messages.
5. **Analytics**: View site activity, including post views and engagement stats.

---

## 📂 Project Structure

```plaintext
devdiariesblog/
├── public/             # Static files
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Next.js pages for routing
│   ├── api/            # API endpoints
│   ├── styles/         # Tailwind and other CSS styles
│   ├── utils/          # Utility functions
│   └── hooks/          # Custom React hooks
├── .env         # Environment variables
├── next.config.js      # Next.js configuration file
└── package.json        # Dependencies and scripts
```

---

## 📡 API Endpoints

The RESTful API supports content, subscriber, and message management.

### Blog Endpoints
- **GET /api/posts**: Retrieve all blog posts.
- **POST /api/posts**: Add a new post (Admin only).
- **DELETE /api/posts/:id**: Delete a specific post (Admin only).

### Subscription Endpoints
- **POST /api/subscribe**: Add a new subscriber.
- **GET /api/subscriptions**: Retrieve all subscribers (Admin only).
- **DELETE /api/subscriptions/:id**: Remove a subscriber (Admin only).

### Message Endpoints
- **GET /api/messages**: Retrieve all messages from readers (Admin only).
- **POST /api/messages**: Create a new message (from contact form).
- **DELETE /api/messages/:id**: Remove a message (Admin only).

---

## 🤝 Contributing

Contributions to **DevDiaries Blog** are welcome! To contribute:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Commit your code changes.
4. Submit a pull request to the `main` branch for review.

---

## 🔗 Connect with Me

[![Portfolio](https://img.shields.io/badge/My_Portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://my-portfolio-website-two-nu.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shadrack-kiplangat-4282b9109/)
[![TwitterX](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/iamkopolo/)

---

## 📜 License

This project is licensed under License. See the [LICENSE](./LICENSE) file for details.

---

Thank you for checking out **DevDiaries Blog**! Happy Blogging! 🎉 
