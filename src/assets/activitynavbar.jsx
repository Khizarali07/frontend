import "./index.css";
import Addactivity from "./modals/Addactivity.jsx";

function ActivityNavbar({
  sortbyname,
  setsortbyName,
  sortbydateC,
  setsortbyDateC,
  sortbydateE,
  setsortbyDateE,
  sortbydateF,
  setsortbyDateF,
  fetch,
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
              value={sortbydateC}
              onChange={(evt) => setsortbyDateC(evt.target.value)}
              className="actions"
            >
              <option value="default">Default</option>
              <option value="asc">Sort by Date Created (Asc)</option>
              <option value="desc">Sort by Date Created (Desc)</option>
            </select>

            <select
              value={sortbydateE}
              onChange={(evt) => setsortbyDateE(evt.target.value)}
              className="actions"
            >
              <option value="default">Default</option>
              <option value="asc">Sort b Last Date (Asc)</option>
              <option value="desc">Sort by Last Date (Desc)</option>
            </select>

            <select
              value={sortbydateF}
              onChange={(evt) => setsortbyDateF(evt.target.value)}
              className="actions"
            >
              <option value="default">Default</option>
              <option value="asc">Sort by Follow-Up Date (Asc)</option>
              <option value="desc">Sort by Follow-Up Date (Desc)</option>
            </select>

            <button
              type="button"
              className="btn btn-primary action"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Activity
            </button>
            <Addactivity fetch={fetch} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default ActivityNavbar;
