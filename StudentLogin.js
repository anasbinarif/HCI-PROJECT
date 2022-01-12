import React from "react";
import "./StudentLogin.scss";
import { BsArrowBarLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {

    const history = useNavigate();
    const helo = path => {
        history(path);
    }
  return (
    <div>
      <div className="studentLoginHeader">
        <button onClick={() => helo('/')}>
          <BsArrowBarLeft color="white" size={30} />
          <p className="backbutton"> back</p>
        </button>
        <p>Student Console</p>
      </div>
      <div className="studentConsoleButtons">
        <input type="text" placeholder="Enter ID:" />
        <input type="password" placeholder="Enter Password:" />
        <button onClick={() => helo('/studentConsole')}>
          <p> Login</p>
        </button>
      </div>
    </div>
  );
};

export default StudentLogin;
