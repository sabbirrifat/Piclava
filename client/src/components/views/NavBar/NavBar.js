import React from "react";
import axios from "axios";
import { USER_SERVER } from "../../Config";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Navbar.css";

function DashboardNav(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
      {user.userData && !user.userData.isAuth ? (
        <a className="navbar-brand" href="/">
          PICLAVA
        </a>
      ) : (
        <a className="navbar-brand" href="/dashboard">
          PICLAVA
        </a>
      )}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {user.userData && !user.userData.isAuth ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Sign up
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/history">
                  My Purchases
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product/upload">
                  Upload
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user/cart">
                  <i class="fas fa-shopping-cart"></i>
                  <span class="badge badge-light">
                    {user.userData && user.userData.cart.length}
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onClick={logoutHandler}
                  style={{ cursor: "pointer" }}
                >
                  Log Out
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(DashboardNav);
