import React from "react";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../../../redux/actions";

import HologoLogo from "../../../assets/imgs/Hologologo.png";
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
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleItemClick = (item) => {
    if (!state[item]) {
      dispatch(setClicked(item, true));
    }
  };
  return (
    <React.Fragment>
      <aside>
        <div class="toggle">
          <div class="logo">
            <img src={HologoLogo} alt="Hologo Logo" />
            <h2>
              <span class="title">Hologo</span>
            </h2>
          </div>
          <div class="close" id="close-btn">
            <span>close</span>
          </div>
        </div>

        <div class="sidebar">
          <a
            href="#"
            className={state.dashboardClicked ? "active" : ""}
            onClick={() => handleItemClick("dashboardClicked")}
          >
            <span>
              <BiGridAlt />
            </span>
            <h3>Dashboard</h3>
          </a>
          <a
            href="#"
            className={state.usersClicked ? "active" : ""}
            onClick={() => handleItemClick("usersClicked")}
          >
            <span>
              <BiSolidUser />
            </span>
            <h3>Users</h3>
          </a>
          <a
            href="#"
            className={state.historyClicked ? "active" : ""}
            onClick={() => handleItemClick("historyClicked")}
          >
            <span>
              <BiNotepad />
            </span>
            <h3>History</h3>
          </a>
          <a
            href="#"
            className={state.analyticsClicked ? "active" : ""}
            onClick={() => handleItemClick("analyticsClicked")}
          >
            <span>
              <BiLineChart />
            </span>
            <h3>Analytics</h3>
          </a>
          <a
            href="#"
            className={state.ticketsClicked ? "active" : ""}
            onClick={() => handleItemClick("ticketsClicked")}
          >
            <span>
              <BiCheckSquare />
            </span>
            <h3>Tickets</h3>
            <span class="message-count">27</span>
          </a>
          <a
            href="#"
            className={state.salesClicked ? "active" : ""}
            onClick={() => handleItemClick("salesClicked")}
          >
            <span>
              <BiCalendarCheck />
            </span>
            <h3>Sale List</h3>
          </a>
          <a
            href="#"
            className={state.reportsClicked ? "active" : ""}
            onClick={() => handleItemClick("reportsClicked")}
          >
            <span>
              <BiErrorCircle />
            </span>
            <h3>Reports</h3>
          </a>
          <a
            href="#"
            className={state.settingsClicked ? "active" : ""}
            onClick={() => handleItemClick("settingsClicked")}
          >
            <span>
              <BiWrench />
            </span>
            <h3>Settings</h3>
          </a>
          <a
            href="#"
            className={state.newItemClicked ? "active" : ""}
            onClick={() => handleItemClick("newItemClicked")}
          >
            <span>
              <BiMessageSquareAdd />
            </span>
            <h3>New item</h3>
          </a>
          <a href="#">
            <span>
              <BiLogOut />
            </span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
    </React.Fragment>
  );
};
