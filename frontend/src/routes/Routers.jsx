import Home from "../pages/Home"
import About from "../pages/About"


import Pages from "../pages/Pages"
import Blog from "../pages/Blog"
import Services from "../pages/Services"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Contact from "../pages/Contact"
import Mentors from "../pages/Mentors/Mentors"
import MentorDetails from "../pages/Mentors/MentorDetails"

import {Routes, Route} from "react-router-dom"


const Routers = () => {
  return <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/pages" element={<Pages />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/mentors" element={<Mentors />} />
      <Route path="/MentorDetails" element={<MentorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      


    </Routes>
  
};

export default Routers