import { Auth } from "../context/AuthContext";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute(props) {
  const [token] = Auth();

  if (!token) {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/" />} />;
      </Routes>
    );
  }

  return <Route {...props} />;
}
