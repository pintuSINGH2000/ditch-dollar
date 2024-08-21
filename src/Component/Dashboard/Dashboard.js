import React from "react";
import styles from "./dashboard.module.css";
import Header from "../Header/Header";
import QuickLink from "../QuickLink/QuickLink";
import TradingAccounts from "../TradingAccounts/TradingAccounts";
import OpenTrade from "../OpenTrade/OpenTrade";
import ReportChart from "../ReportChart/ReportChart";

const Dashboard = ({setShowNavbar,showNavbar}) => {
  return (
    <div className={styles.container}>
      <Header showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>
      <div className={styles.main}>
        <div className={styles.left}>
          <QuickLink />
          <ReportChart />
        </div>
        <div className={styles.right}>
          <TradingAccounts />
          <OpenTrade />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
