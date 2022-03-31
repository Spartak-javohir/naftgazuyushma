// import { useAuth } from "../contexts/AuthContext";
import { Route, Routes } from "react-router-dom";
import Login from "../components/login/login";
import Home from "../pages/home/home";
import Singup from "../components/singup/singup";
import Contact from "../pages/contacts/contact";
import Info from "../pages/info/omarkaz";

export default function PublicRoute(props) {
  // const [token] = useAuth();

  // if (token) {
  // 	return <Redirect to="/" />;
  // }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Singup />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  );
}
