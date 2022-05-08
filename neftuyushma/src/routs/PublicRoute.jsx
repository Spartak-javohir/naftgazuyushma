// import { useAuth } from "../contexts/AuthContext";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../servise/context/AuthContext";
import Login from "../components/login/login";
import Home from "../pages/home/home";
import Singup from "../components/singup/singup";
import Contact from "../pages/contacts/contact";
import Info from "../pages/info/omarkaz";
import Corses from "../pages/corses/corses";
import Rah from "../pages/rahbariyat/rahbariyat";
import Consultants from "../pages/consultants/consultants";
import Staff from "../pages/staff/staff";
import Burger from "../components/drobdawn/drobdawn";
import LaborInfo from "../pages/laboratory/laboratory";
import Tahlil from "../pages/tahlil/tahlil";
import Equipment from "../pages/equipment/equipment";
import Order from "../pages/order/order";
import Library from "../pages/librarey/librariy";

export default function PublicRoute(props) {
  // const [token] = useAuth();

  // if (token) {
  // 	return <Redirect to="/" />;
  // }

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Singup />} />
        <Route path="/" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
        <Route path="/corses" element={<Corses />} />
        <Route path="/rah" element={<Rah />} />
        <Route path="/consultants" element={<Consultants />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/laboratoryInfo" element={<LaborInfo />} />
        <Route path="/tahlil" element={<Tahlil />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </AuthProvider>
  );
}
