import axios from "axios";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextType {
  token: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
}

// Create a context to manage authentication state.
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [currentRefreshToken, setRefreshToken] = useState<string | null>(null);

  // Function to handle user login.
  const login = async (credentials: { email: string; password: string }) => {
    try {
      // Access the backend URL from the environment variable.
      const backendUrl = process.env.REACT_APP_BACKEND_URL;

      // Make a request to the login endpoint using provided credentials.
      const response = await axios.post(
        `${backendUrl}/auth/login`,
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const { access_token, refresh_token } = response.data;
        setToken(access_token);
        setRefreshToken(refresh_token);
        localStorage.setItem("refresh_token", refresh_token);
        localStorage.setItem("access_token", access_token);
      } else {
        throw new Error("Failed to log in");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle the error, e.g., display an error message.
    }
  };

  // Function to handle user logout.
  const logout = () => {
    setToken(null);
    setRefreshToken(null);

    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
  };

  // Function to refresh the access token using the refresh token.
  const refreshAccessToken = async () => {
    try {
      // Access the backend URL from the environment variable.
      const backendUrl = process.env.REACT_APP_BACKEND_URL;

      // Make a request to the refresh token endpoint using the stored refresh token.
      const response = await axios.post(
        `${backendUrl}/refresh`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentRefreshToken}`,
          },
        }
      );

      if (response.status === 200) {
        const { access_token, refresh_token } = response.data;
        setToken(access_token);
        setRefreshToken(refresh_token);

        localStorage.setItem("refresh_token", refresh_token);
        localStorage.setItem("access_token", access_token);
      } else {
        throw new Error("Failed to refresh token");
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  // Provide the AuthContext value to the children components.
  return (
    <AuthContext.Provider
      value={{ token, login, logout, refreshToken: refreshAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext within functional components.
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
