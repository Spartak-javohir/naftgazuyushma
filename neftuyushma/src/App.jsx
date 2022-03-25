import { BrowserRouter as Router, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/login/login";
import PublicRoute from "./routs/PublicRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" component={Login} exact />
        {/* <PublicRoute path="/registration" component={Registration} exact /> */}
        {/* <PublicRoute path="/checkyouremail" component={CheckYourEmail} exact /> */}

        {/* <ProtectedRoute path="/" component={Home} exact /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
