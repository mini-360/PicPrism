# PicPrism

**Video Number:**

- In which day you're : DAY => 4/17
- Your good Name : Aniket

Welcome to **PicPrism**, a dynamic and feature-rich platform designed for bloggers and readers alike. Dive into a world where ideas meet execution, and where every post creates a vibe that resonates.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [Team](#team)
- [Contact](#contact)

## About

**PicPrism** is an online marketplace where users can explore, purchase, and download a wide variety of images. It offers a diverse collection of high-quality pictures, catering to different tastes and needs, making it easy for users to find the perfect image for their projects or personal use..

## Features

- **User Authentication & Authorization:** Secure sign-up and login system with role-based access controls.
- **Post Management:** Create, edit, delete, and categorize blog posts with ease.
- **Rich Text Editor:** Fully-featured WYSIWYG editor for crafting beautiful posts.
- **Tags & Categories:** Organize posts into categories and tags for easy navigation.
- **Search Functionality:** Advanced search to quickly find posts by keywords, categories, or tags.
- **Responsive Design:** Seamless user experience across desktops, tablets, and smartphones.
- **SEO Optimization:** Meta tags, descriptions, and other SEO-friendly features to improve search engine rankings.
- **Social Media Integration:** Share posts directly to social media platforms like Twitter, Facebook, and LinkedIn.
- **Analytics Dashboard:** Track post views, likes, and user engagement metrics.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript (ES6+), React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Email Service:** Mailgun
- **Deployment:** Docker, Nginx
- **Version Control:** Git

## Team

<div>
<img src="https://github.com/sin-07.png" alt="User Avatar" width="50" height="50" style="border-radius: 50%;">
<img src="https://github.com/mini-360.png" alt="User Avatar" width="50" height="50" style="border-radius: 50%;">
</div>

## Installation

To set up PicPrism locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mini-360/PicPrism.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd PicPrism
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Set up the environment variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/PicPrism
   JWT_SECRET=your_secret_key
   MAILGUN_API_KEY=your_mailgun_api_key
   MAILGUN_DOMAIN=your_mailgun_domain
   ```

5. **Run database migrations and seed data(if applicab;le):**

   ```bash
   npm run migrate
   ```

6. **Start the development server:**

   ```bash
   npm run dev
   ```

## Configuration

**PicPrism's configuration is handled through environment variables defined in the .env file. Below is a list of key configurations:**

```bash
DATABASE_URL: MongoDB connection string.
JWT_SECRET: Secret key for signing JWT tokens.
MAILGUN_API_KEY: API key for Mailgun email service.
MAILGUN_DOMAIN: Domain associated with your Mailgun account.
CLIENT_URL: The base URL of the frontend application.

You can modify these configurations to suit your environment, such as changing the database URL for production or updating the mail service settings.
```

## Contributing

Contributions are welcome and appreciated. To contribute to PicPrism, follow these steps:

1.**Fork the repository.**

2.**Create a new branch.**

```bash
git checkout -b feature-name
```

3.**Make your changes and commit them.**

```bash
git commit -m "Description of changes"
```

4.**Push your branch.**

```bash
git push origin feature-name
```

5.**Submit a Pull Request:** Describe your changes and submit a pull request for review.

## Contact

**If you have any questions, suggestions, or just want to say hi, feel free to reach out:**

- Email: [bberlin609@gmail.com](mailto:bberlin609@gmail.com)
- GitHub: [mini-360](https://www.github.com/mini-360)
- instagram: [abhayyraz](https://www.instagram.com/abhayyraz)

**Thank you for visiting PicPrism! We’re excited to see the amazing content you’ll create and share with the world.**
