// import { useAuth } from "../contexts/AuthContext";
import { Route, Routes } from "react-router-dom";
import Login from "../components/login/login";
import Home from "../pages/home";
import Singup from "../components/singup/singup";

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
      {/* <Route path="/" element={<Login />} /> */}
    </Routes>
  );
}
