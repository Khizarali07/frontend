import Updateactivity from "./modals/Updateactivity";
import Deleteactivity from "./modals/Deleteactivity";

function ActivityCard({
  assignTo,
  activityDescription,
  notes,
  dateCreated,
  dateActivity,
  reason,
  id,
  dateFollowUp,
  fetchActivity,
  linkID,
}) {
  const formatDate = (dateString) => {
    if (dateString) {
      const dateObject = new Date(dateString);
      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const day = String(dateObject.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    } else {
      return "";
    }
  };

  return (
    <div
      className="card container text-center my-3"
      style={{ height: "330px" }}
    >
      <div className="card-body">
        <p className="card-title" style={{ fontSize: "15px" }}>
          <b style={{ marginRight: "20px" }}>Assign To : </b>
          {` ${assignTo}`}
        </p>
        <h6 className="card-subtitle my-3 text-body-secondary">
          {activityDescription}
        </h6>
        <p className="card-text mt-3">Notes : {notes}</p>
        <button
          className="me-3 bg-white my-3"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal-${id}`}
          style={{ border: "none" }}
        >
          <i
            className="fa-solid fa-pen-to-square text-dark"
            style={{ fontSize: "20px" }}
          ></i>
        </button>

        <Updateactivity
          assignTo={assignTo}
          activityDescription={activityDescription}
          notes={notes}
          dateActivity={dateActivity}
          dateFollowUp={dateFollowUp}
          reason={reason}
          id={id}
          linkID={linkID}
          fetchActivity={fetchActivity}
        />

        <button
          type="button"
          className="bg-white"
          data-bs-toggle="modal"
          data-bs-target={`#modal-delete-${id}`}
          style={{ border: "none" }}
        >
          <i
            className="fa-solid fa-trash text-dark"
            style={{ fontSize: "20px" }}
          ></i>
        </button>

        <Deleteactivity id={id} fetchActivity={fetchActivity} />

        <p className="my-2">
          <strong>Created date : </strong>
          {formatDate(dateCreated)}
        </p>
        <p className="my-2">
          <strong>Last Date : </strong>
          {formatDate(dateActivity)}
        </p>
        <p className="my-2">
          <strong>Follow Up : </strong>
          {formatDate(dateFollowUp)}
        </p>
      </div>
    </div>
  );
}

export default ActivityCard;
