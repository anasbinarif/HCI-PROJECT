import React from "react";
import "./StudentConsole.scss";
import sports from "./sports.png";
import map from "./map.png";
import document from "./document.png";
import schedule from "./schedule.png";
import { useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { Dropdown } from "react-bootstrap";

const StudentConsole = () => {
  const history = useNavigate();
  const helo = (path) => {
    history(path);
  };
  return (
    <div>
      <div className="studentConsoleHeader">
        <p>Student Console</p>
        <div>
          <Dropdown>
            <Dropdown.Toggle>
              <VscAccount color="white" size={30} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="http://localhost:3000">Logout</Dropdown.Item>
              <Dropdown.Item href="#/action-2">My Account</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="studentsTasks">
        <div>
          <img src={map} alt="" />
          <p>Map and Navigation</p>
        </div>
        <div>
          <img src={sports} alt="" />
          <p>Equipment</p>
        </div>
        <div onClick={() => helo("/schedulePage")} className="scheduleIcon">
          <img src={schedule} alt="" />
          <p>Schedules</p>
        </div>
        <div>
          <img src={document} alt="" />
          <p> Information</p>
        </div>
      </div>
    </div>
  );
};

export default StudentConsole;
