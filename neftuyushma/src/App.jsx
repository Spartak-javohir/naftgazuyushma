import { BrowserRouter, Switch, component, Route } from "react-router-dom";

import Login from "./components/login/login";
import PublicRoute from "./routs/ProtectedRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} exact />
        {/* <PublicRoute path="/registration" component={Registration} exact /> */}
        {/* <PublicRoute path="/checkyouremail" component={CheckYourEmail} exact /> */}

        {/* <ProtectedRoute path="/" component={Home} exact /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
