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

  const fetchMembers = async () => {
    const cookieValue = Cookies.get("jwt");
    console.log(cookieValue);
    if (!cookieValue) {
      navigate("/login");
    }
    const res = await axios({
      method: "GET",
      url: "https://backend-production-e5ac.up.railway.app/api/v1/users/getusers",
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

  const handledate = async () => {
    if (status === "ALL") {
      if (sortbydate === "default") {
        const res = await axios({
          method: "GET",
          url: "https://backend-production-e5ac.up.railway.app/api/v1/users/getusers",
          // Important: include credentials
        });
        members = res.data.data.data;

        setM(members);
        setsorteditems(members);
      }
      if (sortbydate === "assending_d") {
        const res = await axios({
          method: "GET",
          url: "https://backend-production-e5ac.up.railway.app/api/v1/users/dateasc",
          // Important: include credentials
        });
        console.log(res);
        members = res.data.data.data;

        setM(members);
        setsorteditems(members);
      }
      if (sortbydate === "desending_d") {
        const res = await axios({
          method: "GET",
          url: "https://backend-production-e5ac.up.railway.app/api/v1/users/datedesc",
          // Important: include credentials
        });
        members = res.data.data.data;

        setM(members);
        setsorteditems(members);
      }
    }
    if (status === "active") {
      if (sortbydate === "default" || sortbydate === "assending_d") {
        const res = await axios({
          method: "GET",
          url: "https://backend-production-e5ac.up.railway.app/api/v1/users/active",
          // Important: include credentials
        });
        members = res.data.data.data;

        setM(members);
        setsorteditems(members);
      }

      if (sortbydate === "desending_d") {
        const res = await axios({
          method: "GET",
          url: "https://backend-production-e5ac.up.railway.app/api/v1/users/activedesc",
          // Important: include credentials
        });
        members = res.data.data.data;

        setM(members);
        setsorteditems(members);
      }
    }
    if (status === "do_not_contact") {
      if (sortbydate === "default" || sortbydate === "assending_d") {
        const res = await axios({
          method: "GET",
          url: "https://backend-production-e5ac.up.railway.app/api/v1/users/notactive",
          // Important: include credentials
        });
        members = res.data.data.data;

        setM(members);
        setsorteditems(members);
      }

      if (sortbydate === "desending_d") {
        const res = await axios({
          method: "GET",
          url: "https://backend-production-e5ac.up.railway.app/api/v1/users/notactivedesc",
          // Important: include credentials
        });
        members = res.data.data.data;

        setM(members);
        setsorteditems(members);
      }
    }
    if (status === "less_active") {
      if (sortbydate === "default" || sortbydate === "assending_d") {
        const res = await axios({
          method: "GET",
          url: "https://backend-production-e5ac.up.railway.app/api/v1/users/lactive",
          // Important: include credentials
        });
        members = res.data.data.data;

        setM(members);
        setsorteditems(members);
      }

      if (sortbydate === "desending_d") {
        const res = await axios({
          method: "GET",
          url: "https://backend-production-e5ac.up.railway.app/api/v1/users/lactivedesc",
          // Important: include credentials
        });
        members = res.data.data.data;

        setM(members);
        setsorteditems(members);
      }
    }
  };

  useEffect(() => {
    handledate();
  }, [sortbydate, status]);

  useEffect(() => {
    handleSortByName();
  }, [sortbyname]);

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <ChildNavbar
        sortbyname={sortbyname}
        setsortbyName={setsortbyName}
        sortbydate={sortbydate}
        setsortbyDate={setsortbyDate}
        status={status}
        setStatus={setStatus}
        fetchM={fetchMembers}
        check="Member"
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
              status={member.status}
              email={member.email}
              id={member._id}
              check="Member"
              fetchMembers={fetchMembers}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Members;
