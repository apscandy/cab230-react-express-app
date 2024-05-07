import { Authorization } from "../App";
import { useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useContext(Authorization);
  const registerUrl = `${import.meta.env.VITE_API_ENDPOINT}/user/register`;
  const loginUrl = `${import.meta.env.VITE_API_ENDPOINT}/user/login`;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  // Function to handle API requests
  const requestService = useCallback(
    async (url) => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      return response;
    },
    [email, password]
  );

  // Function to handle user logout
  const logoutFunction = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  }, [setIsLoggedIn]);

  // revoke user session when called
  const expiredSession = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    setErrors("session expired you have been logged out");
  }, [setIsLoggedIn]);

  // Function to handle user login
  const loginFunction = useCallback(async () => {
    try {
      const response = await requestService(loginUrl);
      const json = await response.json();
      if (response.status === 401 || response.status === 400) {
        setErrors(json.message);
      }
      if (response.status === 200) {
        localStorage.setItem("token", json.token);
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch {
      setErrors("Server Error");
    }
  }, [loginUrl, navigate, requestService, setIsLoggedIn]);

  // Function to handle user registration
  const registerFunction = useCallback(async () => {
    try {
      const response = await requestService(registerUrl);
      const json = await response.json();
      if (response.status === 400 || response.status === 409) {
        setErrors(json.message);
        return;
      }
      if (response.status === 201) {
        loginFunction();
        navigate("/");
      }
    } catch {
      setErrors("Server Error");
    }
  }, [loginFunction, navigate, registerUrl, requestService]);

  return {
    isLoggedIn,
    errors,
    setEmail,
    setPassword,
    registerFunction,
    loginFunction,
    logoutFunction,
    expiredSession,
  };
}
