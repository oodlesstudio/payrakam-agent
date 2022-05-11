import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = (props) => {
  const path = useLocation().pathname;

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const activeBtnClass = (arr) => {
    if (arr === path) {
      return "accordion-button";
    } else {
      return "accordion-button collapsed";
    }
  };
  const activeAriaExpand = (arr = []) => {
    if (arr === path) {
      return "true";
    } else {
      return "false";
    }
  };
  const activeAccordionBodyClass = (arr) => {
    if (arr === path) {
      return "accordion-collapse collapse show";
    } else {
      return "accordion-collapse collapse ";
    }
  };

  return (
    <div className="sideBar">
      <div className="accordion" id="accordionExample">
        {/* DMT */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={activeBtnClass("/remitter-registration")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded={activeAriaExpand("/remitter-registration")}
              aria-controls="collapseTwo"
            >
              <span class=" sidebarIconSize">
                {/* DMT ICon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.5353 2.51471L19 11.9338L15.9957 17.2353L10.4791 7.76471L13.5353 2.51471ZM12.577 2L7.11223 11.4191H1L6.46475 2H12.577ZM15.0633 17.75H4.05612L1 12.4743H12.0072L15.0633 17.75Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">DMT</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={activeAccordionBodyClass("/remitter-registration")}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/remitter-registration" className={activeLink("/fund-transfer")}>
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Transfer Money</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Requery</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BBPS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingBBPS">
            <button
              className={activeBtnClass("/dummy-link")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBBPS"
              aria-expanded={activeAriaExpand("/dummy-link")}
              aria-controls="collapseBBPS"
            >
              <span class="sidebarIconSize">
                {/* BBPS Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      d="M14.9172 3.62737C14.6905 3.35751 14.4639 3.09304 14.1508 2.92033C13.6435 2.51014 13.0282 2.36441 12.4129 2.21869C11.7382 2.05677 11.0474 2.07836 10.362 2.04058C9.40664 1.98121 8.44593 1.992 7.48522 2.04058C7.3341 2.05137 7.15059 2.01359 7.01566 2.13773C6.92391 2.23488 6.95629 2.35902 6.95089 2.47236C6.95089 3.14162 6.96169 3.80548 6.9455 4.47474C6.9347 4.79317 7.03185 4.90112 7.36108 4.90652C8.40275 4.91731 9.43902 4.84175 10.4807 4.96049C11.1715 5.03605 11.9433 5.40306 12.0567 6.28281C12.1322 6.85492 12.0081 7.36226 11.7382 7.85341C11.7005 7.95056 11.5385 8.04231 11.7382 8.13946L13.6381 8.70617C13.8756 8.8411 14.1184 9.0408 14.3883 8.81412C14.642 8.59823 14.9064 8.38774 15.0522 8.0693C15.8779 6.84413 15.8132 4.80937 14.9118 3.62737H14.9172Z"
                      fill="#003087"
                    />
                    <path
                      d="M15.9157 11.2915C15.8024 10.8813 15.5271 10.5683 15.2681 10.2499C14.9227 9.82348 14.4801 9.51584 14.0051 9.26756C11.8624 8.11255 9.38508 8.45798 7.04268 8.4202C6.74583 8.4202 6.67027 8.32844 6.67027 8.04239C6.68107 6.19114 6.67567 4.33449 6.67027 2.48323C6.67027 2.07304 6.6109 2.01367 6.20611 2.01367C5.28858 2.01367 4.37644 2.01367 3.45891 2.01367C3.01094 2.01367 3.00554 2.01907 3.00554 2.47244C3.00554 7.48108 3.00554 12.4843 3.00554 17.493C3.00554 17.6171 2.97316 17.752 3.06491 17.8654C3.17826 18.0381 3.35637 17.9895 3.51289 17.9949C5.87148 17.9949 8.22468 18.0111 10.5833 17.9841C12.5101 17.9841 14.669 17.4282 15.7538 15.6741C16.5148 14.341 16.612 12.6732 15.9103 11.2969L15.9157 11.2915ZM12.753 13.7635C12.5695 14.5461 11.884 15.048 10.9935 15.1128C10.7938 15.2099 10.5779 15.1829 10.3728 15.1829C9.20158 15.1883 8.02498 15.1829 6.85378 15.1883C6.60551 15.1883 6.52994 15.1074 6.53534 14.8645C6.54614 13.6339 6.54614 12.4034 6.53534 11.1674C6.53534 10.9353 6.59471 10.822 6.84838 10.822C8.13832 10.8436 9.42826 10.7788 10.7182 10.8598C11.2633 10.8975 11.7815 11.0271 12.197 11.4211C12.8555 11.8798 12.9419 13.0402 12.7584 13.7527L12.753 13.7635Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">BBPS</span>
            </button>
          </h2>
          <div
            id="collapseBBPS"
            className={activeAccordionBodyClass("/dummy-link")}
            aria-labelledby="headingBBPS"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Bill Payment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Recharge</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*AEPS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAdminManagement">
            <button
              className={activeBtnClass("/")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAdminManagement"
              aria-expanded={activeAriaExpand("/")}
              aria-controls="collapseAdminManagement"
            >
              <span class="sidebarIconSize">
                {/* AEPS Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.625 2.65678C7.99133 2.10407 9.4725 1.89538 10.9384 2.04905C12.4042 2.20272 13.8099 2.71404 15.0319 3.53809C16.2539 4.36214 17.2548 5.4737 17.9467 6.77509C18.6386 8.07648 19.0003 9.52789 19 11.0018C19 11.267 18.8946 11.5213 18.7071 11.7089C18.5196 11.8964 18.2652 12.0018 18 12.0018C17.7348 12.0018 17.4804 11.8964 17.2929 11.7089C17.1054 11.5213 17 11.267 17 11.0018C17.0005 9.8553 16.7193 8.72625 16.1813 7.71387C15.6432 6.70148 14.8648 5.83674 13.9143 5.19565C12.9638 4.55455 11.8704 4.15673 10.7302 4.03714C9.58996 3.91755 8.43782 4.07985 7.375 4.50978C7.25247 4.56388 7.12031 4.59281 6.98638 4.59486C6.85245 4.59691 6.71947 4.57203 6.59534 4.5217C6.47121 4.47137 6.35846 4.39661 6.26377 4.30187C6.16909 4.20713 6.0944 4.09432 6.04414 3.97016C5.99389 3.846 5.96909 3.71301 5.97122 3.57908C5.97335 3.44515 6.00237 3.31301 6.05654 3.19051C6.11072 3.06801 6.18896 2.95764 6.28661 2.86595C6.38426 2.77427 6.49934 2.70314 6.625 2.65678ZM4.66201 4.96078C4.86071 5.13627 4.98159 5.38347 4.9981 5.64806C5.0146 5.91265 4.92536 6.17296 4.75001 6.37178C3.61987 7.64903 2.99725 9.29632 3.00001 11.0018C3.00001 11.267 2.89465 11.5213 2.70711 11.7089C2.51958 11.8964 2.26522 12.0018 2.00001 12.0018C1.73479 12.0018 1.48044 11.8964 1.2929 11.7089C1.10536 11.5213 1.00001 11.267 1.00001 11.0018C0.99722 8.80914 1.79764 6.69142 3.25001 5.04878C3.33691 4.95024 3.44239 4.8698 3.5604 4.81205C3.67841 4.75429 3.80664 4.72036 3.93777 4.71219C4.0689 4.70402 4.20036 4.72177 4.32462 4.76442C4.44889 4.80707 4.56354 4.8738 4.66201 4.96078Z"
                      fill="#003087"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.99989 11.002C4.99989 9.67587 5.52667 8.4041 6.46435 7.46642C7.40204 6.52874 8.6738 6.00195 9.99989 6.00195C11.326 6.00195 12.5977 6.52874 13.5354 7.46642C14.4731 8.4041 14.9999 9.67587 14.9999 11.002C14.9999 11.2672 14.8945 11.5215 14.707 11.7091C14.5195 11.8966 14.2651 12.002 13.9999 12.002C13.7347 12.002 13.4803 11.8966 13.2928 11.7091C13.1052 11.5215 12.9999 11.2672 12.9999 11.002C12.9999 10.2063 12.6838 9.44324 12.1212 8.88063C11.5586 8.31802 10.7955 8.00195 9.99989 8.00195C9.20424 8.00195 8.44118 8.31802 7.87857 8.88063C7.31596 9.44324 6.99989 10.2063 6.99989 11.002C6.99989 12.679 6.65489 14.278 6.03189 15.7309C5.92726 15.9747 5.73009 16.1669 5.48377 16.2652C5.23744 16.3636 4.96212 16.3601 4.71839 16.2554C4.47465 16.1508 4.28247 15.9537 4.1841 15.7073C4.08574 15.461 4.08926 15.1857 4.19389 14.9419C4.72756 13.697 5.00181 12.3564 4.99989 11.002ZM13.9209 13.014C14.0507 13.0345 14.1751 13.0805 14.2871 13.1491C14.3991 13.2178 14.4965 13.3079 14.5737 13.4142C14.6508 13.5206 14.7063 13.6411 14.7369 13.7689C14.7675 13.8966 14.7726 14.0292 14.7519 14.1589C14.6215 14.9816 14.4395 15.7952 14.2069 16.5949C14.1727 16.7238 14.1131 16.8445 14.0316 16.95C13.9501 17.0555 13.8483 17.1437 13.7323 17.2092C13.6162 17.2748 13.4882 17.3166 13.3558 17.332C13.2234 17.3474 13.0892 17.3361 12.9612 17.2989C12.8332 17.2617 12.7139 17.1993 12.6104 17.1153C12.5068 17.0313 12.4211 16.9275 12.3583 16.8099C12.2955 16.6924 12.2568 16.5634 12.2445 16.4307C12.2323 16.2979 12.2467 16.164 12.2869 16.0369C12.4939 15.3239 12.6579 14.592 12.7769 13.845C12.8187 13.5833 12.9626 13.3488 13.1771 13.1932C13.3916 13.0376 13.6591 12.9735 13.9209 13.015V13.014Z"
                      fill="#003087"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.0001 10.002C10.2653 10.002 10.5197 10.1073 10.7072 10.2948C10.8948 10.4824 11.0001 10.7367 11.0001 11.002C11.0001 13.238 10.5401 15.37 9.71011 17.306C9.6583 17.4266 9.58323 17.5359 9.48919 17.6276C9.39514 17.7193 9.28396 17.7915 9.16199 17.8402C9.04002 17.8889 8.90965 17.9131 8.77833 17.9115C8.647 17.9098 8.5173 17.8823 8.39661 17.8305C8.27593 17.7786 8.16663 17.7036 8.07495 17.6095C7.98328 17.5155 7.91103 17.4043 7.86233 17.2823C7.81362 17.1604 7.78942 17.03 7.7911 16.8987C7.79278 16.7673 7.82031 16.6376 7.87211 16.517C8.61891 14.7744 9.00272 12.8978 9.00011 11.002C9.00011 10.7367 9.10547 10.4824 9.293 10.2948C9.48054 10.1073 9.73489 10.002 10.0001 10.002Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">AEPS</span>
            </button>
          </h2>
          <div
            id="collapseAdminManagement"
            className={activeAccordionBodyClass("/")}
            aria-labelledby="headingAdminManagement"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                <Link to="/" className={activeLink("/")}>
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Transactions</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*Wallet*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSettlementManagement">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSettlementManagement"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseSettlementManagement"
            >
              <span class="sidebarIconSize">
                {/* Wallet Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.56596 4.05029C3.84428 4.20441 3.20233 4.85226 3.05106 5.57906C2.98298 5.90628 2.98298 14.5894 3.05106 14.9166C3.1677 15.4771 3.5863 16.0182 4.09858 16.2708C4.58367 16.51 4.15707 16.4955 10.4309 16.4863L16.0459 16.4781L16.2819 16.3614C16.5662 16.2209 16.7432 16.0401 16.8807 15.7498L16.9796 15.5412L16.9898 14.7683L17 13.9953H15.6419C14.1861 13.9953 14.0338 13.983 13.6171 13.831C13.0116 13.6102 12.4013 13.0175 12.1851 12.4403C12.0464 12.0701 12.0155 11.8985 12.0155 11.497C12.0155 10.9544 12.1258 10.5681 12.4008 10.1477C12.6875 9.70947 13.1538 9.33194 13.6171 9.16299C14.0338 9.01102 14.1861 8.99866 15.6419 8.99866H17L16.9898 8.22573L16.9796 7.45281L16.8807 7.2442C16.7432 6.95389 16.5662 6.77304 16.2819 6.63258L16.046 6.51593L10.4362 6.50032L4.82653 6.4847L4.70855 6.3947C4.48379 6.22325 4.44263 5.9243 4.61305 5.70085C4.77622 5.48693 4.42318 5.50098 9.63415 5.50098C14.9754 5.50098 14.5442 5.52185 14.7873 5.25152C14.9856 5.03092 15.0403 4.79758 14.9585 4.52089C14.9079 4.34934 14.6492 4.09064 14.4776 4.03996C14.2763 3.98046 4.84683 3.9903 4.56596 4.05029ZM14.1256 10.0474C13.3338 10.2603 12.8439 11.0802 13.0457 11.8548C13.186 12.3935 13.6022 12.8083 14.1437 12.9494C14.2888 12.9872 14.5751 12.996 15.6589 12.996H16.9952V11.497V9.99799L15.6445 10.0001C14.5684 10.0017 14.2597 10.0113 14.1256 10.0474Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">Wallet</span>
            </button>
          </h2>
          <div
            id="collapseSettlementManagement"
            className={activeAccordionBodyClass("/dummyDownload-text")}
            aria-labelledby="headingSettlementManagement"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Wallet To Wallet Transfer
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Wallet To Wallet Transfer
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*Home*/}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <button className="accordion-button collapsed" type="button">
              <span class="sidebarIconSize">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      d="M17.5205 9.8853L10.7836 3.15332C10.7351 3.10472 10.6775 3.06616 10.6141 3.03985C10.5507 3.01354 10.4827 3 10.414 3C10.3453 3 10.2773 3.01354 10.2139 3.03985C10.1505 3.06616 10.0929 3.10472 10.0444 3.15332L3.30749 9.8853C3.11122 10.0816 3 10.3482 3 10.6262C3 11.2036 3.46941 11.673 4.04676 11.673H4.75659V16.4766C4.75659 16.7661 4.99048 17 5.27997 17H9.36724V13.3363H11.1991V17H15.548C15.8375 17 16.0714 16.7661 16.0714 16.4766V11.673H16.7812C17.0593 11.673 17.3259 11.5634 17.5222 11.3655C17.9294 10.9566 17.9294 10.2942 17.5205 9.8853Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">Home</span>
            </button>
          </h2>
        </div>

        {/*Wallet Management*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingWalletManagement">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWalletManagement"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseWalletManagement"
            >
              <span class="sidebarIconSize">
                {/* Wallet Management Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.56596 4.05029C3.84428 4.20441 3.20233 4.85226 3.05106 5.57906C2.98298 5.90628 2.98298 14.5894 3.05106 14.9166C3.1677 15.4771 3.5863 16.0182 4.09858 16.2708C4.1632 16.3027 4.21164 16.33 4.2619 16.3535C4.58891 16.5062 4.99283 16.4943 10.4309 16.4863L16.0459 16.4781L16.2819 16.3614C16.5662 16.2209 16.7432 16.0401 16.8807 15.7498L16.9796 15.5412L16.9898 14.7683L17 13.9953V8.99866L16.9898 8.22573L16.9796 7.45281L16.8807 7.2442C16.7432 6.95389 16.5662 6.77304 16.2819 6.63258L16.046 6.51593L10.4362 6.50032L4.82653 6.4847L4.70855 6.3947C4.48379 6.22325 4.44263 5.9243 4.61305 5.70085C4.6335 5.67405 4.64584 5.65083 4.66203 5.63071C4.7751 5.49023 5.07605 5.50098 9.63415 5.50098C14.2022 5.50098 14.5481 5.51624 14.7045 5.35156C14.731 5.32368 14.7521 5.29066 14.7873 5.25152C14.9856 5.03092 15.0403 4.79758 14.9585 4.52089C14.9079 4.34934 14.6492 4.09064 14.4776 4.03996C14.2763 3.98046 4.84683 3.9903 4.56596 4.05029ZM7.48523 8.18199C7.68175 7.99113 8.1641 7.70694 8.5438 7.55829C8.71081 7.49291 8.8286 7.48403 8.95553 7.52728C9.01617 7.54795 9.08099 7.59765 9.22271 7.7322C9.50296 7.99823 9.67508 8.07421 9.99919 8.07496C10.3231 8.07571 10.5029 7.99585 10.7775 7.72921C10.9672 7.54496 11.0521 7.5 11.2102 7.5C11.4265 7.5 12.0273 7.79912 12.4125 8.09859C12.5976 8.24253 12.6411 8.28891 12.6857 8.38964C12.7433 8.51994 12.7454 8.62171 12.6937 8.77628C12.6344 8.95348 12.6198 9.20855 12.6592 9.37689C12.7412 9.72684 13.0019 10.0133 13.3425 10.1276C13.4109 10.1506 13.4773 10.1694 13.4901 10.1694C13.5511 10.1694 13.6889 10.2251 13.7577 10.2776C13.9108 10.3946 13.9748 10.6218 13.9973 11.1286C14.013 11.4816 13.958 11.9644 13.886 12.1054C13.8688 12.1392 13.816 12.2016 13.7686 12.2442C13.681 12.3229 13.665 12.3294 13.3945 12.3946C13.0096 12.4875 12.7154 12.7833 12.6248 13.1685C12.5847 13.3394 12.601 13.5711 12.668 13.7813C12.7283 13.9705 12.7281 14.0479 12.6671 14.1897C12.6186 14.3024 12.4728 14.4348 12.1873 14.6252C11.9624 14.7753 11.6013 14.9638 11.4372 15.0168C11.2294 15.0839 11.0298 15.015 10.8703 14.8211C10.5407 14.4204 10.0182 14.3131 9.56042 14.5521C9.44483 14.6125 9.36903 14.6797 9.15668 14.9101C9.05266 15.023 8.97193 15.0624 8.82635 15.0712C8.73812 15.0766 8.68988 15.0698 8.60946 15.0408C8.09047 14.8535 7.44469 14.4359 7.3406 14.2203C7.26633 14.0665 7.26676 13.9934 7.34327 13.7643C7.42505 13.5194 7.44042 13.3805 7.40667 13.1908C7.37097 12.9901 7.27839 12.8065 7.13778 12.6574C6.95875 12.4676 6.79012 12.3812 6.50021 12.3306C6.29053 12.294 6.14827 12.1947 6.08262 12.0391C5.98496 11.8076 5.97114 11.076 6.05584 10.6198C6.11207 10.3169 6.25087 10.1794 6.54572 10.1346C6.94701 10.0736 7.25413 9.81902 7.39279 9.43253C7.43094 9.32615 7.43668 9.28396 7.43672 9.10995C7.43677 8.93377 7.43104 8.89273 7.38903 8.76794C7.30538 8.51941 7.33717 8.32578 7.48523 8.18199ZM11.1177 10.5641C10.9297 10.2762 10.6636 10.0861 10.3164 9.99172C10.1863 9.95634 9.89936 9.94835 9.75728 9.97614C9.20766 10.0836 8.79463 10.4988 8.68814 11.0509C8.60773 11.4676 8.74947 11.9183 9.05795 12.2268C9.57702 12.7459 10.4124 12.7495 10.9329 12.2349C11.3834 11.7896 11.4608 11.0897 11.1177 10.5641Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">Wallet Management</span>
            </button>
          </h2>
          <div
            id="collapseWalletManagement"
            className={activeAccordionBodyClass("/dummyDownload-text")}
            aria-labelledby="headingWalletManagement"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Direct Credit/Debit Wallet
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Request Money</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Wallet Approval Maker</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">My Wallet</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Balance Report </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Bank Transfer Approval</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Wallet Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">E-Collect Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Maximus Wallet Top-Up</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Client Wallet Ledger</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Franchise Wallet Ledger
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Agent Wallet Ledger</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Maximus Wallet Ledger</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Wallet To Wallet Ledger
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Wallet To Bank Transfer Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Current Balance Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Bulk Wallet To Wallet Transfer
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">MATM Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Wallet Approval Cheker</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Wallet Bank Transfer Settlement
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*Transaction Report*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTransactionReport">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTransactionReport"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseTransactionReport"
            >
              <span class="sidebarIconSize">
                {/* ransaction Report Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.18748 3.22088C4.22969 2.9854 4.47656 2.68546 4.7128 2.5826C4.85352 2.52131 5.51722 2.50411 7.8126 2.50229L10.7333 2.5V4.46861C10.7333 6.66513 10.74 6.70916 11.1188 6.99812L11.3405 7.16732L13.3863 7.18417L15.432 7.20102L15.4163 12.0674C15.4008 16.8785 15.3993 16.9355 15.2796 17.0958C15.213 17.185 15.0856 17.3124 14.9965 17.3789C14.8357 17.499 14.7931 17.5 9.79401 17.5C4.79493 17.5 4.75237 17.499 4.59157 17.3789C4.50239 17.3124 4.37499 17.185 4.30842 17.0958C4.18801 16.9346 4.18724 16.8965 4.17045 10.1718C4.16118 6.45284 4.16881 3.32491 4.18748 3.22088ZM11.6727 6.25734V4.37867C11.6727 3.3454 11.6794 2.5 11.6877 2.5C11.696 2.5 12.5478 3.3454 13.5807 4.37867L15.4587 6.25734H13.5657H11.6727ZM12.3626 11.4341L12.6585 10.368H11.4747C11.4224 10.0637 11.3211 9.78701 11.171 9.53792C11.1452 9.49458 11.1178 9.45235 11.089 9.41123L12.3626 9.41585L12.6668 8.3335H8.40013H8.18347H7.15847L6.83347 9.59082H8.40013C8.95013 9.59082 9.35013 9.71696 9.60013 9.96924C9.71487 10.085 9.80327 10.2179 9.86535 10.368H7.13347L6.83347 11.4341H9.9079C9.87871 11.5264 9.84001 11.6132 9.7918 11.6945C9.67236 11.8979 9.49597 12.0566 9.26263 12.1706C9.03208 12.2818 8.74458 12.3374 8.40013 12.3374H6.95847L6.96263 13.2407L9.8793 16.6668H11.6168V16.5936L8.98347 13.4401L9.03347 13.4238C9.62236 13.3479 10.0987 13.196 10.4626 12.9681C10.8265 12.7402 11.0932 12.4486 11.2626 12.0933C11.3598 11.8896 11.429 11.6699 11.4705 11.4341H12.3626Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">Transaction Report</span>
            </button>
          </h2>
          <div
            id="collapseTransactionReport"
            className={activeAccordionBodyClass("/dummyDownload-text")}
            aria-labelledby="headingTransactionReport"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Transaction Log File</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">All Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Decline Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Reversal Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Current Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">DMT Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">BBPS Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">AEPS Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">MATM Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Transaction Settlement Tracker
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">ZOM Details Report</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Commission Report */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingUploads">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseUploads"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseUploads"
            >
              <span class="sidebarIconSize">
                {/* Commission Report Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.02097 3.72088C4.06318 3.4854 4.31005 3.18546 4.5463 3.0826C4.68702 3.02131 5.35072 3.00411 7.6461 3.00229L10.5668 3V4.96861C10.5668 7.16513 10.5735 7.20916 10.9523 7.49812L11.1739 7.66732L13.2198 7.68417L15.2655 7.70102L15.2498 12.5674C15.2343 17.3785 15.2328 17.4355 15.1131 17.5958C15.0465 17.685 14.9191 17.8124 14.83 17.8789C14.6692 17.999 14.6266 18 9.62751 18C4.62843 18 4.58587 17.999 4.42506 17.8789C4.33588 17.8124 4.20849 17.685 4.14191 17.5958C4.0215 17.4346 4.02074 17.3965 4.00395 10.6718C3.99467 6.95284 4.0023 3.82491 4.02097 3.72088ZM11.5062 6.75734V4.87867C11.5062 3.8454 11.5129 3 11.5212 3C11.5295 3 12.3813 3.8454 13.4142 4.87867L15.2922 6.75734H13.3992H11.5062ZM7.25355 12.259C6.31296 12.259 5.60009 11.6997 5.60009 10.6295C5.60009 9.55923 6.31296 9 7.25355 9C8.19415 9 8.89712 9.55923 8.89712 10.6295C8.89712 11.6997 8.19415 12.259 7.25355 12.259ZM7.7288 10.6295C7.7288 10.1667 7.54068 9.96419 7.24365 9.96419C6.94662 9.96419 6.76841 10.1667 6.76841 10.6295C6.76841 11.0826 6.94662 11.2851 7.24365 11.2851C7.54068 11.2851 7.7288 11.0826 7.7288 10.6295ZM8.51098 15.8939H6.87732L10.6892 9.10606H12.3229L8.51098 15.8939ZM11.9565 16C11.0159 16 10.313 15.4408 10.313 14.3705C10.313 13.2906 11.0159 12.741 11.9565 12.741C12.8971 12.741 13.6001 13.2906 13.6001 14.3705C13.6001 15.4408 12.8971 16 11.9565 16ZM12.4318 14.3705C12.4318 13.9174 12.2437 13.7052 11.9466 13.7052C11.6496 13.7052 11.4714 13.9174 11.4714 14.3705C11.4714 14.8237 11.6496 15.0262 11.9466 15.0262C12.2437 15.0262 12.4318 14.8237 12.4318 14.3705Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">Commission Report</span>
            </button>
          </h2>
          <div
            id="collapseUploads"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingUploads"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Agent Commission Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Agent Commission Summary
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Franchise Commission Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Franchise Commission Summary
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Client Commission Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Client Commission Summary
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Client Commission <br /> Settlement
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Franchise Commission Settlement
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Agent Commission <br /> Settlement
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Maximus Commission</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Maximus Commission Summary
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Client Wallet Ledger</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Invoice Commission Approve
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Agent Commission Slab <br /> Report
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*Downloads */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingDownloads">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDownloads"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseDownloads"
            >
              <span class="sidebarIconSize">
                {/* Downloads Report Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.75023 14.3962C3.44692 14.4931 3.2291 14.6817 3.09676 14.962C3.02059 15.1234 3.01153 15.1713 3.00251 15.4603C2.99496 15.7021 3.00374 15.8193 3.03856 15.941C3.13138 16.2652 3.36309 16.5204 3.66914 16.6354L3.82066 16.6923H9.99974C16.1448 16.6923 16.1796 16.692 16.3274 16.6365C16.6379 16.5198 16.8499 16.2929 16.9496 15.9707C16.9977 15.8151 17.0055 15.732 16.9971 15.4626C16.988 15.171 16.979 15.1237 16.9027 14.962C16.7931 14.7303 16.6305 14.5659 16.404 14.4582L16.2219 14.3716L10.0408 14.3664C5.101 14.3623 3.83767 14.3683 3.75023 14.3962Z"
                      fill="#003087"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.02588 4.02839C8.82297 4.10649 8.6494 4.28466 8.5819 4.48407C8.55931 4.55084 8.55031 6.07687 8.55031 7.32998V9.08251L7.6634 9.09047C6.81681 9.09805 6.77305 9.10099 6.70098 9.15504C6.52134 9.28981 6.4545 9.50403 6.5342 9.68972C6.58099 9.79884 9.65529 13.041 9.79034 13.1237C9.90341 13.193 10.0963 13.193 10.2094 13.1237C10.3445 13.041 13.4188 9.79884 13.4655 9.68972C13.5452 9.50403 13.4784 9.28981 13.2988 9.15504C13.2267 9.10099 13.1829 9.09805 12.3369 9.09047L11.4506 9.08254L11.4432 7.29156C11.4349 5.29226 11.4464 4.41058 11.2397 4.20306C11.0436 4.00611 11.0479 4.00683 10.0272 4.00092C9.37172 3.9971 9.08676 4.00493 9.02588 4.02839Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">Downloads</span>
            </button>
          </h2>
          <div
            id="collapseDownloads"
            className={activeAccordionBodyClass("/dummyDownload-text")}
            aria-labelledby="headingDownloads"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Download Aggrements</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">BBPS Biller Details</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Manage Bank IFSC Details
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Import Billers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">GST Commission Invoice</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Invoice Commission Approve
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Escalation Report</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*Complaint Management*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingComplaintManagement">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseComplaintManagement"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseComplaintManagement"
            >
              <span class="sidebarIconSize">
                {/* Complaint Management Icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      d="M4.74585 3.72126C4.91876 3.39451 5.25701 3.13408 5.63866 3.03394C5.75788 3.00267 6.54813 2.99592 9.36975 3.00205C13.2638 3.01054 13.1484 3.00588 14.1091 3.1936C14.6782 3.30482 15.053 3.41483 16.084 3.77337L17 4.09185V7.36343V10.635L16.2689 11.033C15.3831 11.5152 15.1388 11.6655 14.7565 11.9628C14.3796 12.2561 14.2505 12.3813 12.8777 13.7855C11.5987 15.0938 11.4904 15.2135 11.3454 15.4793C11.1295 15.8752 11.1915 15.4469 11.1023 16.765C11.1368 18.2295 9.59104 18.0407 9.18471 17.9181C8.77837 17.7955 8.15207 17.1772 8.20766 16.321C8.27832 15.2327 8.61126 14.204 9.18471 13.3022C9.28951 13.1374 9.36746 12.9952 9.35788 12.9864C9.3483 12.9775 9.07859 12.9858 8.75849 13.0046C7.63146 13.0711 5.11449 13.1689 4.84723 13.1565C4.20666 13.1269 3.70151 12.709 3.58097 12.109C3.5037 11.7244 3.65388 11.2933 3.96481 11.0073C4.13049 10.8548 4.45556 10.6795 4.58914 10.6706C4.62101 10.6685 4.4921 10.6494 4.30272 10.6283C4.04262 10.5992 3.90618 10.5661 3.74508 10.4927C3.4834 10.3734 3.21539 10.1199 3.09062 9.87346C3.00941 9.71308 3 9.65892 3 9.35226C3 9.02495 3.00501 9.00084 3.11462 8.79862C3.25049 8.54803 3.49987 8.32303 3.78158 8.19691C3.95234 8.12047 4.02168 8.10896 4.37815 8.09786L4.78151 8.08529L4.58985 8.03038C4.18622 7.9148 3.89539 7.68138 3.71812 7.33083C3.39217 6.68613 3.71371 5.93708 4.4483 5.62983C4.59412 5.56885 4.68434 5.55921 5.21849 5.54733C5.81788 5.53401 5.82182 5.53345 5.63866 5.48971C5.25435 5.39793 4.95859 5.17092 4.75328 4.81013C4.6519 4.63199 4.64706 4.60714 4.64706 4.2657C4.64706 3.93294 4.65395 3.89489 4.74585 3.72126Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">Complaint Management</span>
            </button>
          </h2>
          <div
            id="collapseComplaintManagement"
            className={activeAccordionBodyClass("/dummyDownload-text")}
            aria-labelledby="headingComplaintManagement"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Other Complaints</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span class="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">BBPS Complaints</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="sidebarButton d-flex justify-content-center align-items-center"
        onClick={props.buttonCollapse}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.22003 12.6667C9.12043 12.667 9.02202 12.645 8.93204 12.6024C8.84205 12.5597 8.76277 12.4974 8.70003 12.42L5.48003 8.42002C5.38197 8.30073 5.32837 8.1511 5.32837 7.99669C5.32837 7.84227 5.38197 7.69264 5.48003 7.57335L8.81336 3.57335C8.92652 3.43721 9.08913 3.35159 9.26541 3.33534C9.44169 3.31909 9.61722 3.37353 9.75336 3.48669C9.8895 3.59985 9.97512 3.76245 9.99137 3.93874C10.0076 4.11502 9.95319 4.29054 9.84003 4.42669L6.86003 8.00002L9.74003 11.5734C9.82155 11.6712 9.87333 11.7904 9.88925 11.9167C9.90517 12.0431 9.88456 12.1714 9.82986 12.2864C9.77515 12.4014 9.68865 12.4984 9.58057 12.5658C9.4725 12.6332 9.34738 12.6682 9.22003 12.6667Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SideBar;
