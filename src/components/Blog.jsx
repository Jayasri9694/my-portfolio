import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Optimizing Node.js Backend Performance",
    date: "January 10, 2025",
    description:
      "Improve the performance of your Node.js applications with efficient API structuring, caching, and best security practices.",
    link: "https://medium.com/@jayashreekumaresan4597/optimizing-node-js-backend-performance-ee382341f878",
  },
  {
    id: 2,
    title: "Understanding the Virtual DOM in React",
    date: "January 25, 2025",
    description:
      "The Virtual DOM in React optimizes performance by updating only changed elements in the real DOM through efficient diffing and reconciliation.",
    link:"https://medium.com/@jayashreekumaresan4597/understanding-the-virtual-dom-in-react-41e56bfab6e1",
  },
  {
    id: 3,
    title: "React Hooks – useState, useEffect, and More",
    date: "feb 25, 2025",
    description:
      "React Hooks like useState, useEffect, and useContext simplify state management, side effects, and global state handling in functional components.",
    link:"https://medium.com/@jayashreekumaresan4597/react-hooks-usestate-useeffect-and-more-fea525801de8",
  },
];

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <h2 className="blog-title">
          My <span>Blog</span>
        </h2>
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-description">{post.description}</p>
              <a href={post.link} className="btn">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
