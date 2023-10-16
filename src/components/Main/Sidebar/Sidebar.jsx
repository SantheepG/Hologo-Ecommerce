import React from "react";
import "./Sidebar.css";
import {
  BiGridAlt,
  BiSolidUser,
  BiNotepad,
  BiLineChart,
  BiCheckSquare,
  BiCalendarCheck,
  BiErrorCircle,
  BiMessageSquareAdd,
  BiWrench,
  BiLogOut,
} from "react-icons/bi";

export const Sidebar = () => {
  return (
    <React.Fragment>
      <aside>
        <div class="toggle">
          <div class="logo">
            <h2>
              Hologo <span class="danger">World</span>
            </h2>
          </div>
          <div class="close" id="close-btn">
            <span class="material-icons-sharp">close</span>
          </div>
        </div>

        <div class="sidebar">
          <a href="#">
            <span class="material-icons-sharp">
              <BiGridAlt />
            </span>
            <h3>Dashboard</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">
              <BiSolidUser />
            </span>
            <h3>Users</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">
              <BiNotepad />
            </span>
            <h3>History</h3>
          </a>
          <a href="#" class="active">
            <span class="material-icons-sharp">
              <BiLineChart />
            </span>
            <h3>Analytics</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">
              <BiCheckSquare />
            </span>
            <h3>Tickets</h3>
            <span class="message-count">27</span>
          </a>
          <a href="#">
            <span class="material-icons-sharp">
              <BiCalendarCheck />
            </span>
            <h3>Sale List</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">
              <BiErrorCircle />
            </span>
            <h3>Reports</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">
              <BiWrench />
            </span>
            <h3>Settings</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">
              <BiMessageSquareAdd />
            </span>
            <h3>New item</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">
              <BiLogOut />
            </span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
    </React.Fragment>
  );
};
