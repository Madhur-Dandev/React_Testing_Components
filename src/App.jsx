import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Create_Blog_Form from "./components/Create_Blog_Form/Create_Blog_Form";
import BlogPost from "./components/BlogPost/BlogPost";
import Profile from "./components/UserProfile/Profile";
import FullScreenPrompt from "./components/ItemUpdate/FullScreenPrompt";
import ShareButton from "./components/Share/ShareButton";
import UpdateBlog from "./components/BlogPost/UpdateBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <ul>
                  <li>
                    <Link to="/create-blog">Create Blog Form</Link>
                  </li>
                  <li>
                    <Link to="/blogPost">Blog Post</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile Page</Link>
                  </li>
                  <li>
                    <Link to="/prompt">Full Screen Prompt</Link>
                  </li>
                  <li>
                    <Link to="/sharebutton">Share Link</Link>
                  </li>
                  <li>
                    <Link to="/updateblog">Update Blog</Link>
                  </li>
                </ul>
              </div>
            }
          />
          <Route path="/create-blog" element={<Create_Blog_Form />} />
          <Route path="/blogPost/:id" element={<BlogPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/prompt" element={<FullScreenPrompt />} />
          <Route path="/sharebutton" element={<ShareButton />} />
          <Route path="/updateblog" element={<UpdateBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
