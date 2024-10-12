import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./assets/login";
import Members from "./assets/members";
import Activity from "./assets/activity";
import Dashboard from "./assets/dashborad";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/members" element={<Members />} />
        <Route path="/activities" element={<Activity />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
