import React, { useEffect, useState } from "react";
import "./Profile.css";
import UserImage from "/images/default-user.png";
import Banner from "/images/bg2.jpg";
import BlogList from "./BlogList";
import { fetchData } from "../../apis/blogFetch";

const Profile = () => {
  const username = "Madhur Dandev";
  const followers = 100000;

  const [blogs, setBlogs] = useState([]);
  const [haveMore, setHaveMore] = useState(false);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const data = await fetchData(page);

    if (data) {
      setPage(page + 1);
      if (!data.message) {
        setBlogs([...blogs, ...data.blogs]);
        setHaveMore(data.haveMore);
        if (data.haveMore) {
          console.log(page);
        }
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // window.addEventListener("scroll", (e) => {
  //   const blogContainer = document.querySelector(".user-blogs-container");
  //   if (
  //     window.innerHeight + window.scrollY ===
  //     blogContainer.offsetTop + blogContainer.clientHeight
  //   ) {
  //     if (haveMore) {
  //       getData();
  //     }
  //   }
  // });

  return (
    <>
      <div className="profile-container">
        <img src={Banner} alt="Profile Banner" className="profile-banner" />
        <div className="profile-content">
          <img src={UserImage} alt="Profile" className="profile-image" />
          <div className="profile-details">
            <h2 className="profile-username">{username}</h2>
            <p className="profile-followers">
              <span className="bold">{followers}</span> followers
            </p>
          </div>
        </div>
      </div>
      <BlogList blogs={blogs} getData={getData} haveMore={haveMore} />
    </>
  );
};

export default Profile;
