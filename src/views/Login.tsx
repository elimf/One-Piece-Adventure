import React from "react";
//import { useAuth } from "../router/AuthContext";

const Login: React.FC = () => {
 // const { login } = useAuth();

  const handleLogin = () => {
    // Ajoutez ici votre logique de connexion avec l'API, par exemple.
    // Après une connexion réussie, appelez la fonction login(token) du contexte.
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
