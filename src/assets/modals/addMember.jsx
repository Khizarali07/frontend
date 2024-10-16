import axios from "axios";
import { useRef, useState } from "react";

export default function AddMember({ fetchM, role }) {
  const initializeFormData = (role) => {
    if (role === "Manager") {
      return {
        firstName: "",
        lastName: "",
        email: "",
      }; // No status field for Manager
    } else if (role === "Member") {
      return {
        firstName: "",
        lastName: "",
        status: "",
      };
    }
    return {};
  };

  const [formData, setFormData] = useState(initializeFormData(role));
  const formRef = useRef(null);

  let res = "";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const hide = () => {
    window.$("#exampleModal").modal("hide");
  };

  const handleSubmit = async () => {
    if (role === "Manager") {
      if (formRef.current.checkValidity()) {
        try {
          setTimeout(fetchM, 2000);
          setTimeout(hide, 2000);
          res = await axios({
            method: "POST",
            url: "https://backend-production-e5ac.up.railway.app/api/v1/users/signup",
            data: { formData },
            // Important: include credentials
          });

          // Refresh the members list after adding
        } catch (error) {
          alert(`Error adding member: ${error.response.data.message}`);
        }
      } else {
        // If the form is invalid, show validation error messages
        formRef.current.reportValidity();
      }
    } else {
      if (formRef.current.checkValidity()) {
        try {
          setTimeout(fetchM, 2000);
          setTimeout(hide, 2000);
          res = await axios({
            method: "POST",
            url: "https://backend-production-e5ac.up.railway.app/api/v1/users/createmember",
            data: { formData },
            // Important: include credentials
          });

          // Refresh the members list after adding
        } catch (error) {
          alert(`Error adding member: ${error.response.data.message}`);
        }
      } else {
        // If the form is invalid, show validation error messages
        formRef.current.reportValidity();
      }
    }
  };

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
              {role === "Manager" ? "Add New Manager" : "Add New Member"}
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <form ref={formRef}>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={{ cursor: "auto" }}
                required
              />
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={{ cursor: "auto" }}
                required
              />
              {role === "Manager" ? (
                <>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ cursor: "auto" }}
                    required
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ cursor: "auto" }}
                    required
                  />
                </>
              ) : (
                ""
              )}

              {role === "Member" ? (
                <>
                  <label htmlFor="email">Status :</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Active">Active</option>
                    <option value="Less Active">Less Active</option>
                    <option value="Do Not Contact">Don Not Contact</option>
                  </select>
                </>
              ) : (
                ""
              )}
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
