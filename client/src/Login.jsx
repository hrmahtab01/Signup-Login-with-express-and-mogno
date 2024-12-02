import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const navigate = useNavigate();

  const HandleLOgin = async () => {
    try {
      await axios
        .post("http://Localhost:5000/login", { email, password })
        .then((result) => {
          console.log(result.data);

          if (result.data === "Login successfully") {
            navigate("/");
            localStorage.setItem("user", JSON.stringify(result.data));
          } else {
            console.log("something went wrong");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen bg-red-500 blur-0 flex justify-center items-center ">
      <div className="w-[700px] py-5 bg-black rounded-md mx-auto ">
        <div>
          <h1 className="text-white text-3xl font-bold font-sans text-center mt-2">
            {" "}
            Login
          </h1>
          <div className="mt-4 flex justify-center flex-col gap-4">
            <div className="px-2 flex flex-col gap-2">
              <label className="text-white font-semibold font-sans text-2xl">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => Setemail(e.target.value)}
                className="w-[400px] h-[47px] border rounded-md border-teal-500 placeholder:text-lg placeholder:text-teal-500 placeholder:font-semibold placeholder:font-sans placeholder:px-2"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="px-2 flex flex-col gap-2">
              <label className="text-white font-semibold font-sans text-2xl">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => Setpassword(e.target.value)}
                className="w-[400px] h-[47px] border rounded-md border-teal-500 placeholder:text-lg placeholder:text-teal-500 placeholder:font-semibold placeholder:font-sans placeholder:px-2"
                type="password"
                placeholder="Enter your passeword"
              />
            </div>
          </div>
          <button
            onClick={HandleLOgin}
            className="py-3 px-16 bg-teal-500 text-lg text-white font-semibold font-sans flex justify-center items-center mx-auto rounded-md mt-5"
          >
            Login
          </button>
          <p className="text-lg font-sans font-semibold text-teal-500  text-center mt-5">create new account <Link to="/signup"><span className="font-bold text-red-500"> Signup</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
