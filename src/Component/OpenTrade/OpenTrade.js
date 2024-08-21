import React from "react";
import styles from "./openTrade.module.css";
import { TRADES } from "../../Utility/Trades";

const OpenTrade = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Open Trades</div>
      {TRADES.map((trade, index) => (
        <div key={trade.id} className={styles.tradeDetails}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.name}>{trade.companyName}</div>
              <div className={styles.type} style={{background:trade.type===1?"rgba(235, 255, 238, 1)":"rgba(254, 233, 231, 1)"}}>{trade.type===1?"Long":"Short"}</div>
            </div>
              <div className={styles.gain}>{trade.gain}</div>
          </div>
          <div className={styles.money} style={{color:trade.profit>=0?"rgba(20, 174, 92, 1)":"rgba(236, 34, 31, 1)"}}>
            {trade.profit>=0?"+":"-"}{trade.balance.toFixed(2)}{" "}
            <span className={styles.currency}>{trade.currencyType}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpenTrade;
