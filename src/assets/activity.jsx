import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import ActivityCard from "./ActivityCard";
import ActivityNavbar from "./activitynavbar";
import "./style_home.css";

function Activity() {
  const navigate = useNavigate();

  const [sortbyname, setsortbyName] = useState("default");
  const [sortbydateC, setsortbyDateC] = useState("default");
  const [sortbydateE, setsortbyDateE] = useState("default");
  const [sortbydateF, setsortbyDateF] = useState("default");

  const [sorteditems, setsorteditems] = useState([]);
  let items = [];
  let activity = [];
  const [m, setM] = useState([]);

  const fetchActivity = async () => {
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
      // Important: include credentials
    });
    activity = res.data.data.currentActivity;
    console.log(activity);

    setM(activity);
    setsorteditems(activity);
  };

  const handleSortByName = () => {
    if (sortbyname === "default") {
      items = m.slice();
      setsorteditems((a) => (a = items));

      console.log(sorteditems);
    } else if (sortbyname === "assending") {
      items = m
        .slice()
        .sort((a, b) => a.assignedTo.localeCompare(b.assignedTo));
      setsorteditems((a) => (a = items));

      console.log(sorteditems);
    } else if (sortbyname === "desending") {
      items = m
        .slice()
        .sort((a, b) => b.assignedTo.localeCompare(a.assignedTo));
      setsorteditems((a) => (a = items));

      console.log(sorteditems);
    }
  };

  const handleSortByDate = () => {
    if (sortbydateC === "default") {
      items = m.slice(); // Simply copy the original array for default sorting
      setsorteditems(items); // Set sorted items to default
    } else if (sortbydateC === "asc") {
      // Ascending order
      items = m.slice().sort((a, b) => {
        new Date(a.dateAssigned) - new Date(b.dateAssigned);
      }); // Sort by date in ascending order
      setsorteditems(items);
    } else if (sortbydateC === "desc") {
      // Descending order
      items = m
        .slice()
        .sort((a, b) => new Date(b.dateAssigned) - new Date(a.dateAssigned)); // Sort by date in descending order
      setsorteditems(items);
    }
  };

  const handleSortByDateE = () => {
    if (sortbydateE === "default") {
      items = m.slice(); // Simply copy the original array for default sorting
      setsorteditems(items); // Set sorted items to default
    } else if (sortbydateE === "asc") {
      // Ascending order
      items = m.slice().sort((a, b) => {
        new Date(a.dateAssigned) - new Date(b.dateAssigned);
      }); // Sort by date in ascending order
      setsorteditems(items);
    } else if (sortbydateE === "desc") {
      // Descending order
      items = m
        .slice()
        .sort((a, b) => new Date(b.dateAssigned) - new Date(a.dateAssigned)); // Sort by date in descending order
      setsorteditems(items);
    }
  };

  const handleSortByDateF = () => {
    if (sortbydateF === "default") {
      items = m.slice(); // Simply copy the original array for default sorting
      setsorteditems(items); // Set sorted items to default
    } else if (sortbydateF === "asc") {
      // Ascending order
      items = m.slice().sort((a, b) => {
        new Date(a.dateAssigned) - new Date(b.dateAssigned);
      }); // Sort by date in ascending order
      setsorteditems(items);
    } else if (sortbydateF === "desc") {
      // Descending order
      items = m
        .slice()
        .sort((a, b) => new Date(b.dateAssigned) - new Date(a.dateAssigned)); // Sort by date in descending order
      setsorteditems(items);
    }
  };

  useEffect(() => {
    handleSortByName();
  }, [sortbyname]);

  useEffect(() => {
    handleSortByDate();
  }, [sortbydateC]);

  useEffect(() => {
    handleSortByDateE();
  }, [sortbydateE]);

  useEffect(() => {
    handleSortByDateF();
  }, [sortbydateF]);

  useEffect(() => {
    fetchActivity();
  }, []);
  return (
    <>
      <Navbar />
      <ActivityNavbar
        sortbyname={sortbyname}
        setsortbyName={setsortbyName}
        sortbydateC={sortbydateC}
        setsortbyDateC={setsortbyDateC}
        sortbydateE={sortbydateE}
        setsortbyDateE={setsortbyDateE}
        sortbydateF={sortbydateF}
        setsortbyDateF={setsortbyDateF}
        fetch={fetchActivity}
      />
      <div className="row">
        {sorteditems.map((activity) => (
          <div
            className="col-sm-4 col-md-4 col-lg-4"
            style={{ textTransform: "capitalize" }}
            key={activity._id}
          >
            <ActivityCard
              assignTo={activity.assignedTo}
              activityDescription={activity.activityDescription}
              notes={activity.notes}
              dateCreated={activity.dateAssigned}
              dateActivity={activity.dateActivity}
              dateFollowUp={activity.dateFollowUp}
              reason={activity.reason}
              id={activity._id}
              fetchActivity={fetchActivity}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Activity;
