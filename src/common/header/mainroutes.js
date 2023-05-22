import { Route, BrowserRouter } from "react-router-dom";
import Login from "./login";
import App from "../../App";
import Cart from "../Cart/Cart"

const MyRoutes = () => {
  return (
    <BrowserRouter>
      
      <Route path="/Cart" element={<Cart />} />
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </BrowserRouter>
  );
};

export default MyRoutes;
