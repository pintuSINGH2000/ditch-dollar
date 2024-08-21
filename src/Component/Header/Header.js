import React from "react";
import styles from "./header.module.css";
import { RiNotification3Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({setShowNavbar}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftHeader}>
        <div className={styles.title}>Dashboard</div>
          <GiHamburgerMenu className={styles.menu} onClick={()=>setShowNavbar(true)}/>
      </div>
      <div className={styles.rightHeader}>
        <div className={styles.search}>
          <RiSearch2Line className={styles.icon} />
          <input className={styles.input} type="text" placeholder="Search..." />
        </div>
        <RiNotification3Line
          className={styles.icon}
          style={{ padding: "8px" }}
        />
      </div>
    </div>
  );
};

export default Header;
