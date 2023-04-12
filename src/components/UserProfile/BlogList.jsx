import React, { useEffect, useState } from "react";
import BlogListItem from "./BlogListItem";
import "./BlogList.css";

const BlogList = ({ blogs, hasMore, fetchData, showLoading }) => {
  window.addEventListener("scroll", (e) => {
    if (hasMore) {
      // console.log("has");
      const blogContainer = document.querySelector(".user-blogs-container");
      // console.log(
      //   document.body.scrollHeight - window.scrollY,
      //   blogContainer.offsetTop + blogContainer.clientHeight,
      //   blogContainer.clientHeight
      // );
      // console.log(
      //   document.body.scrollHeight - window.scrollY,
      //   blogContainer.clientHeight
      // );
      // if (
      //   document.body.scrollHeight - window.scrollY <=
      //   blogContainer.clientHeight
      // ) {
      //   alert("hi");
      // }

      // console.log(
      //   window.innerHeight + window.scrollY >
      //     blogContainer.offsetTop + blogContainer.clientHeight
      // );
      // console.log(
      //   window.innerHeight + window.scrollY,
      //   blogContainer.offsetTop + blogContainer.clientHeight
      // );
      if (
        window.innerHeight + window.scrollY >=
        blogContainer.offsetTop + blogContainer.clientHeight
      ) {
        setTimeout(() => {
          // setBlogs([blogs[0], ...blogs]);
          fetchData();
        }, 1000);
      }

      // const rect = blogContainer.getBoundingClientRect();
      // if (rect.top < window.scrollY && !req) {
      //   req = true;
      //   scroll.style.opacity = "1";
      //   setTimeout(() => {
      //     setBlogs([blogs[0], ...blogs]);
      //     req = false;
      //     scroll.style.opacity = "0";
      //   }, 1000);
      // }
    }
  });

  return (
    <>
      <div className="blog-loader"></div>
      <div className="user-blogs-container">
        {blogs.map((elem, index) => (
          <BlogListItem elem={elem} key={index} />
        ))}
      </div>
      {showLoading && (
        <div className="blog-loader">
          <div className="dot" style={{ opacity: "0" }}></div>
        </div>
      )}
    </>
  );
};

export default BlogList;
