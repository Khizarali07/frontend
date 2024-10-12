import "./index.css";
import AddMember from "./modals/AddMember";

function ChildNavbar({
  sortbyname,
  setsortbyName,
  sortbydate,
  setsortbyDate,
  status,
  setStatus,
  fetchM,
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
              className="btn btn-primary action"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Member
            </button>
            <AddMember fetchM={setsortbyDate} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default ChildNavbar;
