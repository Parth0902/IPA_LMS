// src/components/Layout.jsx
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import proptypes from 'prop-types';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: proptypes.node.isRequired
}

export default Layout;
