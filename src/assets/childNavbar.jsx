import "./index.css";

import AddMember from "./modals/addMember";

function ChildNavbar({
  sortbyname,
  setsortbyName,
  sortbydate,
  setsortbyDate,
  status,
  setStatus,
  setvalue,
}) {
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
              <option value="assending">Sort by Assending Order</option>
              <option value="desending">Sort by desending Order</option>
            </select>

            <select
              onChange={(evt) => setsortbyDate(evt.target.value)}
              className="actions"
            >
              <option value="default">Default</option>
              <option value="assending_d">
                Sort by Date (Assending Order)
              </option>
              <option value="desending_d">
                Sort by Date (desending Order)
              </option>
            </select>

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
            <button
              type="button"
              class="btn btn-primary action"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Member
            </button>
            <AddMember setvalue={setvalue} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default ChildNavbar;
