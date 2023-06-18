import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Create_Blog_Form from "./components/Create_Blog_Form/Create_Blog_Form";
import BlogPost from "./components/BlogPost/BlogPost";
import Profile from "./components/UserProfile/Profile";
import FullScreenPrompt from "./components/ItemUpdate/FullScreenPrompt";
import ShareButton from "./components/Share/ShareButton";
import UpdateBlog from "./components/BlogPost/UpdateBlog";
import Swiperjs from "./components/Effects/Swiperjs";
import TextTransitionComp from "./components/Effects/TextTransitionComp";
import CarouselComp from "./components/Effects/Carousel";
import HeroContainer from "./components/Effects/HeroContainer";
import AlertCaller from "./components/Effects/AlertCaller";
import Auth from "./components/Auth/Auth";
import Rerender from "./components/Rerender/Rerender";

function App() {
  return (
    <div className="App bg-slate-600 text-slate-100 relative">
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
                  <li>
                    <Link to="/swiperjs">Swiper JS</Link>
                  </li>
                  <li>
                    <Link to="/carousel">Carousel</Link>
                  </li>
                  <li>
                    <Link to="/texttransition">Text Transition</Link>
                  </li>
                  <li>
                    <Link to="/heroContainer">Hero Component</Link>
                  </li>
                  <li>
                    <Link to="/alerts">Alerts</Link>
                  </li>
                  <li>
                    <Link to="/auth">Auth</Link>
                  </li>
                  <li>
                    <Link to="/render/data">Rerender</Link>
                  </li>
                </ul>
              </div>
            }
          />
          <Route
            path="React_Testing_Components/"
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
                  <li>
                    <Link to="/swiperjs">Swiper JS</Link>
                  </li>
                  <li>
                    <Link to="/carousel">Carousel</Link>
                  </li>
                  <li>
                    <Link to="/texttransition">Text Transition</Link>
                  </li>
                  <li>
                    <Link to="/heroContainer">Hero Component</Link>
                  </li>
                  <li>
                    <Link to="/alerts">Alerts</Link>
                  </li>
                  <li>
                    <Link to="/auth">Auth</Link>
                  </li>
                  <li>
                    <Link to="/render/data">Rerender</Link>
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
          <Route path="/swiperjs" element={<Swiperjs />} />
          <Route path="/carousel" element={<CarouselComp />} />
          <Route path="/texttransition" element={<TextTransitionComp />} />
          <Route path="/heroContainer" element={<HeroContainer />} />
          <Route path="/alerts" element={<AlertCaller />} />
          <Route path="/auth/:type" element={<Auth />} />
          <Route path="/render/:data?" element={<Rerender />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
