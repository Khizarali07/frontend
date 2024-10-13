import axios from "axios";
import { useState } from "react";

function Updateactivity({
  assignTo,
  activityDescription,
  notes,
  dateActivity,
  dateFollowUp,
  reason,
  id,
  fetchActivity,
}) {
  const [formData, setFormData] = useState({
    assignTo,
    dateActivity,
    dateFollowUp,
    activityDescription,
    notes,
    reason,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    await axios({
      method: "POST",
      url: `https://backend-production-e5ac.up.railway.app/api/v1/users/updateactivity/${id}`,
      data: { formData },
      // Important: include credentials
    });

    await fetchActivity(); // Refresh the members list after adding
  };
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
              <label htmlFor="firstName">Assigned To :</label>
              <input
                type="text"
                id="firstName"
                name="assignedTo"
                value={formData.assignTo}
                onChange={handleChange}
                required
              />
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
              <input
                type="text"
                id="email"
                name="activityDescription"
                value={formData.activityDescription}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Notes:</label>
              <input
                type="text"
                id="password"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Reason :</label>
              <input
                type="text"
                id="password"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
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
