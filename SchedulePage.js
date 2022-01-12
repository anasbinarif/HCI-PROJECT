import React from "react";
import "./SchedulePage.scss";
import { BsArrowBarLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const SchedulePage = () => {
  const history = useNavigate();
  const helo = (path) => {
    history(path);
  };
  return (
    <div>
      <div className="schedulePageHeader">
        <button onClick={() => helo("/studentConsole")}>
          <BsArrowBarLeft color="white" size={30} />
          <p className="backbutton"> back</p>
        </button>
        <p>Schedule Timings</p>
      </div>
      <div className="schedulePageTable">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Batch</th>
              <th>Timimgs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td>First Year</td>
              <td>8:00am to 11:00pm</td>
            </tr>
            <tr>
              <td>Second Year</td>
              <td>8:00am to 11:00pm</td>
            </tr>
            <tr>
              <td>Third Year</td>
              <td>8:00am to 11:00pm</td>
            </tr>
            <tr>
              <td>Fourth Year</td>
              <td>8:00am to 11:00pm</td>
            </tr>
            <tr>
              <td>Faculty</td>
              <td>8:00am to 11:00pm</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SchedulePage;
