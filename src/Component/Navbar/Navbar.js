import React from "react";
import styles from "./navbar.module.css";
import { RiDashboardLine } from "react-icons/ri";
import { RiCopilotLine } from "react-icons/ri";
import { RiBox3Line } from "react-icons/ri";
import { RiPieChartLine } from "react-icons/ri";
import { RiSwapBoxLine } from "react-icons/ri";
import { RiWalletLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiHistoryLine } from "react-icons/ri";
import { RiNotification4Line } from "react-icons/ri";
import { RiSettings4Line } from "react-icons/ri";
import { RiHeadphoneLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({showNavbar,setShowNavbar}) => {
  return (
    <div className={`${styles.container} ${showNavbar?styles.containerShow:styles.containerHide} `} >
      <div className={styles.logo}>
        <svg
          width="121"
          height="58"
          viewBox="0 0 121 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.6338 53.4482V34.0299C23.6338 31.6646 22.7894 30.4819 21.1007 30.4819H20.9517V29.986H31.6426C35.4918 29.986 38.447 31.1813 40.5082 33.5721C42.5694 35.9628 43.6 39.409 43.6 43.9107C43.6 46.3015 43.2771 48.4506 42.6315 50.3581C41.9858 52.2402 40.9304 53.906 39.4652 55.3557C38 56.78 35.5291 57.4921 32.0524 57.4921H20.9517V56.9962C22.7397 56.9962 23.6338 55.8135 23.6338 53.4482ZM30.2271 56.1569L31.2328 56.195C33.145 56.195 34.5233 55.1777 35.3676 53.143C36.212 51.0829 36.6342 47.7766 36.6342 43.224C36.6342 38.8749 36.2492 35.8229 35.4794 34.068C34.7344 32.2877 33.4306 31.3975 31.5681 31.3975H30.2271V56.1569Z"
            fill="#BEFB7A"
          />
          <path
            d="M55.1284 37.8067C57.9346 37.8067 60.1448 38.7096 61.759 40.5154C63.3732 42.3211 64.1803 44.7755 64.1803 47.8783C64.1803 50.9812 63.3732 53.4355 61.759 55.2413C60.1448 57.0471 57.9346 57.95 55.1284 57.95C52.2725 57.95 50.0375 57.0598 48.4233 55.2794C46.8091 53.4991 46.0021 51.0321 46.0021 47.8783C46.0021 44.75 46.8091 42.2957 48.4233 40.5154C50.0624 38.7096 52.2974 37.8067 55.1284 37.8067ZM51.4034 40.5917C51.3537 40.7697 51.3289 40.9605 51.3289 41.1639C51.3289 41.3674 51.3289 41.5327 51.3289 41.6599C51.3289 42.8298 51.5151 44.3177 51.8876 46.1234C52.2601 47.9038 52.8437 50.1928 53.6384 52.9904C54.4331 55.7627 55.5009 57.1488 56.8419 57.1488C58.2326 57.1488 58.928 56.0424 58.928 53.8297C58.928 52.8378 58.7044 51.3118 58.2574 49.2517C57.8353 47.1662 57.2393 44.8645 56.4694 42.3466C55.7244 39.8287 54.7062 38.5697 53.4149 38.5697C52.2974 38.5697 51.6269 39.2437 51.4034 40.5917Z"
            fill="#BEFB7A"
          />
          <path
            d="M65.6985 30.749C66.5429 30.749 67.2134 30.7235 67.71 30.6727C68.2315 30.5964 69.051 30.4565 70.1686 30.253C71.1122 30.1513 71.8697 30.0368 72.4408 29.9097C73.012 29.757 73.5087 29.6426 73.9308 29.5663V54.2112C73.9308 54.8471 73.9681 55.2922 74.0426 55.5465C74.1171 55.8008 74.3158 56.106 74.6386 56.4621C74.9863 56.8182 75.4085 56.9962 75.9051 56.9962V57.4921H65.6985V56.9962C67.0395 56.8436 67.71 55.9153 67.71 54.2112V34.5258C67.71 33.6356 67.6604 33.0252 67.561 32.6946C67.412 31.7281 66.7912 31.2449 65.6985 31.2449V30.749Z"
            fill="#BEFB7A"
          />
          <path
            d="M76.5753 30.749C77.4197 30.749 78.0902 30.7235 78.5869 30.6727C79.1084 30.5964 79.9279 30.4565 81.0454 30.253C81.9891 30.1513 82.7465 30.0368 83.3177 29.9097C83.8888 29.757 84.3855 29.6426 84.8077 29.5663V54.2112C84.8077 54.8471 84.8449 55.2922 84.9194 55.5465C84.9939 55.8008 85.1926 56.106 85.5154 56.4621C85.8631 56.8182 86.2853 56.9962 86.782 56.9962V57.4921H76.5753V56.9962C77.9164 56.8436 78.5869 55.9153 78.5869 54.2112V34.5258C78.5869 33.6356 78.5372 33.0252 78.4379 32.6946C78.2889 31.7281 77.668 31.2449 76.5753 31.2449V30.749Z"
            fill="#BEFB7A"
          />
          <path
            d="M89.799 43.4148C91.0158 39.7015 93.7351 37.8449 97.9568 37.8449C100.117 37.8449 101.595 38.2136 102.39 38.9512C103.184 39.6888 103.681 40.3755 103.88 41.0113C104.078 41.6472 104.178 42.5373 104.178 43.6818V54.0205C104.178 54.9615 104.476 55.432 105.072 55.432C105.767 55.432 106.115 54.8089 106.115 53.5627H106.599C106.599 56.4621 105.183 57.9118 102.352 57.9118C99.9435 57.9118 98.528 56.9199 98.1058 54.9361C97.6091 55.9789 96.9635 56.7291 96.1688 57.1869C95.3989 57.6447 94.3683 57.8736 93.077 57.8736C91.5373 57.8736 90.4198 57.543 89.7244 56.8817C89.0539 56.2205 88.6194 55.5465 88.4207 54.8598C88.222 54.1731 88.1227 53.2829 88.1227 52.1893C88.1227 49.9512 88.7311 48.4251 89.948 47.6113C90.5688 47.1535 91.6366 46.7338 93.1515 46.3523C94.6912 45.9454 95.6224 45.6911 95.9453 45.5893C96.2929 45.4876 96.6654 45.3477 97.0628 45.1697C97.485 44.9916 97.7581 44.8263 97.8823 44.6737C98.0065 44.4957 98.0685 44.2032 98.0685 43.7963C98.0685 41.9651 96.9138 41.0495 94.6043 41.0495C92.4934 41.0495 91.0158 41.8379 90.1715 43.4148H89.799ZM98.0685 45.246L97.398 45.6656L96.057 46.3142L95.163 46.8483C94.865 47.1281 94.6539 47.446 94.5298 47.802C94.4304 48.1581 94.3808 48.7049 94.3808 49.4425L94.269 51.2355L94.3808 53.0667C94.3808 53.7534 94.4056 54.224 94.4553 54.4783C94.5049 54.7072 94.6663 54.9488 94.9395 55.2031C95.2127 55.432 95.6473 55.5465 96.2433 55.5465C96.7399 55.5465 97.1497 55.432 97.4725 55.2031C97.7954 54.9742 97.9816 54.6563 98.0313 54.2494L98.0685 53.143V45.246Z"
            fill="#BEFB7A"
          />
          <path
            d="M108.926 54.2112V43.7581C108.926 42.1558 108.789 41.0622 108.516 40.4772C108.243 39.8668 107.721 39.5616 106.951 39.5616V39.0657L111.347 38.6079L115.072 37.883V42.3084C115.494 39.3582 116.984 37.883 119.542 37.883C119.691 37.883 119.828 37.883 119.952 37.883C120.076 37.883 120.299 37.9339 120.622 38.0356C120.448 38.3662 120.262 38.7732 120.063 39.2564C119.865 39.7142 119.716 40.1212 119.616 40.4772C119.517 40.8333 119.43 41.2148 119.356 41.6217C119.306 42.0032 119.281 42.4737 119.281 43.0333H118.871C118.549 42.1431 117.94 41.698 117.046 41.698C116.401 41.698 115.929 41.9524 115.631 42.461C115.333 42.9697 115.171 43.4275 115.146 43.8344C115.122 44.2414 115.109 44.7373 115.109 45.3223V54.2112C115.109 55.9407 115.792 56.869 117.158 56.9962V57.4921H106.914V56.9962C108.255 56.9962 108.926 56.0679 108.926 54.2112Z"
            fill="#BEFB7A"
          />
          <path
            d="M3.14602 23.8819V4.46356C3.14602 2.09826 2.30168 0.915603 0.612991 0.915603H0.463989V0.419652H11.1549C15.0041 0.419652 17.9593 1.61502 20.0205 4.00576C22.0817 6.39649 23.1123 9.84272 23.1123 14.3444C23.1123 16.7352 22.7894 18.8843 22.1437 20.7918C21.4981 22.6739 20.4426 24.3397 18.9775 25.7894C17.5123 27.2137 15.0413 27.9258 11.5646 27.9258H0.463989V27.4299C2.25201 27.4299 3.14602 26.2472 3.14602 23.8819ZM9.73935 26.5906L10.7451 26.6287C12.6573 26.6287 14.0356 25.6114 14.8799 23.5767C15.7242 21.5166 16.1464 18.2103 16.1464 13.6577C16.1464 9.30862 15.7615 6.25661 14.9917 4.50171C14.2466 2.72137 12.9429 1.8312 11.0804 1.8312H9.73935V26.5906Z"
            fill="#BEFB7A"
          />
          <path
            d="M24.6576 27.4299C25.1791 27.4299 25.6261 27.2264 25.9986 26.8195C26.2717 26.5906 26.458 26.3235 26.5573 26.0183C26.6567 25.6877 26.7063 25.2299 26.7063 24.6449V14.1918C26.7063 12.615 26.5573 11.5213 26.2593 10.9109C25.9862 10.3005 25.4771 9.99532 24.7321 9.99532V9.49937L29.1276 9.04157L32.8527 8.31672V24.6449C32.8527 25.2299 32.9023 25.675 33.0017 25.9802C33.101 26.26 33.3121 26.5779 33.6349 26.9339C33.9577 27.2646 34.3675 27.4299 34.8642 27.4299V27.9258H24.6576V27.4299ZM29.7236 0.114451C30.6673 0.114451 31.4744 0.445085 32.1449 1.10635C32.8154 1.76762 33.1507 2.58149 33.1507 3.54796C33.1507 4.53986 32.8278 5.36644 32.1821 6.02771C31.5365 6.68898 30.7294 7.01961 29.7609 7.01961C28.8172 7.01961 28.0101 6.68898 27.3396 6.02771C26.6691 5.36644 26.3338 4.53986 26.3338 3.54796C26.3338 2.58149 26.6567 1.76762 27.3023 1.10635C27.948 0.445085 28.7551 0.114451 29.7236 0.114451Z"
            fill="#BEFB7A"
          />
          <path
            d="M43.4687 3.54796V8.66007H48.423L47.1938 10.6057H43.4687V24.3016C43.4687 24.8866 43.6426 25.3571 43.9902 25.7131C44.3627 26.0438 44.8594 26.2091 45.4803 26.2091C46.6971 26.2091 47.4545 25.5987 47.7525 24.3779H48.1995C48.125 24.9374 47.9636 25.497 47.7153 26.0565C47.4669 26.616 46.8585 27.1374 45.89 27.6206C44.9215 28.1039 43.7295 28.3455 42.314 28.3455C40.4018 28.3455 39.1228 27.9894 38.4772 27.2773C37.8563 26.5652 37.4962 25.9675 37.3969 25.4842C37.3224 25.001 37.2852 24.0727 37.2852 22.6993V10.5676H34.9011L43.4687 3.54796Z"
            fill="#BEFB7A"
          />
          <path
            d="M61.7331 14.8022C61.3109 14.9548 60.8763 15.1329 60.4293 15.3363C60.0071 15.5144 59.6595 15.667 59.3863 15.7941C59.5105 14.9548 59.5726 14.1918 59.5726 13.5051C59.5726 12.0554 59.3739 10.9109 58.9766 10.0716C58.604 9.20688 58.095 8.77452 57.4493 8.77452C56.6049 8.77452 55.9468 9.4485 55.475 10.7965C55.0032 12.1444 54.7673 13.9884 54.7673 16.3282C54.7673 21.6947 56.2324 24.3779 59.1628 24.3779C60.2803 24.3779 61.2116 24.0345 61.9566 23.3478C62.7264 22.6357 63.2107 21.6692 63.4094 20.4484L63.9309 20.4866C63.7074 22.8773 62.9127 24.7848 61.5468 26.2091C60.181 27.6334 58.4675 28.3455 56.4063 28.3455C53.9477 28.3455 51.9859 27.4935 50.5207 25.7894C49.0555 24.0854 48.3229 21.7837 48.3229 18.8843C48.3229 15.8068 49.1176 13.2635 50.707 11.2543C52.2963 9.24503 54.3078 8.24041 56.7415 8.24041C57.71 8.24041 58.691 8.41845 59.6843 8.77452C60.7025 9.13058 61.6089 9.70283 62.4036 10.4913C63.1983 11.2543 63.6825 12.4751 63.8564 14.1537L61.7331 14.8022Z"
            fill="#BEFB7A"
          />
          <path
            d="M65.182 1.18265C66.0263 1.18265 66.6968 1.15722 67.1935 1.10635C67.715 1.03005 68.4227 0.915603 69.3167 0.763003C70.2356 0.610402 70.8937 0.495951 71.291 0.419652C71.7132 0.343351 72.421 0.203467 73.4143 0V11.0254C75.1775 9.2196 77.1642 8.31672 79.3744 8.31672C81.063 8.31672 82.2178 8.66007 82.8387 9.34677C83.4843 10.008 83.8692 10.6057 83.9934 11.1398C84.1176 11.6739 84.1797 12.5387 84.1797 13.734V24.6449C84.1797 25.2808 84.2169 25.7259 84.2914 25.9802C84.3659 26.2345 84.577 26.5397 84.9247 26.8958C85.2723 27.2519 85.6945 27.4299 86.1912 27.4299V27.9258H76.6178V27.4299C77.5863 27.1247 78.0706 26.1964 78.0706 24.6449V13.1618L78.0333 12.1317C77.9837 11.6994 77.7478 11.3179 77.3256 10.9872C76.9034 10.6566 76.4192 10.4913 75.8728 10.4913C75.0285 10.4913 74.4325 10.7456 74.0848 11.2543C73.7371 11.7375 73.5385 12.0809 73.4888 12.2843C73.4391 12.4878 73.4143 12.9074 73.4143 13.5433V24.6449C73.4143 26.2727 73.8986 27.201 74.8671 27.4299V27.9258H65.2564V27.4299C65.778 27.4299 66.2001 27.2264 66.523 26.8195C66.821 26.5397 67.0196 26.26 67.119 25.9802C67.2183 25.675 67.268 25.2299 67.268 24.6449L67.2307 6.14216V5.68436C67.2307 5.17569 67.2183 4.70518 67.1935 4.27281C67.1935 3.81501 67.119 3.26819 66.97 2.63235C66.8458 1.99652 66.2498 1.6786 65.182 1.6786V1.18265Z"
            fill="#BEFB7A"
          />
        </svg>
        <span style={{ margin: "10px 0px 0px 2px" }}>®</span>
        <GiHamburgerMenu className={styles.menu} onClick={()=>setShowNavbar(false)}/>
      </div>
      <div className={styles.nav}>
        <div className={styles.topNav}>
          <NavLink className={styles.navlist} activeclassname="active" to="/">
            {" "}
            <RiDashboardLine className={styles.navIcon} />
            Dashboard
          </NavLink>
          <NavLink className={styles.navlist} activeclassname="active" to="/crm">
            {" "}
            <RiCopilotLine className={styles.navIcon} />
            CRM
          </NavLink>
          <NavLink className={styles.navlist} activeclassname="active" to="/mam">
            {" "}
            <RiBox3Line className={styles.navIcon} />
            MAM
          </NavLink>
          <NavLink className={styles.navlist} activeclassname="active" to="/pamm">
            {" "}
            <RiPieChartLine className={styles.navIcon} />
            PAMM
          </NavLink>
          <NavLink className={styles.navlist} activeclassname="active" to="/trade">
            {" "}
            <RiSwapBoxLine className={styles.navIcon} />
            Trade
          </NavLink>
          <NavLink className={styles.navlist} activeclassname="active" to="/wallet">
            {" "}
            <RiWalletLine className={styles.navIcon} /> Wallet
          </NavLink>
          <NavLink className={styles.navlist} activeclassname="active" to="/accounts">
            {" "}
            <RiMoneyDollarCircleLine className={styles.navIcon} /> Accounts
          </NavLink>
          <NavLink className={styles.navlist} activeclassname="active" to="/history" >
            {" "}
            <RiHistoryLine className={styles.navIcon} /> History
          </NavLink>
        </div>
        <div className={styles.bottomNav}>
          <NavLink className={styles.navlist} activeclassname="active" to="/notification">
            {" "}
            <RiNotification4Line />
            Notifications
          </NavLink>
          <NavLink className={styles.navlist} activeclassname="active" to="/settings">
            {" "}
            <RiSettings4Line />
            Settings
          </NavLink>
          <NavLink className={styles.navlist} activeclassname="active" to="/help">
            {" "}
            <RiHeadphoneLine />
            Help & Support
          </NavLink>
          <div className={styles.navlist} activeclassname="active">
            {" "}
            <RiLogoutBoxLine />
            Log Out
          </div>
          <hr />
          <div className={styles.profile}>
            <div className={styles.profilePic}>
              <RiUser3Line className={styles.navIcon} />
            </div>
            <div>
              <div className={styles.name}>Shyam Shakur</div>
              <div className={styles.email}>shyam01.shankur@mail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;