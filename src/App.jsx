import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./assets/login";
import Members from "./assets/members";
import Activity from "./assets/activity";

import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [user, setuser] = useState("");
  const checkadmin = async () => {
    const cookieValue = Cookies.get("jwt");
  };

  useEffect(() => {
    checkadmin();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Activity />} />
        <Route path="/members" element={<Members />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
