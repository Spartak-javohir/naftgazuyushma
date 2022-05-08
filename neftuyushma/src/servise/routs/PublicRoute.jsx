import { useAuth } from "../context/AuthContext";
import { Route, Redirect } from "react-router-dom";

export default function PublicRoute(props) {
  const [token] = useAuth();

  if (token) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
}
