import React from "react";
import styles from "./tradingAccounts.module.css";
import { ACCOUNTS } from "../../Utility/Accounts";
import { RiArrowRightUpLine } from "react-icons/ri";

const TradingAccounts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Trading Accounts</div>
      {ACCOUNTS.map((account, index) => (
        <div key={account.id} className={styles.accountDetails}>
          <div className={styles.name}>{account.name}</div>
          <div className={styles.tags}>
            <div className={styles.type}>{account.type}</div>
            <div>{account.number}</div>
          </div>
          <div className={styles.balance}>
            <div className={styles.money}>
              {account.balance.toFixed(2)}{" "}
              <span className={styles.currency}>{account.currencyType}</span>
            </div>
            <RiArrowRightUpLine className={styles.widthdrawIcon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TradingAccounts;
