import axios from "axios";
import Deletemember from "./modals/deletemember";
import { useState } from "react";
import Updatemember from "./modals/updatemember";

function MemberCard({
  firstName,
  lastName,
  date,
  image,
  status,
  id,
  email,
  setvalue,
}) {
  return (
    <div className="card text-center">
      <div className="card-header d-flex justify-content-center">
        <img src={image} alt="profile-image" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
        <p className="card-text"></p>
        <button
          className="me-3 bg-white"
          data-bs-toggle="modal"
          data-bs-target={`#modal-${id}`}
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
          id={id}
          setvalue={setvalue}
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

        <Deletemember id={id} />
        <div>
          <b>Status : </b>
          {status}
        </div>
      </div>
      <div className="card-footer text-muted">{date} ago</div>
    </div>
  );
}

export default MemberCard;
