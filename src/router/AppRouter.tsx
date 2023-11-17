import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./AuthContext";
import Game from "../views/Game";
import Login from "../views/Login";
import Home from "../views/Home";

const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { token } = useAuth();
  return token ? element : <Navigate to="/login" />;
};

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<PrivateRoute element={<Game />} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
