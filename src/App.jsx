import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Layout from './Layout';
import Course from './Pages/Course';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/courses" element={<Layout><Courses /></Layout>} />
      <Route path="/course" element={<Layout><Course /></Layout>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
