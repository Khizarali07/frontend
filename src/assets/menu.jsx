import { Link } from "react-router-dom";

export default function Menu({ user }) {
  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ width: "35rem" }}
      >
        <div className="offcanvas-header container">
          <div
            className="offcanvas-title d-flex flex-column"
            id="offcanvasExampleLabel"
            style={{ marginTop: "6rem", marginLeft: "1rem" }}
          >
            <div className="sb-login-box">
              {user && user === "Admin" ? (
                <Link to="/members" className="ga-dataset user-logout ms-1">
                  <i
                    className="fa-solid fa-user me-3 text-white"
                    style={{ fontSize: "20px", overflowY: "hidden" }}
                  ></i>
                  Members
                </Link>
              ) : (
                ""
              )}
              <Link
                to="/"
                className="ga-dataset user-logout"
                style={{ width: "200px" }}
              >
                <img
                  className="me-3"
                  src="https://static.priceoye.pk/images/user-dashboard/complaint-white.svg"
                  alt="complaint"
                  width="22"
                  height="22"
                ></img>
                Activities
              </Link>
            </div>
          </div>
          <img
            src="https://static.priceoye.pk/icons/close-box.svg"
            className="close-icon"
            alt="close-icon"
            width="20px"
            height="20px"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ position: "absolute", top: "75px", right: "30px" }}
          />
        </div>

        <div
          className="offcanvas-body"
          style={{ position: "absolute", top: "280px", paddingBottom: "0px" }}
        >
          <div></div>
        </div>
      </div>
    </>
  );
}
