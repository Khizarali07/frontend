function ActivityCard({ assignTo, description, notes, dateCreated, dateend }) {
  return (
    <div className="card container">
      <div className="card-body">
        <h5 className="card-title">{assignTo}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {description}
        </h6>
        <p className="card-text">{notes}</p>
        <p>
          <strong>Created date : </strong>
          {dateCreated | Date("yyyy-MM-dd")}
        </p>
        <p>
          <strong>Last Date : </strong>
          {dateend}
        </p>
      </div>
    </div>
  );
}

export default ActivityCard;
