import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import ActivityCard from "./ActivityCard";

function Activity() {
  const navigate = useNavigate();

  const [sorteditems, setsorteditems] = useState([]);
  let items = [];
  let activity = [];
  const [m, setM] = useState([]);

  const fun = async () => {
    const cookieValue = Cookies.get("jwt");
    console.log(cookieValue);
    if (!cookieValue) {
      navigate("/login");
    }
    const res = await axios({
      method: "POST",
      url: "https://backend-production-e5ac.up.railway.app/api/v1/users/getallactivity",
      data: {
        jwt: cookieValue,
      },
    });
    activity = res.data.data.currentActivity;
    console.log(activity);

    setM(activity);
    setsorteditems(activity);
  };

  useEffect(() => {
    fun();
  }, []);
  return (
    <>
      <Navbar />
      {/* <ChildNavbar
        sortbyname={sortbyname}
        setsortbyName={setsortbyName}
        sortbydate={sortbydate}
        setsortbyDate={setsortbyDate}
        status={status}
        setStatus={setStatus}
      /> */}
      <div className="row">
        {sorteditems.map((activity) => (
          <div
            className="col-sm-4 col-md-4 col-lg-4"
            style={{ textTransform: "capitalize" }}
            key={activity._id}
          >
            <ActivityCard
              assignTo={activity.assignedTo}
              description={activity.activityDescription}
              notes={activity.notes}
              dateCreated={activity.dateAssigned}
              dateend={activity.dateActivity}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Activity;
