import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./UpdateBlog.css";

const UpdateBlog = () => {
  const [content, setContent] = useState(
    "<h2>Hi <em>there!</em></h2><p>Please do share this blog with your friends.</p>"
  );
  const [title, setTitle] = useState(
    "This is my first blog using react as a front-end and flask(python) as a back-end. Powered my planet scale MySQL database."
  );

  const [blogImg, setBlogImg] = useState({});

  const handleSubmit = () => {};

  //   const title =
  //     "This is my first blog using react as a front-end and flask(python) as a back-end. Powered my planet scale MySQL database.";
  //   const description =
  //     "<h2>Hi <em>there!</em></h2><p>Please do share this blog with your friends.</p>";
  const fileName = "/images/broken_img.jpeg";
  const handleRemoveImage = () => {
    // setFileObj(null);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["code-block"],
    ],
  };

  const formats = ["header", "bold", "italic", "underline", "code-block"];
  return (
    <div className="create-blog-form-container">
      <h2 className="create-blog-heading">Express Something</h2>
      <form className="create-blog-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            id="blog-title"
            name="blog-title"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-container">
          {/* <p htmlFor="blog-img">
            {fileName === "" && (
              <>
                <span className="select-blog-img-btn">
                  <label htmlFor="blog-img">Select Blog Image</label>
                </span>{" "}
                : No Image Selected
              </>
            )}{" "}
            {fileName !== "" && (
              <>
                <span
                  className="select-blog-img-btn"
                  onClick={handleRemoveImage}
                >
                  Remove Image
                </span>{" "}
                : {fileName}
              </>
            )}
          </p>
          <input
            type="file"
            id="blog-img"
            name="blog-img"
            // onChange={(e) => {
            //   setFileObj(e.target.files[0]);
            //   setFileName(e.target.files[0].name);
            // }}
          /> */}
          <div className="preview-image">
            <img
              src={blogImg.name ? URL.createObjectURL(blogImg) : fileName}
              alt=""
              className="blog-image-preview"
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
          </div>
          <input
            type="file"
            name="blog-img"
            id="blog-img"
            onChange={(e) => setBlogImg(e.target.files[0])}
          />
        </div>
        <div className="input-container">
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={content}
            onChange={(value) => setContent(value)}
          />
        </div>
        <button className="create-blog-btn" id="create-blog-btn" type="submit">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
