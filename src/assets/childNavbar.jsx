import { useEffect } from "react";
import "./index.css";
import AddMember from "./modals/addMember.jsx";
import Cookies from "js-cookie";

function ChildNavbar({
  sortbyname,
  setsortbyName,
  sortbydate,
  setsortbyDate,
  status = "",
  setStatus = async () => {},
  fetchM,
  check,
}) {
  let userRole = "";

  useEffect(() => {
    userRole = Cookies.get("userRole");
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-primary justify-content-center"
        style={{ height: "50px" }}
      >
        <div className="container-fluid">
          <div
            style={{
              display: "flex",
              width: "100vw",
            }}
          >
            <select
              value={sortbyname}
              onChange={(evt) => setsortbyName(evt.target.value)}
              className="actions"
            >
              <option value="default">Default</option>
              <option value="assending">Sort by Ascending Order</option>
              <option value="desending">Sort by Descending Order</option>
            </select>

            <select
              value={sortbydate}
              onChange={(evt) => setsortbyDate(evt.target.value)}
              className="actions"
            >
              <option value="default">Default</option>
              <option value="assending_d">
                Sort by Date (Ascending Order)
              </option>
              <option value="desending_d">
                Sort by Date (Descending Order)
              </option>
            </select>

            {check === "Member" ? (
              <select
                value={status}
                onChange={(evt) => setStatus(evt.target.value)}
                className="actions"
              >
                <option value="ALL">ALL</option>
                <option value="active">Active Members</option>
                <option value="less_active">Less Active Members</option>
                <option value="do_not_contact">Do Not Contact</option>
              </select>
            ) : (
              ""
            )}
            <button
              type="button"
              className="btn btn-primary action"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {check === "Manager" ? "Add Manager" : "Add Member"}
            </button>
            <AddMember fetchM={fetchM} role={check} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default ChildNavbar;
