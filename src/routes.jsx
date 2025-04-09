import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Users from "./pages/Users";
import Products from "./pages/Products";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}
