
# 📘 DevDiaries Blog

> A modern, full-featured blogging platform powered by **Next.js**, **MongoDB**, and **Tailwind CSS**—featuring a sleek admin dashboard for effortless content management.

[![License](https://img.shields.io/github/license/sherdooh/devdiariesblog)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/sherdooh/devdiariesblog)](https://github.com/sherdooh/devdiariesblog/stargazers)
[![Issues](https://img.shields.io/github/issues/sherdooh/devdiariesblog)](https://github.com/sherdooh/devdiariesblog/issues)

---

## 🌟 About the Project
**DevDiaries Blog** is a responsive, full-stack blogging platform designed to make content creation and management easy and enjoyable. Built using **Next.js**, **React**, **MongoDB**, and **Tailwind CSS**, it provides an engaging user experience and a powerful admin dashboard for administrators.

<p align="center">
  <img src="https://i.ibb.co/W2DD0sw/blog.png" alt="Homepage Screenshot" width="800" />
</p>

- **[Live Demo](https://devdiariesblog.vercel.app/)**: Explore the live version of DevDiaries Blog!

---

## 🚀 Features

### Frontend
- **Modern UI**: A visually pleasing, responsive interface for mobile and desktop.
- **Blog Listings & Filters**: View and filter posts by category and search for specific topics.
- **Detailed Post Pages**: Each post has a full-content view.
- **Email Subscriptions**: Easy newsletter sign-up.

### Backend
- **RESTful API**: Efficient data handling with Next.js API routes.
- **MongoDB Database**: Flexible NoSQL database for fast data retrieval.

### Admin Dashboard
- **Post Management**: Add, edit, or delete blog posts.
- **Subscriber Management**: View and control newsletter subscribers.
- **Secure Access**: Admin-only area restricted to authenticated users.

---

## 🛠️ Technologies Used

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>


<br>

- **Next.js** - Full-stack framework for server-rendered React applications.
- **React** - For building dynamic user interfaces.
- **MongoDB** - NoSQL database for managing data.
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
   Create a `.env.local` file in the root directory with your MongoDB connection string:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_API_BASE_URL=your_api_base_url
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser to view the application.

---

## 🎉 Usage

- **Homepage**: Browse all blog posts with filter options by category.
- **Post Page**: View detailed content for each post.
- **Admin Dashboard**: Available at `/admin` for authorized users to manage blog posts and subscribers.



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

## 🔐 Admin Dashboard

The **Admin Dashboard** enables efficient content and subscriber management.

### Key Features:
- **Blog Management**: Add, update, or delete posts.
- **Subscriber Management**: Manage newsletter subscriptions.

### Accessing the Admin Area
Navigate to `/admin` in your browser. This section is restricted to users with admin privileges.

---

## 📡 API Endpoints

The RESTful API supports content and subscriber management, with endpoints for both blogs and subscriptions.

### Blog Endpoints
- **GET /api/posts**: Retrieve all blog posts.
- **POST /api/posts**: Add a new post (Admin only).
- **DELETE /api/posts/:id**: Delete a specific post (Admin only).

### Subscription Endpoints
- **POST /api/subscribe**: Add a new subscriber.
- **GET /api/subscriptions**: Retrieve all subscribers (Admin only).
- **DELETE /api/subscriptions/:id**: Remove a subscriber (Admin only).

### Message Endpoints
- **GET /api/messages**: : Retrieve all messages from readers (Admin only).
- **POST /api/messages**: Create a new message (from contact form)..
- **DELETE /api/message/:id**: Remove a message (Admin only).


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
