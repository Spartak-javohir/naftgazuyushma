import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
  useLocation,
} from "react-router-dom";

import { AuthProvider, UseAuth } from "../servise/context/AuthContext";
import Login from "../components/login/login";
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

export default function PublicRoute() {
  const [token] = UseAuth();
  let location = useLocation();
  console.log(token);
  if (token) {
    return (
      // <Router>
      // <Routes>
      <Navigate to="/" state={{ from: location }} replace />
      // </Routes>
      // </Router>
    );
  }

  return (
    <AuthProvider>
      {/* <Router> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Singup />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Info />} />
        <Route path="/rah" element={<Rah />} />
        <Route path="/consultants" element={<Consultants />} />
        <Route path="/staff" element={<Staff />} />
        {/* <Route path="/burger" element={<Burger />} /> */}
        <Route path="/laboratoryInfo" element={<LaborInfo />} />
        <Route path="/corses" element={<Corses />} />
        <Route path="/tahlil" element={<Tahlil />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      {/* </Router> */}
    </AuthProvider>
  );
}
