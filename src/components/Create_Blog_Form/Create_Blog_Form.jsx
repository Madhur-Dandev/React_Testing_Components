import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import the styles
import Quill from "quill"; // import the Quill library
import "./style.css";

const Create_Blog_Form = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [fileObj, setFileObj] = useState(null);
  const [fileName, setFileName] = useState("/images/broken_img.jpeg");

  const path = window.location.href.split("/")[3];

  //   const modules = {
  //     toolbar: [
  //       ["bold", "italic", "underline", "strike"], // toggled buttons
  //       ["blockquote", "code-block"],

  //       [{ header: 1 }, { header: 2 }], // custom button values
  //       [{ list: "ordered" }, { list: "bullet" }],
  //       [{ script: "sub" }, { script: "super" }], // superscript/subscript
  //       [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  //       [{ direction: "rtl" }], // text direction

  //       [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  //       [{ header: [1, 2, 3, 4, 5, 6, false] }],

  //       [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  //       [{ font: [] }],
  //       [{ align: [] }],

  //       ["clean"], // remove formatting button
  //     ],
  //     clipboard: {
  //       // toggle to add extra line breaks when pasting HTML:
  //       matchVisual: false,
  //     },
  //   };

  //   const formats = [
  //     "header",
  //     "font",
  //     "size",
  //     "bold",
  //     "italic",
  //     "underline",
  //     "strike",
  //     "blockquote",
  //     "list",
  //     "bullet",
  //     "indent",
  //     "script",
  //     "align",
  //     "color",
  //     "background",
  //   ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["code-block"],
    ],
  };

  const formats = ["header", "bold", "italic", "underline", "code-block"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData["title"] = title;
    // formData["description"] = content;
    // if (fileObj) {
    //   formData["blog_img"] = fileObj;
    // }

    // console.log(formData);
    formData.append("title", title);
    formData.append("description", content);
    formData.append("blog_img", fileObj);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  const handleRemoveImage = () => {
    setFileName("/images/broken_img.jpeg");
    setFileObj(null);
  };

  return (
    <div className="create-blog-form-container">
      <h2 className="create-blog-heading">
        {path === "createBlog" ? "Express Something" : "Update Blog"}
      </h2>
      <form className="create-blog-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            id="blog-title"
            name="blog-title"
            placeholder="Blog Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-container">
          <p htmlFor="blog-img">
            {/* {fileName === "" && (
              <>
                <button>
                  <label htmlFor="blog-img">Select Blog Image</label>
                </button>{" "}
                : No Image Selected
              </>
            )}{" "}
            {fileName !== "" && (
              <>
                <button onClick={handleRemoveImage}>Remove Image</button> :{" "}
                {fileName}
              </>
            )} */}
            <img
              src={fileObj ? URL.createObjectURL(fileObj) : fileName}
              alt={title}
              style={{ width: "100%" }}
            />
            {fileName === "/images/broken_img.jpeg" ? (
              <>
                <button
                  style={{
                    border: "2px solid grey",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  <label htmlFor="blog-img">Select Blog Image</label>
                </button>
                : No Image Selected
              </>
            ) : (
              <>
                <button
                  onClick={handleRemoveImage}
                  style={{
                    border: "2px solid grey",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove Image
                </button>{" "}
                : {fileName}
              </>
            )}
          </p>
          <input
            type="file"
            id="blog-img"
            name="blog-img"
            onChange={(e) => {
              setFileObj(e.target.files[0]);
              setFileName(e.target.files[0].name);
            }}
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
          {path === "createBlog" ? "Create Blog" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default Create_Blog_Form;
