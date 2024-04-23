import { useState, useEffect } from "react";
import Login from "./Page/Login"; // Corrected import name
import Signup from "./Page/Signup";
import { auth } from "./FirebaseConfig";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Page/Components/Home";
import Test from "./Page/Test";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe; // Cleanup function for unsubscribing
  }, []); // Empty dependency array to run only once during mount

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={user ? "/to-do-list" : "/login"} />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/to-do-list" /> : <Login />} // Corrected component name
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/to-do-list" /> : <Signup />}
          />
          <Route
            path="/profile"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/to-do-list"
            element={user ? <Test user={user} /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
