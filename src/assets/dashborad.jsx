import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import "./App.css";
import "./style_home.css";

function Dashborad() {
  const navigate = useNavigate();
  useEffect(() => {
    const cookieValue = Cookies.get("jwt");
    console.log(cookieValue);
    if (!cookieValue) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Navbar />
      <div>DASHBOARD</div>
    </>
  );
}

export default Dashborad;
