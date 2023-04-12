import React, { useEffect, useState } from "react";
import BlogListItem from "./BlogListItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "./BlogList.css";

const BlogList = ({ blogs, getData, haveMore }) => {
  // window.addEventListener("scroll", (e) => {
  //   const blogContainer = document.querySelector(".user-blogs-container");
  //   if (
  //     window.innerHeight + window.scrollY ===
  //     blogContainer.offsetTop + blogContainer.clientHeight
  //   ) {
  //     console.log("you");
  //   }
  // });

  return (
    <>
      <InfiniteScroll
        dataLength={blogs.length}
        next={getData}
        hasMore={haveMore}
        loader={
          <div className="blog-loader">
            <div className="dot"></div>
          </div>
        }
      >
        <div className="user-blogs-container">
          {blogs.map((elem, index) => (
            <BlogListItem elem={elem} key={index} />
          ))}
        </div>
      </InfiniteScroll>
      {/* {showLoading && (
        <div className="blog-loader">
          <div className="dot" style={{ opacity: "0" }}></div>
        </div>
      )} */}
    </>
  );
};

export default BlogList;
