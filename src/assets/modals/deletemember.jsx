import axios from "axios";

function Deletemember({ id, fetchMembers, role }) {
  const handlesubmit = async () => {
    if (role === "Manager") {
      const res = await axios({
        method: "GET",
        url: `https://backend-production-e5ac.up.railway.app/api/v1/users/delete/${id}`,
        // Important: include credentials
      });

      if (res.data.status) {
        alert("deleted successfully");
      }
    } else {
      const res = await axios({
        method: "GET",
        url: `https://backend-production-e5ac.up.railway.app/api/v1/users/deletemember/${id}`,
        // Important: include credentials
      });

      if (res.data.status) {
        alert("deleted successfully");
      }
    }

    fetchMembers();
  };
  return (
    <div
      className="modal fade"
      id={`modal-delete-${id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="exampleModalLabel">
              Delete member
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Do you really want to delete this Person ?
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
                handlesubmit();
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

export default Deletemember;
