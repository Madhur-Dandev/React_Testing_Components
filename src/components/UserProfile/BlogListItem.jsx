import React from "react";
import UserImage from "/images/default-user.png";
import DefaultImage from "/images/broken_img.jpeg";

const BlogListItem = ({ elem }) => {
  return (
    <div className="user-blog-item">
      <div className="image-container">
        <img
          src={elem.blog_image === "" ? DefaultImage : elem.blog_image}
          alt={elem.blog_title}
        />
      </div>
      <div className="user-blog-content">
        <div className="header">
          <h3 className="blog-heading">
            {elem.blog_title.length > 80 &&
              elem.blog_title.slice(0, 80) + "..."}
            {elem.blog_title.length <= 80 && elem.blog_title}
          </h3>
          <i
            className="fa-solid fa-ellipsis-vertical user-blog-option-btn"
            style={{
              cursor: "pointer",
              padding: "0 1rem",
              position: "relative",
            }}
          >
            <ul className="options">
              <li>Update</li>
              <li style={{ color: "red", marginTop: "10px" }}>Delete</li>
            </ul>
          </i>
        </div>
        <div className="user-info">
          <img src={UserImage} alt={elem.user_name} />
          <p className="username">{elem.user_name}</p>
        </div>
        <span className="likes">
          {elem.likes} <i className="fa-solid fa-heart"></i>
        </span>
      </div>
    </div>
  );
};

export default BlogListItem;
