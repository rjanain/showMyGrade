import { Route, Routes } from "react-router-dom";
import About from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Performance from "./components/Performance";
import Response from "./components/Response";


function App() {

  return (
  <>
  <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="marks" element={<Performance/>} />
        <Route path="response" element={<Response />} />
        <Route path="contact" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
  </>
  )
}

export default App
