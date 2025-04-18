import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Course from './Pages/Course';
import DemoCourse from './Components/demo/DemoCourse';
import Cart from './Pages/Cart';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import PrivateRoute from './Components/auth/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
          <ToastContainer position="top-right" autoClose={3000}  />
      <Routes>
        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Layout><Cart /></Layout>} />
          <Route path="/demo" element={<Layout><DemoCourse /></Layout>} />
        </Route>
        {/* General routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/course" element={<Layout><Course /></Layout>} />
        <Route path="/contactUs" element={<Layout><ContactUs /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
