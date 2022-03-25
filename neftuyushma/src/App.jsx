import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/login/login";
// import PublicRoute from "./routs/PublicRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <PublicRoute path="/registration" component={Registration} exact /> */}
        {/* <PublicRoute path="/checkyouremail" component={CheckYourEmail} exact /> */}

        {/* <ProtectedRoute path="/" component={Home} exact /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
