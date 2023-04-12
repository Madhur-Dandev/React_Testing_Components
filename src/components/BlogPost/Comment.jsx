import React, { useState } from "react";
import UserAvatar from "/images/default-user.png";

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState([
    // {
    //   id: 1,
    //   user_id: 1,
    //   user_name: "Madhur",
    //   reply_body: "This is reply no. 1",
    // },
    // {
    //   id: 2,
    //   user_id: 1,
    //   user_name: "Madhur",
    //   reply_body: "This is reply no. 2",
    // },
    // {
    //   id: 3,
    //   user_id: 1,
    //   user_name: "Madhur",
    //   reply_body: "This is reply no. 3",
    // },
    // {
    //   id: 4,
    //   user_id: 1,
    //   user_name: "Madhur",
    //   reply_body: "This is reply no. 4",
    // },
    // {
    //   id: 5,
    //   user_id: 1,
    //   user_name: "Madhur",
    //   reply_body: "This is reply no. 5",
    // },
  ]);

  const getComments = async (id) => {
    const resp = await fetch(
      `http://localhost:5000/api/blogs/comment/replies/${id}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await resp.json();

    console.log(data);
    setReplies(data);
  };

  return (
    <div>
      <div className="blog-post-comment">
        <div className="blog-comment-user-info">
          <img src={UserAvatar} alt={comment.user_name} />
          <span>{comment.user_name}</span>
        </div>
        <div>
          <p>{comment.comment_body}</p>
        </div>
        <div
          className="comment-reply"
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "7px",
          }}
          onClick={() => {
            setShowReplies(!showReplies);
            getComments(comment.id);
          }}
        >
          <i className="fa-solid fa-reply"></i>
          Reply
        </div>
      </div>
      {showReplies && (
        <div className="reply-container">
          <form className="comment-form">
            <textarea
              name="comment-box"
              id="comment-box"
              cols="30"
              rows="2"
              style={{
                resize: "vertical",
              }}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              type="submit"
              style={{ fontSize: ".9rem", padding: ".25rem 2rem" }}
            >
              Add Reply
            </button>
          </form>
          {replies.length !== 0 &&
            replies.map((elem, index) => (
              <div key={index} className="reply">
                <div className="blog-comment-user-info">
                  <img src={UserAvatar} alt={elem.user_name} />
                  <span>{elem.user_name}</span>
                </div>
                <div>
                  <p>{elem.reply_body}</p>
                </div>
              </div>
            ))}
          {replies.length === 0 && (
            <p
              style={{
                textAlign: "center",
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "red",
              }}
            >
              No Reply Yet!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Comment;
