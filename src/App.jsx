import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Course from './Pages/Course';
import Cart from './Pages/Cart';
import ContactUs from './Pages/policy/ContactUs';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import PrivateRoute from './Components/auth/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyLearing from './Pages/MyLearning';
import MyCourse from './Pages/MyCourse';
import PrivacyPolicy from './Pages/policy/PrivacyPolicy';
import TermsAndConditions from './Pages/policy/TermsAndConditions';
import RefundPolicy from './Pages/policy/RefundPolicy';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Layout><Cart /></Layout>} />
          <Route path="/myCourses" element={<Layout><MyLearing /></Layout>} />
          <Route path="/myCourse/:courseId" element={<Layout><MyCourse/></Layout>} />
        </Route>
        {/* General routes */}
        <Route path="/reset-password/:code" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/course/:courseId" element={<Layout><Course /></Layout>} />
        <Route path="/contactUs" element={<Layout><ContactUs /></Layout>} />
        <Route path="/privacyPolicy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/term&Condition" element={<Layout><TermsAndConditions /></Layout>} />
        <Route path="/refundPolicy" element={<Layout><RefundPolicy /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
