import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="projects" element={<Projects/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
