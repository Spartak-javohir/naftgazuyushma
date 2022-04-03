// import { useAuth } from "../contexts/AuthContext";
import { Route, Routes } from "react-router-dom";
import Login from "../components/login/login";
import Home from "../pages/home/home";
import Singup from "../components/singup/singup";
import Contact from "../pages/contacts/contact";
import Info from "../pages/info/omarkaz";
import Corses from "../pages/corses/corses";
import Rah from "../pages/rahbariyat/rahbariyat";
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
      <Route path="/corses" element={<Corses />} />
      <Route path="/rah" element={<Rah />} />
    </Routes>
  );
}
