import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePost from "./components/createPost";
import AllPosts from "./components/allPosts";
import UpdatePost from "./components/updatePost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/all-posts" element={<AllPosts />} />
        <Route path="/update-post/:id" element={<UpdatePost />} />
      </Routes>
    </>
  );
}

export default App;
