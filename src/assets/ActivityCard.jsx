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
}) {
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
          className="me-3 bg-white"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal-${id}`}
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
          fetchActivity={fetchActivity}
        />

        <button
          type="button"
          className="bg-white"
          data-bs-toggle="modal"
          data-bs-target={`#modal-delete-${id}`}
        >
          <i
            className="fa-solid fa-trash text-dark"
            style={{ fontSize: "20px" }}
          ></i>
        </button>

        <Deleteactivity id={id} fetchActivity={fetchActivity} />

        <p>
          <strong>Created date : </strong>
          {dateCreated}
        </p>
        <p>
          <strong>Last Date : </strong>
          {dateActivity}
        </p>
        <p>
          <strong>Follow Up : </strong>
          {dateFollowUp}
        </p>
      </div>
    </div>
  );
}

export default ActivityCard;
