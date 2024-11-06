
# DevDiaries Blog

## Project Overview

**DevDiaries Blog** is a Full Stack Blogging Platform built with **Next.js**, **React**, **MongoDB**, and **Tailwind CSS**. It includes both frontend and backend functionality along with an admin dashboard for managing blog content.

This project provides:
- A responsive interface for viewing blog posts and categories.
- An admin panel for content management, including blog creation, editing, deletion, and subscription management.
- API integrations for seamless data storage and retrieval in MongoDB.

---

## Features

- **Frontend**:
  - Responsive design with Tailwind CSS.
  - Blog post listings with category filters.
  - Individual blog post view pages.
  - Email subscription form for user engagement.

- **Backend**:
  - RESTful API built with Next.js for backend services.
  - MongoDB for storing blog posts and subscriptions.

- **Admin Dashboard**:
  - Blog management tools (add, edit, delete posts).
  - Subscription management for newsletters.
  - Admin access only.

---

## Technologies Used

- **Next.js** - Full-stack framework for server-rendered React applications.
- **React** - For building dynamic user interfaces.
- **MongoDB** - NoSQL database for managing data.
- **Tailwind CSS** - CSS framework for responsive and modern design.
- **Node.js & Express.js** - Server-side framework for REST API.
- **Axios** - HTTP client for making API requests.
- **Vercel** - Deployment platform for Next.js applications.

---

## Installation

### Prerequisites
Ensure you have **Node.js** (v14+) and **MongoDB** installed.

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sherdooh/devdiariesblog.git
   cd devdiariesblog
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Set up a `.env.local` file in the root directory with MongoDB connection string:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_API_BASE_URL=your_api_base_url
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` in your browser.

---

## Usage

- **Home Page**: Displays a list of all blog posts with filter options by category.
- **Blog Post Page**: Shows detailed content of each post.
- **Admin Dashboard**: Available at `/admin` for managing content and subscriptions.

---

## Project Structure

```plaintext
devdiariesblog/
├── public/             # Static files
├── src/
│   ├── components/     # UI components
│   ├── pages/          # Next.js pages
│   ├── api/            # API routes
│   ├── styles/         # CSS styles
│   ├── utils/          # Utility functions
│   └── hooks/          # Custom React hooks
├── .env                # Environment variables
├── next.config.js      # Next.js configuration
└── package.json        # Project dependencies
```

---

## Admin Dashboard

The **Admin Dashboard** allows for:
- Adding, editing, and deleting blog posts.
- Managing email subscriptions.

### Access

Navigate to `/admin` (requires admin access).

---

## APIs

The backend APIs are built using Next.js API routes to handle MongoDB data operations.

### Blog APIs

- **GET /api/posts**: Retrieve all blog posts.
- **POST /api/posts**: Create a new blog post (Admin only).
- **PUT /api/posts/:id**: Update an existing post (Admin only).
- **DELETE /api/posts/:id**: Delete a post (Admin only).

### Subscription APIs

- **POST /api/subscribe**: Add a new subscriber.
- **GET /api/subscriptions**: View all subscribers (Admin only).
- **DELETE /api/subscriptions/:id**: Delete a subscriber (Admin only).

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make changes and commit.
4. Submit a pull request to the `main` branch.

---

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://my-portfolio-website-two-nu.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shadrack-kiplangat-4282b9109//)
[![twitterX](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/iamkopolo/)



## License

This project is licensed under License. See the [LICENSE](./LICENSE) file for more details.

---

Enjoy using DevDiaries Blog! 🎉
