import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { favoritesContext } from "../../store/favoritesContext";
import styles from "./styles.module.css";

const MainNavigation = () => {
  const { totalFavorites } = useContext(favoritesContext);
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
              My Favorites{" "}
              <span className={styles.badge}>{totalFavorites}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
