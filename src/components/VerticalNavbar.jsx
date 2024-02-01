import React, { useEffect, useState } from "react";
// import home from "../assets/House.svg";
// import favorite from "../assets/Favorite.svg";
// import setting from "../assets/Setting.svg";
// import user from "../assets/users.svg";
// import briefcase from "../assets/briefcase-01.svg";
// import bolt from "../assets/Bolt.svg";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

const VerticalNavbar = () => {
  const [activeSection, setActiveSection] = useState("Projects");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === "/") {
      setActiveSection("Projects");
    } else if (currentPath.includes("/projects")) {
      setActiveSection("Projects");
    } else if (currentPath.includes("/task")) {
      setActiveSection("tasks");
    } else if (currentPath.includes("/people")) {
      setActiveSection("people");
    } else if (currentPath.includes("/hiring")) {
      setActiveSection("hiring");
    } else if (currentPath.includes("/settings")) {
      setActiveSection("settings");
    }
  }, [location]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <ul className="verticlanavabar bg-white flex flex-col gap-2 w-[20%] items-center pt-12 shadow-md">
      <li
        className={`hover:border-2 hover:text-white px-6 w-4/5 rounded-full text-lg gap-3 font-medium flex items-center justify-center py-1 hover:bg-[#0F1420] ${
          activeSection === "home" ? "bg-[#0F1420] text-white" : ""
        }`}
        onClick={() => handleSectionClick("home")}
      >
        <img
          src=""
          alt=""
          className={` ${activeSection === "home" && "invert"}`}
        />
        Home
      </li>
      <li
        className={`hover:border-2 hover:text-white px-6 w-4/5 rounded-full text-lg gap-3 font-medium flex items-center justify-center py-1 hover:bg-[#0F1420] ${
          activeSection === "Projects" ? "bg-[#0F1420] text-white" : ""
        }`}
        onClick={() => handleSectionClick("Projects")}
      >
        <Link to="/" className="flex gap-3">
          <img
            src=""
            alt=""
            className={` ${
              activeSection === "Projects" ? "invert-0" : "invert"
            }`}
          />
          Projects
        </Link>
      </li>
      <li
        className={`hover:border-2 mr-4 hover:text-white px-6 w-4/5 rounded-full text-lg gap-3 font-medium flex items-center justify-center py-1 hover:bg-[#0F1420] ${
          activeSection === "tasks" ? "bg-black text-white" : ""
        }`}
        onClick={() => handleSectionClick("tasks")}
      >
        <Link to="/task" className="flex gap-3">
          <img
            src=""
            alt=""
            className={` ${activeSection === "tasks" && "invert"}`}
          />
          Tasks
        </Link>
      </li>
      <li
        className={`hover:border-2 hover:text-white px-6 w-4/5 rounded-full text-lg gap-3 font-medium flex items-center justify-center py-1 hover:bg-[#0F1420] ${
          activeSection === "people" ? "bg-[#0F1420] text-white" : ""
        }`}
        onClick={() => handleSectionClick("people")}
      >
        <img
          src=""
          alt=""
          className={` ${activeSection === "people" && "invert"}`}
        />
        People
      </li>
      <li
        className={`hover:border-2 hover:text-white px-6 w-4/5 rounded-full text-lg gap-3 font-medium flex items-center justify-center py-1 hover:bg-[#0F1420] ${
          activeSection === "hiring" ? "bg-[#0F1420] text-white" : ""
        }`}
        onClick={() => handleSectionClick("hiring")}
      >
        <img
          src=""
          alt=""
          className={` ${activeSection === "hiring" && "invert"}`}
        />
        Hiring
      </li>
      <li
        className={`hover:border-2 hover:text-white px-6 w-4/5 rounded-full text-lg gap-3 font-medium flex items-center justify-center py-1 hover:bg-[#0F1420] ${
          activeSection === "settings" ? "bg-[#0F1420] text-white" : ""
        }`}
        onClick={() => handleSectionClick("settings")}
      >
        <img
          src=""
          alt=""
          className={` ${activeSection === "setting" && "invert"}`}
        />
        Settings
      </li>
    </ul>
  );
};

export default VerticalNavbar;
