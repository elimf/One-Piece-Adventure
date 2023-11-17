// App.tsx
import React from "react";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./router/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
