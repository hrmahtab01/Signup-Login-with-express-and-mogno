import React from "react";
import { redirect, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
    // redirect("/login")
  }

  return (
    <div className="text-4xl font-sans text-red-600 font-bold">
      this is home page
    </div>
  );
};

export default Home;
