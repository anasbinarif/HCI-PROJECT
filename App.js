import "./App.css";
import MainPage from "./MainPage";
import StudentLogin from "./StudentLogin";
import StudentConsole from "./StudentConsole";
import { Router, Routes, Route } from "react-router-dom";
import SchedulePage from "./SchedulePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/studentLogin" element={<StudentLogin />}></Route>
        <Route path="/studentConsole" element={<StudentConsole />}></Route>
        <Route path="/schedulePage" element={<SchedulePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
