import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PathConstants } from "../../lib/path-constants";
import { logout } from "../../store/actions/user";
import "./manager-sidebar.css";

export function ManagerSidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("USER");
    dispatch(logout());
    navigate(PathConstants.ManagerLogin);
  };

  function toggleNav() {
    if (parseInt(document.getElementById("mySidepanel").style.width) === 0) {
      document.getElementById("mySidepanel").style.width = "250px";
      document.getElementById("manager-content-container").style.marginLeft = "80px";
    } else {
      document.getElementById("mySidepanel").style.width = "0";
      document.getElementById("manager-content-container").style.marginLeft = "0";
    }
  }

  return (
    <>

      <div
        style={{
          backgroundColor: "#f1f1f1",
          height: "100%",
          minHeight: "100vh",
          margin: "0px",
        }}
        id="mySidepanel"
        class="sidepanel"
      >
        <button style={{ textAlign: "center", fontSize: "x-large" }} onClick={toggleNav}>&times;</button>
        <a className="sidebar-links" href={PathConstants.ManagerDataAnalytics}>Report</a>
        <a className="sidebar-links" href={PathConstants.ManagePatient}>
          Manage Patient
        </a>
        <a className="sidebar-links" href={PathConstants.ManageDoctor}>
          Manage Doctor
        </a>
        <a className="sidebar-links" href={PathConstants.ManageCounselor}>
          Manage Counselor
        </a>
        <button className="sidebar-links closebtn" onClick={onLogout}>
          Log Out
        </button>
      </div>
      <h2 style={{ textAlign: "center" }} onClick={toggleNav}> &#9776; Admin Menu</h2>

    </>
  );
}
