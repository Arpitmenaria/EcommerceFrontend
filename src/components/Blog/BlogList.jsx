import React from "react";
import BlogCard from "./BlogCard";
import "./Blog.css";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Latest Fashion Trends in 2025",
      description: "Discover the hottest fashion trends of the year and stay ahead in style.",
      image: "/images/Blog1.jpg",
      date: "Feb 10, 2025",
      fullText: "Fashion trends in 2025 bring back retro styles with a modern twist. Expect oversized blazers, bold prints, and eco-friendly fabrics taking center stage."
    },
    {
      id: 2,
      title: "Sustainable Fashion: The Future of Clothing",
      description: "Explore how sustainable fashion is changing the industry for the better.",
      image: "/images/Blog2.jpg",
      date: "Jan 28, 2025",
      fullText: "Sustainable fashion focuses on ethical production, organic materials, and reducing waste. Brands are shifting towards green alternatives to reduce their environmental impact."
    },
    {
      id: 3,
      title: "Top 10 Must-Have Accessories",
      description: "Check out the latest accessories that will elevate your outfits.",
      image: "/images/Blog3.jpg",
      date: "Feb 5, 2025",
      fullText: "From statement necklaces to elegant handbags, accessories play a crucial role in defining your style. Learn which items you need in 2025!"
    }
  ];

  return (
    <div className="blog-list">
      <h2>Latest Blog Posts</h2>
      <p>Read Latest News</p>
      <br />
      <div className="blog-container">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
