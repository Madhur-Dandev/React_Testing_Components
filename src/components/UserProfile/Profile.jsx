import React, { useEffect, useState } from "react";
import "./Profile.css";
import UserImage from "/images/default-user.png";
import Banner from "/images/bg2.jpg";
import BlogList from "./BlogList";
import { fetchData } from "../../apis/blogFetch";

const Profile = () => {
  const username = "Madhur Dandev";
  const followers = 100000;
  const load = 1;

  // const [blogs, setBlogs] = useState([
  //   {
  //     id: 1,
  //     username: "madhur",
  //     userImage: "/images/default-user.png",
  //     likes: 5,
  //     dateCreated: "14/4/2023",
  //     title:
  //       "This is title Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     image: "/images/broken_img.jpeg",
  //   },
  //   {
  //     id: 1,
  //     username: "madhur",
  //     userImage: "/images/default-user.png",
  //     likes: 5,
  //     dateCreated: "14/4/2023",
  //     title:
  //       "This is title Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     image: "/images/broken_img.jpeg",
  //   },
  //   {
  //     id: 1,
  //     username: "madhur",
  //     userImage: "/images/default-user.png",
  //     likes: 5,
  //     dateCreated: "14/4/2023",
  //     title:
  //       "This is title Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     image: "/images/broken_img.jpeg",
  //   },
  // ]);

  const [blogs, setBlogs] = useState([]);
  // const [hasMore, setHasMore] = useState(false);
  // const [page, setPage] = useState(1);
  const [loadDetail, setLoadDetail] = useState({
    page: 1,
    hasMore: false,
  });

  // const fetchData = async () => {
  //   // console.log(page, hasMore);
  //   console.log("running");
  //   if (!showLoading) {
  //     setShowLoading(true);
  //     const resp = await fetch(
  //       `http://localhost:5000/api/blogs/getuserblogs/1?p=${page}`,
  //       {
  //         method: "GET",
  //         credentials: "include",
  //       }
  //     );

  //     const data = await resp.json();

  //     if (!data.message) {
  //       setHasMore(data.haveMore);
  //       if (data.haveMore) {
  //         setPage(page + 1);
  //       }
  //       setBlogs([...blogs, ...data.blogs]);
  //     }

  //     setShowLoading(false);
  //   }
  // };

  const fetData = async () => {
    const data = await fetchData(loadDetail.page);
    if (!data.message) {
      console.log(data.haveMore);
      setBlogs([...blogs, ...data.blogs]);
      if (data.haveMore) {
        setLoadDetail({ page: loadDetail.page + 1, hasMore: data.haveMore });
      } else {
        setLoadDetail({ page: loadDetail.page, hasMore: data.haveMore });
      }
    }
    // console.log(data);
  };

  // useEffect(() => {
  //   console.log("hi");
  //   fetData();
  // }, []);

  useEffect(() => {
    console.log("hi");
    fetData();
  }, [load]);

  // console.log(blogs);

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
      <BlogList blogs={blogs} loadDetail={loadDetail} fetData={fetData} />
    </>
  );
};

export default Profile;
