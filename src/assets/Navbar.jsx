import bar from "./Media/bar.svg";
import userimg from "./Media/user.png";
import Cookies from "js-cookie";

import Menu from "./menu";
import "./App.css";

function Navbar({ user }) {
  return (
    <>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#48afff" }}
      >
        <div className="container-fluid" style={{ overflowY: "hidden" }}>
          <div style={{ display: "flex" }}>
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              style={{ border: "none" }}
            >
              <img src={bar} alt="bar" />
            </button>
            <Menu user={user} />

            <a href="/" className="navbar-brand ms-3">
              {/* <img src={logo} alt="logo" /> */}
            </a>
          </div>

          <div style={{ display: "flex" }}>
            <img
              src={userimg}
              alt="profile image"
              style={{ width: "50px", height: "50px", marginRight: "5px" }}
            />
            <a
              className="btn btn1 btn-lg me-3 d-flex justify-content-center align-items-center "
              href="#"
              role="button"
              style={{
                width: "80px",
                height: "40px",
                marginTop: "5px",
                overflowY: "hidden",
              }}
              onClick={() => {
                Cookies.remove("jwt");
                window.location.reload();
              }}
            >
              Log Out
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
