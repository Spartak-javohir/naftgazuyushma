import {
  Route,
  Routes,
  Router,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { render } from "react-dom";
import {
  transitions,
  useAlert,
  positions,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
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
  const [token, setToken] = UseAuth();
  // const options = {
  //   // you can also just use 'bottom center'
  //   position: positions.BOTTOM_CENTER,
  //   timeout: 1000,
  //   offset: "30px",
  //   // you can also just use 'scale'
  //   transition: transitions.SCALE,
  // };
  // const App = () => {
  //   const alert = useAlert();

  //   return alert.show("Oh look, an alert!");
  // };
  if (token) {
    return <Navigate replace={true} to="/login" />;
  }
  // if (token) {
  //   return (
  //     <Routes>
  //       <Route path="/corses" element={<Corses />} />
  //     </Routes>
  //   );
  // } else {
  //   render(() => (
  //     <AlertProvider template={AlertTemplate} {...options}>
  //       <App />
  //     </AlertProvider>
  //   ));
  //   // render(<Root />, document.getElementById("root"));
  // }

  return (
    <AuthProvider>
      <BrowserRouter>
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
          <Route path="/tahlil" element={<Tahlil />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/order" element={<Order />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
