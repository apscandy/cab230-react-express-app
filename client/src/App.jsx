import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState, createContext, lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Volcano = lazy(() => import("./pages/Volcano"));
const VolcanoList = lazy(() => import("./pages/VolcanoList"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
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
    <Suspense>
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
    </Suspense>
  );
}

export default App;
