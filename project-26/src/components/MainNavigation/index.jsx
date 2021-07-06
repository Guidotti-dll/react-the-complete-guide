import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} exact to="/">
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/new-meetup">
              Add New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/favorites">
              My Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
