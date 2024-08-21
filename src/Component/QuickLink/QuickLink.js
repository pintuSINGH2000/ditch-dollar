import React from 'react';
import styles from './quickLink.module.css';
import { RiArrowLeftDownLine } from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";
import { RiSettings4Line } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
import { RiLineChartLine } from "react-icons/ri";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { RiHistoryLine } from "react-icons/ri";
import { RiUser2Line } from "react-icons/ri";
import { RiTokenSwapLine } from "react-icons/ri";
import { RiBarChartGroupedLine } from "react-icons/ri";

const QuickLink = () => {
  return (
    <div className={styles.container}>
         <div className={styles.title}>Quick Link</div>
         <div className={styles.links}>
            <div className={styles.link}><RiArrowLeftDownLine className={styles.linkIcon}/> Deposit</div>
            <div className={styles.link}><RiArrowRightUpLine className={styles.linkIcon}/> Withdraw</div>
            <div className={styles.link}> <RiSettings4Line className={styles.linkIcon}/>Settings</div>
            <div className={styles.link}><RiUserFollowLine className={styles.linkIcon}/>Verification</div>
            <div className={styles.link}> <RiStarSLine className={styles.linkIcon}/>Bonuses</div>
            <div className={styles.link}><RiLineChartLine className={styles.linkIcon}/>MT5</div>
            <div className={styles.link}> <RiArrowLeftRightLine className={styles.linkIcon}/>Transfer</div>
            <div className={styles.link}> <RiHistoryLine className={styles.linkIcon}/>History</div>
            <div className={styles.link}> <RiUser2Line className={styles.linkIcon}/>Partner</div>
            <div className={styles.link}><RiTokenSwapLine className={styles.linkIcon}/>Exchange</div>
            <div className={styles.link}> <RiBarChartGroupedLine className={styles.linkIcon}/>Analytics</div>
         </div>
    </div>
  )
}

export default QuickLink