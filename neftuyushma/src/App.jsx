import { BrowserRouter } from "react-router-dom";
import PublicRoute from "./routs/PublicRoute";
const App = () => {
  return (
    <BrowserRouter>
      <PublicRoute />
    </BrowserRouter>
  );
};

export default App;
