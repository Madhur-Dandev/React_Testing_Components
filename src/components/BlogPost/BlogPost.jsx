import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserAvatar from "/images/default-user.png";
import DefaultBanner from "/images/broken_img.jpeg";
import Comment from "./Comment";
import "./BlogPost.css";

const BlogPost = () => {
  const [comment, setComment] = useState("");
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalDislikes, setTotalDislikes] = useState(0);
  const { id } = useParams();

  // const [blogPost, setBlogPost] = useState({
  //   id: 1,
  //   title: "Example Blog Post",
  //   image: "https://via.placeholder.com/500x250",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, magna quis rutrum vehicula, arcu augue interdum arcu, sit amet tincidunt orci quam eget sapien. Sed viverra urna nec velit malesuada, at interdum nisi tempus. Integer lobortis nisl non nisl scelerisque, eu tincidunt augue laoreet. ",
  //   user: {
  //     name: "John Doe",
  //     avatar: "https://via.placeholder.com/50x50",
  //   },
  //   likes: 5,
  //   dislikes: 1,
  //   comments: [
  //     {
  //       id: 1,
  //       user: {
  //         name: "Jane Doe",
  //         avatar: "https://via.placeholder.com/50x50",
  //       },
  //       content: "Great post!",
  //     },
  //     {
  //       id: 2,
  //       user: {
  //         name: "Bob Smith",
  //         avatar: "https://via.placeholder.com/50x50",
  //       },
  //       content: "I found this very helpful.",
  //     },
  //   ],
  // });

  const [blogPost, setBlogPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const resp = await fetch(
          `http://localhost:5000/api/blogs/getblog/${id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await resp.json();

        console.log(data);

        setTotalLikes(data.likes);
        setTotalDislikes(data.dislikes);

        setBlogPost(data);
      } catch (e) {
        console.log(e);
      }
    }

    async function fetchComments() {
      const resp = await fetch(
        `http://localhost:5000/api/blogs/comment/${id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await resp.json();

      console.log(data);

      setComments(data);
    }

    fetchBlog();
    fetchComments();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: blogPost.comments.length + 1,
      user: {
        name: "Logged In User",
        avatar: "https://via.placeholder.com/50x50",
      },
      content: comment,
    };
    setBlogPost({
      ...blogPost,
      comments: [...blogPost.comments, newComment],
    });
    setComment("");
  };

  const handleLike = async () => {
    try {
      console.log(like);
      const resp = await fetch(
        `http://localhost:5000/api/blogs/blog_activity/${sessionStorage.getItem(
          "access_token"
        )}/${id}?activity=like`,
        {
          method: "PUT",
          credentials: "include",
        }
      );
      const data = await resp.json();
      console.log(data.message);
      setTotalLikes(totalLikes + 1);
      if (data.access_token) {
        sessionStorage.setItem("access_token", data.access_token);
        document.cookie = `access_token=${data.access_token}`;
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleDislike = async () => {
    try {
      console.log(dislike);
      const resp = await fetch(
        `http://localhost:5000/api/blogs/blog_activity/${sessionStorage.getItem(
          "access_token"
        )}/${id}?activity=dislike`,
        {
          method: "PUT",
          credentials: "include",
        }
      );
      const data = await resp.json();
      console.log(data.message);
      setTotalDislikes(totalDislikes + 1);
      if (data.access_token) {
        sessionStorage.setItem("access_token", data.access_token);
        document.cookie = `access_token=${data.access_token}`;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    blogPost.id && (
      <div className="blog-post-container">
        <div className="blog-post-image">
          <img
            src={
              blogPost.blog_image !== "" ? blogPost.blog_image : DefaultBanner
            }
            alt={blogPost.blog_title}
          />
        </div>
        <div className="blog-post-content">
          <div className="blog-content">
            <h2>{blogPost.blog_title}</h2>
            {/* <p className="blog_description">blogPost.blog_description</p> */}
            <p
              className="blog_description"
              dangerouslySetInnerHTML={{ __html: blogPost.blog_description }}
            ></p>
            <p className="date-created">
              created on :{" "}
              <span>
                {new Date(blogPost.date_created).toLocaleDateString()}
              </span>
            </p>
            <div className="blog-post-user-info">
              <img src={UserAvatar} alt={blogPost.user_name} />
              <span>{blogPost.user_name}</span>
            </div>
            <div className="blog-post-reactions">
              <span
                onClick={() => {
                  if (like) {
                    setLike(false);
                    setDislike(false);
                  } else {
                    setLike(true);
                    setDislike(false);
                  }
                  handleLike();
                }}
              >
                {totalLikes} {like && <i className="fa-solid fa-thumbs-up"></i>}
                {!like && <i className="fa-regular fa-thumbs-up"></i>}
              </span>
              <span
                onClick={() => {
                  if (dislike) {
                    setDislike(false);
                    setLike(false);
                  } else {
                    setDislike(true);
                    setLike(false);
                  }
                  handleDislike();
                }}
              >
                {totalDislikes}{" "}
                {dislike && <i className="fa-solid fa-thumbs-down"></i>}
                {!dislike && <i className="fa-regular fa-thumbs-down"></i>}
              </span>
            </div>
          </div>
          <div className="blog-post-comments">
            <h3>Comments</h3>
            <form onSubmit={handleSubmit} className="comment-form">
              <textarea
                name="comment-box"
                id="comment-box"
                cols="30"
                rows="5"
                style={{
                  resize: "vertical",
                }}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button type="submit">Add Comment</button>
            </form>
            <div className="all-comments">
              {comments.length !== 0 &&
                comments.map((comment, index) => (
                  <Comment key={index} comment={comment} />
                  // <div>
                  //   <div key={index} className="blog-post-comment">
                  //     <div className="blog-comment-user-info">
                  //       <img src={UserAvatar} alt={comment.user_name} />
                  //       <span>{comment.user_name}</span>
                  //     </div>
                  //     <div>
                  //       <p>{comment.comment_body}</p>
                  //     </div>
                  //     <div
                  //       className="comment-reply"
                  //       style={{
                  //         cursor: "pointer",
                  //         display: "flex",
                  //         alignItems: "center",
                  //         gap: "7px",
                  //       }}
                  //       onClick={() => setShowReplies(!showReplies)}
                  //     >
                  //       <i className="fa-solid fa-reply"></i>
                  //       Reply
                  //     </div>
                  //   </div>
                  //   <div className="reply-container">
                  //     {showReplies &&
                  //       replies.map((elem, index) => (
                  //         <div key={index}>
                  //           <p>{elem.reply_body}</p>
                  //         </div>
                  //       ))}
                  //   </div>
                  // </div>
                ))}
              {comments.length === 0 && (
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  No Comments Yet!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default BlogPost;
