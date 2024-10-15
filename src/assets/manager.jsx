import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import MemberCard from "./MemberCard";
import axios from "axios";
import Cookies from "js-cookie";
import ChildNavbar from "./childNavbar";
import "./style_home.css";

function Members({ user }) {
  const navigate = useNavigate();
  const [sorteditems, setsorteditems] = useState([]);

  let items = [];
  let members = [];

  const [m, setM] = useState([]);
  const [sortbyname, setsortbyName] = useState("default");
  const [sortbydate, setsortbyDate] = useState("default");
  const [status, setStatus] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  const fetchManagers = async () => {
    const cookieValue = Cookies.get("jwt");
    console.log(cookieValue);
    if (!cookieValue) {
      navigate("/login");
    }
    const res = await axios({
      method: "GET",
      url: "https://backend-production-e5ac.up.railway.app/api/v1/users/getmanagers",
      // Important: include credentials
    });
    members = res.data.data.data;

    setM(members);
    setsorteditems(members);
  };

  const handleSortByName = () => {
    if (sortbyname === "default") {
      items = m.slice();
      setsorteditems((a) => (a = items));

      console.log(sorteditems);
    } else if (sortbyname === "assending") {
      items = m.slice().sort((a, b) => a.firstName.localeCompare(b.firstName));
      setsorteditems((a) => (a = items));

      console.log(sorteditems);
    } else if (sortbyname === "desending") {
      items = m.slice().sort((a, b) => b.firstName.localeCompare(a.firstName));
      setsorteditems((a) => (a = items));

      console.log(sorteditems);
    }
  };
  //     if (sortbydate === "default") {
  //       const res = await axios({
  //         method: "GET",
  //         url: "https://backend-production-e5ac.up.railway.app/api/v1/users/getusers",
  //         // Important: include credentials
  //       });
  //       members = res.data.data.data;

  //       setM(members);
  //       setsorteditems(members);
  //     }
  //     if (sortbydate === "assending_d") {
  //       const res = await axios({
  //         method: "GET",
  //         url: "https://backend-production-e5ac.up.railway.app/api/v1/users/dateasc",
  //         // Important: include credentials
  //       });
  //       console.log(res);
  //       members = res.data.data.data;

  //       setM(members);
  //       setsorteditems(members);
  //     }
  //     if (sortbydate === "desending_d") {
  //       const res = await axios({
  //         method: "GET",
  //         url: "https://backend-production-e5ac.up.railway.app/api/v1/users/datedesc",
  //         // Important: include credentials
  //       });
  //       members = res.data.data.data;

  //       setM(members);
  //       setsorteditems(members);
  //     }
  //   };

  const handleDate = () => {
    if (sortbydate === "default") {
      members = m.slice(); // Simply copy the original array for default sorting

      setsorteditems(members);
    } else if (sortbydate === "assending_d") {
      // Ascending order
      members = m.slice().sort((a, b) => {
        new Date(a.datecreated) - new Date(b.datecreated);
      }); // Sort by date in ascending order

      setsorteditems(members);
    } else if (sortbydate === "desending_d") {
      // Descending order
      members = m
        .slice()
        .sort((a, b) => new Date(b.datecreated) - new Date(a.datecreated)); // Sort by date in descending order

      setsorteditems(members);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredMembers = m.filter(
      (member) =>
        member.firstName.toLowerCase().includes(query.toLowerCase()) ||
        member.lastName.toLowerCase().includes(query.toLowerCase())
    );
    setsorteditems(filteredMembers);
  };

  useEffect(() => {
    handleDate();
  }, [sortbydate]);

  useEffect(() => {
    handleSortByName();
  }, [sortbyname]);

  useEffect(() => {
    fetchManagers();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <ChildNavbar
        sortbyname={sortbyname}
        setsortbyName={setsortbyName}
        sortbydate={sortbydate}
        setsortbyDate={setsortbyDate}
        fetchM={fetchManagers}
        check="Manager"
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />
      <div className="row">
        {sorteditems.map((member) => (
          <div
            className="col-sm-4 col-md-4 col-lg-4"
            style={{
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "center",
            }}
            key={member._id}
          >
            <MemberCard
              firstName={member.firstName}
              lastName={member.lastName}
              date={member.datecreated}
              image={member.photo}
              email={member.email}
              id={member._id}
              check="Manager"
              fetchMembers={fetchManagers}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Members;
