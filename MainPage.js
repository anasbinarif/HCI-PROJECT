import React from "react";
import "./MainPage.scss";
import { useState } from "react";
import StudentLogin from "./StudentLogin";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const history = useNavigate();
  const abc = path => {
    history(path);
  };
  return (
    <div>
      <div>
        <div className="mainPageHeader">
          <p>GIKI sports Complex Console</p>
        </div>
        <div className="mainPageButtons">
          <button onClick={() => abc('/studentLogin')}>
            <p> Student Login</p>
          </button>
          <button>
            <p>Sports Management Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
