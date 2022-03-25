import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/login/login";
import Home from "./pages/home";
import Singup from "./components/singup/singup";

// import PublicRoute from "./routs/PublicRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Singup />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
