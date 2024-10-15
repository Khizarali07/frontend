import axios from "axios";
import Deletemember from "./modals/deletemember";
import { useState } from "react";
import Updatemember from "./modals/updatemember";
import CreateActivity from "./modals/createActivity";

function MemberCard({
  firstName,
  lastName,
  date,
  image,
  status = "",
  id,
  email,
  fetchMembers,
  check,
}) {
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(dateObject.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <div className="card text-center mt-4" style={{ width: "40rem" }}>
      <div className="card-header d-flex justify-content-center">
        <img src={image} alt="profile-image" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
        <p className="card-text"></p>

        {check === "Member" ? (
          <>
            <button
              className="me-3 bg-white"
              data-bs-toggle="modal"
              data-bs-target={`#modalactivity-${id}`}
              style={{ border: "none" }}
            >
              <i
                class="fa-regular fa-address-book text-dark"
                style={{ fontSize: "20px" }}
              ></i>
            </button>

            <CreateActivity
              LinkID={id}
              firstName={firstName}
              lastName={lastName}
            />
          </>
        ) : (
          ""
        )}

        <button
          className="me-3 bg-white"
          data-bs-toggle="modal"
          data-bs-target={`#modal-${id}`}
          style={{ border: "none" }}
        >
          <i
            className="fa-solid fa-pen-to-square text-dark"
            style={{ fontSize: "20px" }}
          ></i>
        </button>

        <Updatemember
          firstName={firstName}
          lastName={lastName}
          email={email}
          status={status}
          id={id}
          fetchMembers={fetchMembers}
          role={check}
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

        <Deletemember role={check} id={id} fetchMembers={fetchMembers} />

        {check === "Member" ? (
          <div>
            <b>Status : </b>
            {status}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="card-footer text-muted">{formatDate(date)}</div>
    </div>
  );
}

export default MemberCard;
