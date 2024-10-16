import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function AddActivity({ fetch }) {
  const [formData, setFormData] = useState({
    LinkID: "",
    assignedTo: "",
    dateActivity: "",
    activityDescription: "",
    notes: "",
    reason: "",
  });

  const formRef = useRef(null); // Reference for the form
  const [allusers, setallusers] = useState([]);
  const [allmanagers, setallmanagers] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (formRef.current.checkValidity()) {
      try {
        console.log(formData);
        if (formData.LinkID === "" || formData.assignedTo === "") {
          alert("Please select an assignee");
        } else {
          await axios({
            method: "POST",
            url: `https://backend-production-e5ac.up.railway.app/api/v1/users/createactivity`,
            data: { formData },
            // Important: include credentials
          });
          alert("activity added successfully");
          setFormData({
            LinkID: "",
            dateActivity: "",
            activityDescription: "",
            notes: "",
            reason: "",
          });
          window.$("#exampleModal").modal("hide");
          await fetch();
        }
      } catch (error) {
        console.error("Error adding member:", error);
      }
    } else {
      // If the form is invalid, show validation error messages
      formRef.current.reportValidity();
    }
  };

  const fetchmembers = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://backend-production-e5ac.up.railway.app/api/v1/users/getusers",
        // Important: include credentials if needed
      });
      const members = res.data.data.data;
      console.log("Members fetched:", members); // Log the response
      setallusers(members);
    } catch (error) {
      console.error("Error fetching members:", error); // Log any errors
    }
  };

  const fetchmanagers = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://backend-production-e5ac.up.railway.app/api/v1/users/getmanagers",
        // Important: include credentials if needed
      });
      const members = res.data.data.data;
      console.log("Members fetched:", members); // Log the response
      setallmanagers(members);
    } catch (error) {
      console.error("Error fetching members:", error); // Log any errors
    }
  };

  useEffect(() => {
    fetchmembers();
    fetchmanagers();
  }, []);

  return (
    <div
      className="modal fade"
      id="exampleModal"
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
            <form ref={formRef}>
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
                {allmanagers.map((user) => (
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

              <label htmlFor="email">Activity Description:</label>
              <textarea
                id="email"
                name="activityDescription"
                value={formData.activityDescription}
                onChange={handleChange}
                style={{ cursor: "auto" }}
                required
              />
              <label htmlFor="password">Notes:</label>
              <textarea
                id="password"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                style={{ cursor: "auto" }}
                required
              />
              <label htmlFor="password">Reason :</label>
              <textarea
                id="password"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                style={{ cursor: "auto" }}
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
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
