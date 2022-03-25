// import { useAuth } from "../contexts/AuthContext";
import { Route, Routes } from "react-router-dom";

export default function PublicRoute(props) {
  // const [token] = useAuth();

  // if (token) {
  // 	return <Redirect to="/" />;
  // }

  return (
    <Routes>
      <Route {...props} />
    </Routes>
  );
}
