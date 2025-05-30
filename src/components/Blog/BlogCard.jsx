import React, { useState } from "react";
import "./Blog.css";

const BlogCard = ({ blog }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-content">
        <h3>{blog.title}</h3>
        <p>{expanded ? blog.fullText : blog.description}</p>
        <span className="blog-date">{blog.date}</span>
        <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
