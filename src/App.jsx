import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./assets/login";
import Members from "./assets/members";
import Activity from "./assets/activity";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function App() {
  const [user, setuser] = useState("");
  const checkadmin = async () => {
    const cookieValue = Cookies.get("userRole");

    setuser(cookieValue);
  };

  useEffect(() => {
    checkadmin();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Activity user={user} />} />
        {user === "Admin" ? (
          <Route path="/members" element={<Members user={user} />} />
        ) : (
          ""
        )}

        <Route path="/login" element={<Login setuser={setuser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
