import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./assets/login";
import Members from "./assets/members";
import Activity from "./assets/activity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/members" element={<Members />} />
        <Route path="/" element={<Activity />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
