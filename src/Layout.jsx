// src/components/Layout.jsx
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
