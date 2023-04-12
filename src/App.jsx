import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Create_Blog_Form from "./components/Create_Blog_Form/Create_Blog_Form";
import BlogPost from "./components/BlogPost/BlogPost";
import Profile from "./components/UserProfile/Profile";

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
                </ul>
              </div>
            }
          />
          <Route path="/create-blog" element={<Create_Blog_Form />} />
          <Route path="/blogPost/:id" element={<BlogPost />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
