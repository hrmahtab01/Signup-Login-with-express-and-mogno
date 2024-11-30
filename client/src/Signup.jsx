import React, { useState } from "react";
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

const Signup = () => {
  const [name, setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const navigate = useNavigate()
 

  const HandleSubmit = async () => {
    if (name && email && password) {
      const userdata = await axios
        .post("http://localhost:5000/singup", { name, email, password })
        .then((res) => {
          console.log(res);
          navigate("/login")
        }).catch((errr )=>{
          console.log(errr);
          
        })
    }
  };
  return (
    <div className="w-full h-screen bg-teal-500/40 blur-0 flex justify-center items-center ">
      <div className="w-[700px] py-5 bg-black rounded-md mx-auto ">
        <div>
          <h1 className="text-white text-3xl font-bold font-sans text-center mt-2">
            {" "}
          Signup
          </h1>
          <div className="mt-4 flex justify-center flex-col gap-4">
            <div className="px-2 flex flex-col gap-2">
              <label className="text-white font-semibold font-sans text-2xl">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="w-[400px] h-[47px] border rounded-md border-teal-500 placeholder:text-lg placeholder:text-teal-500 placeholder:font-semibold placeholder:font-sans placeholder:px-2"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="px-2 flex flex-col gap-2">
              <label className="text-white font-semibold font-sans text-2xl">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => Setemail(e.target.value)}
                className="w-[400px] h-[47px] border rounded-md border-teal-500 placeholder:text-lg placeholder:text-teal-500 placeholder:font-semibold placeholder:font-sans placeholder:px-2"
                type="email"
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
            onClick={HandleSubmit}
            className="py-3 px-16 bg-red-500 text-lg text-white font-semibold font-sans flex justify-center items-center mx-auto rounded-md mt-5"
          >
            Signup
          </button>
          <p className="text-lg font-sans font-semibold text-teal-500  text-center mt-5">Already have an accout <Link to="/login"><span className="font-bold text-red-500"> Login</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
