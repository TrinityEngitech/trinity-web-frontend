import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Products from "./Products";
import OurWork from "./OurWork";
import Client from "./Client";
import Media from "./Media";
import Download from "./Download";
import Contact from "./Contact";
import Terms from "./Terms";
import Policy from "./Policy";
import FAQ from "./FAQ";
// Admin
import Login from "../Admin/Login";
import AdminDashboard from "../Admin/AdminDashboard";
import Profile from "../Admin/Profile";
// Protected Route
import ProtectedRoute from "../Admin/context/ProtectedRoute"; // Make sure to import the ProtectedRoute component
// Error
import Error from "./Error";

function Layout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ourworks" element={<OurWork />} />
        <Route path="/client" element={<Client />} />
        <Route path="/media" element={<Media />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/faq" element={<FAQ />} />
        {/* Admin */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/adminDashboard"
          element={<ProtectedRoute element={<AdminDashboard />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        {/* Error */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Layout;
