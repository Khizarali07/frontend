import axios from "axios";
import { useEffect, useState } from "react";
import { Await } from "react-router-dom";

function Updateactivity({
  assignTo,
  activityDescription,
  notes,
  dateActivity,
  dateFollowUp,
  reason,
  id,
  LinkID,
  fetchActivity,
  fetchnames,
}) {
  const [formData, setFormData] = useState({
    LinkID,
    assignedTo: assignTo,
    dateActivity,
    dateFollowUp,
    activityDescription,
    notes,
    reason,
  });

  const [allusers, setallusers] = useState([]);
  const [allmanager, setallmanager] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    const res = await axios({
      method: "POST",
      url: `https://backend-production-e5ac.up.railway.app/api/v1/users/updateactivity/${id}`,
      data: { formData },
      // Important: include credentials
    });

    if (res.data.status) {
      alert("Activity updated successfully");
    }
    // }
    console.log(formData.assignedTo);
    await fetchActivity(); // Refresh the members list after adding
    // await fetchnames();
  };

  const fetchmembers = async () => {
    const res = await axios({
      method: "GET",
      url: "https://backend-production-e5ac.up.railway.app/api/v1/users/getusers",
      // Important: include credentials
    });
    const members = res.data.data.data;
    console.log(members);

    setallusers(members);
  };

  const fetchmanagers = async () => {
    const res = await axios({
      method: "GET",
      url: "https://backend-production-e5ac.up.railway.app/api/v1/users/getmanagers",
      // Important: include credentials
    });
    const members = res.data.data.data;
    console.log(members);

    setallmanager(members);
  };

  useEffect(() => {
    fetchmembers();
    fetchmanagers();
  }, []);
  return (
    <div
      className="modal fade"
      id={`exampleModal-${id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="exampleModalLabel">
              Add New Activity
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <form>
              <label htmlFor="firstName">Link To:</label>
              <select
                id="firstName"
                name="LinkID"
                value={formData.LinkID}
                onChange={handleChange}
                style={{ cursor: "auto" }}
                required
              >
                <option value="nothing">Select assignee</option>
                {allusers.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
              </select>

              <label htmlFor="firstName">Assigned To Managers:</label>
              <select
                id="firstName"
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
                style={{ cursor: "auto" }}
                required
              >
                <option value="nothing">Select assignee</option>
                {allmanager.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
              </select>

              <label htmlFor="lastName">Date Activity:</label>
              <input
                type="date"
                id="lastName"
                name="dateActivity"
                value={formData.dateActivity}
                onChange={handleChange}
                required
              />
              <label htmlFor="lastName">Follow up Date :</label>
              <input
                type="date"
                id="lastName"
                name="dateFollowUp"
                value={formData.dateFollowUp}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Activity Description:</label>
              <textarea
                id="email"
                name="activityDescription"
                value={formData.activityDescription}
                onChange={handleChange}
                style={{ cursor: "auto" }}
                required
              />
              <label htmlFor="notes">Notes:</label>
              <textarea
                id="password"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                style={{ cursor: "auto" }}
                required
              />
              <label htmlFor="reason">Reason :</label>
              <textarea
                type="text"
                id="password"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                style={{ cursor: "auto" }}
              />
            </form>
          </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updateactivity;
