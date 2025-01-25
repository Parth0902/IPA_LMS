import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Layout from './Layout';
import Course from './Pages/Course';
import DemoCourse from './Components/demo/DemoCourse'
import ContactUs from './Pages/ContactUs';
import Cart from './Pages/Cart';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/courses" element={<Layout><Courses /></Layout>} />
      <Route path="/course" element={<Layout><Course /></Layout>} />
      <Route path="/demo" element={<Layout><DemoCourse/></Layout>} />
      <Route path="/cart" element={<Layout><Cart/></Layout>}/>
      <Route path="/contactUs" element={<Layout><ContactUs/></Layout>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
