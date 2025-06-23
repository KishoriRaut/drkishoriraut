---
title: "Getting Started with Next.js"
date: "2025-06-22"
excerpt: "Learn how to get started with Next.js and build your first application."
category: "Tutorial"
tags: ["nextjs", "web development", "tutorial"]
image: "/images/blog/nextjs-cover.jpg"
---

# Getting Started with Next.js

Next.js is a React framework that enables server-side rendering and static site generation. In this guide, we'll walk through the basics of setting up a new Next.js application.

## Why Next.js?

- **Server-side rendering (SSR)**: Better SEO and performance
- **Static site generation (SSG)**: Fast page loads and reduced server load
- **API routes**: Build API endpoints within your Next.js app
- **File-based routing**: No need for additional routing libraries
- **Built-in CSS and Sass support**: Style your app with ease

## Creating a New Next.js App

To create a new Next.js app, run the following command in your terminal:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

## Project Structure

A typical Next.js project has the following structure:

```
my-app/
├── pages/
│   ├── api/
│   ├── _app.js
│   └── index.js
├── public/
├── styles/
└── package.json
```

## Creating Pages

In Next.js, pages are automatically routed based on their file name in the `pages` directory. For example:

- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/blog/[id].js` → `/blog/1`, `/blog/2`, etc.

## Adding Styles

Next.js has built-in support for CSS and Sass. You can import CSS files directly in your components:

```jsx
import styles from '../styles/Home.module.css';

export default function Home() {
  return <h1 className={styles.title}>Welcome to Next.js!</h1>;
}
```

## Deploying Your App

You can deploy your Next.js app to Vercel, the creators of Next.js, with just a few clicks:

1. Push your code to a Git repository
2. Import your project in Vercel
3. Vercel will automatically detect your Next.js app and set up deployments

## Conclusion

Next.js makes it easy to build React applications with server-side rendering and static site generation. With its file-based routing and built-in optimizations, you can focus on building your application rather than configuring tools.
