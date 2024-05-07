import { useEffect, useState, useCallback } from "react";
import useAuth from "./useAuth";

export default function useFetchVolcanoData(id) {
  const { isLoggedIn, expiredSession } = useAuth();
  const [errors, setErrors] = useState("");
  const [data, setData] = useState({});
  const url = `${import.meta.env.VITE_API_ENDPOINT}/volcano/${id}`;

  // generic fetch function with auth checking.
  const fetching = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (isLoggedIn) {
      return await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      return await fetch(url);
    }
  }, [isLoggedIn, url]);

  // fetch all data on a volcano based on the id passed
  const fetchById = useCallback(async () => {
    if (isNaN(id)) {
      return setErrors("please provide a numeric number");
    }
    try {
      const response = await fetching();
      const json = await response.json();
      if (response.status === 401) {
        expiredSession();
        setErrors("your session has expired you have been logged out");
        setData(json);
        return;
      }
      if (response.status === 400 || response.status === 404) {
        setErrors(json.message);
        return;
      }
      if (response.status === 200) {
        setData(json);
        return;
      }
    } catch {
      setErrors("Server Error");
    }
  }, [id, fetching, expiredSession]);

  useEffect(() => {
    fetchById();
  }, [isLoggedIn, id, fetchById]);
  
  return { data, errors };
}
