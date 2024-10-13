import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./assets/login";
import Members from "./assets/members";
import Activity from "./assets/activity";

import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const checkadmin = async () => {
    const cookieValue = Cookies.get("jwt");

    // const res = await axios({
    //   method: "GET",
    //   url: `https://backend-production-e5ac.up.railway.app/api/v1/users/getdata/${cookieValue}`,
    //   // Important: include credentials
    // });

    console.log(res);
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
