import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState, createContext } from "react";

import Home from "./pages/Home";
import Volcano from "./pages/Volcano";
import VolcanoList from "./pages/VolcanoList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export const Authorization = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Authorization.Provider value={[isLoggedIn, setIsLoggedIn]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/volcanos" element={<VolcanoList />} />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/volcano/:id" element={<Volcano />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Authorization.Provider>
    </BrowserRouter>
  );
}

export default App;
