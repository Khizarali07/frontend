import axios from "axios";
import { useState } from "react";

function Updatemember({
  firstName,
  lastName,
  email,
  status,
  id,
  fetchMembers,
}) {
  const [formData, setFormData] = useState({
    firstName,
    lastName,
    email,
    status,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Handle form submission here, e.g., send data to
    const res = await axios({
      method: "POST",
      url: `https://backend-production-e5ac.up.railway.app/api/v1/users/updateuser/${id}`,
      data: { formData },
      withCredentials: true, // Important: include credentials
    });

    fetchMembers();
  };
  return (
    <div
      className="modal fade"
      id={`modal-${id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="exampleModalLabel">
              Update Member
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
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Status :</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className=""
              >
                <option value="Active">Active</option>
                <option value="Less Active">Less Active</option>
                <option value="Do Not Contact">Don Not Contact</option>
              </select>
            </form>
          </div>
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
              data-bs-dismiss="modal"
              onClick={() => {
                handleSubmit();
              }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updatemember;
