import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import the styles
import Quill from "quill"; // import the Quill library
import "./style.css";

const Create_Blog_Form = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [fileObj, setFileObj] = useState(null);
  const [fileName, setFileName] = useState("");
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
    formData["title"] = title;
    formData["description"] = content;
    if (fileObj) {
      formData["blog_img"] = fileObj;
    }

    console.log(formData);
  };

  const handleRemoveImage = () => {
    setFileName("");
    setFileObj(null);
  };

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
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-container">
          <p htmlFor="blog-img">
            {fileName === "" && (
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
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default Create_Blog_Form;
