import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login({ setuser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [cookie, setCookie] = useState("");
  useEffect(() => {
    const cookieValue = Cookies.get("jwt");

    if (cookieValue) {
      navigate("/");
    }
    setCookie(cookieValue);
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const res = await axios({
      method: "POST",
      url: "https://backend-production-e5ac.up.railway.app/api/v1/users/login",
      data: {
        email,
        password,
      },
      // Important: include credentials
    });
    console.log(res);

    if (res.data.status == "success") {
      setuser(res.data.data.user.role);
      Cookies.set("jwt", res.data.token, { expires: 100 });
      Cookies.set("userRole", res.data.data.user.role, { expires: 100 });
      navigate("/");
    } else if (res.data.message === "Invalid email or password") {
      alert(res.data.message);
    }
  };
  return (
    <body className="flex items-center justify-center h-screen">
      <div
        className=" rounded-lg p-8 w-96 shadow-2xl formbox"
        style={{ width: "40rem", height: "38rem", overflowY: "hidden" }}
      >
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-200 rounded-full mb-2 ">
            <i className="fas fa-user text-blue-600 text-3xl"></i>
          </div>
          <h2
            className="text-2xl text-blue-600 font-semibold"
            style={{ color: "white" }}
          >
            CUSTOMER LOGIN
          </h2>
        </div>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center border-b-2 border-blue-200 pb-2">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "5rem", width: "5rem" }}
            >
              <i
                className="fas fa-envelope text-gray-100"
                style={{ fontSize: "2.3rem" }}
              ></i>
            </div>
            <input
              type="email"
              placeholder="Email ID"
              className="pl-2 w-full focus:outline-none formbox"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              style={{ color: "white", fontSize: "16px" }}
            />
          </div>
          <div className="flex items-center border-b-2 border-blue-200 pb-2">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "5rem", width: "5rem" }}
            >
              <i
                className="fas fa-lock text-gray-100"
                style={{ fontSize: "2.3rem" }}
              ></i>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="pl-2 w-full focus:outline-none formbox"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              style={{ color: "white", fontSize: "16px" }}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="form-checkbox  text-blue-600"
                style={{ width: "18px", height: "18px" }}
              />
              <span
                className="ml-2 text-white"
                style={{ fontSize: "16px", overflow: "hidden" }}
              >
                Remember me
              </span>
            </label>
          </div>
          <button
            className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none"
            style={{ height: "35px", overflow: "hidden" }}
          >
            LOGIN
          </button>
        </form>
      </div>
    </body>
  );
}

export default Login;
