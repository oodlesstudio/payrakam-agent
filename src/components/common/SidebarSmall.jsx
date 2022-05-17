import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

// const activeLink = (arr) => {};

const dmtPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/transfer-money">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Transfer Money</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Requery</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const bbpsPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Bill Payment</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Recharge</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const aepsPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Transactions</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const CommissionReportPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Agent Commission Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Agent Commission Summary</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Franchise Commission Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Franchise Commission Summary</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Client Commission Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Client Commission Summary</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Client Commission Settlement</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">
              Franchise Commission Settlement
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Agent Commission Settlement</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Maximus Commission</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Maximus Commission Summary</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Client Wallet Ledger</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Invoice Commission Approve</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Agent Commission Slab Report</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const DownloadsPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Download Aggrements</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">BBPS Biller Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Manage Bank IFSC Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Import Billers</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">GST Commission Invoice</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Invoice Commission Approve</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Escalation Report</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const transactionReportPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Transaction Log File</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">All Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Decline Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Reversal Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Current Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">DMT Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">BBPS Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">AEPS Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">MATM Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Transaction Settlement Tracker</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">ZOM Details Report</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const walletManagementPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Direct Credit/Debit Wallet</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Request Money</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Wallet Approval Maker</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">My Wallet</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Balance Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Bank Transfer Approval</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Wallet Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">E-Collect Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Maximus Wallet Top-Up</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Client Wallet Ledger</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Franchise Wallet Ledger</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Agent Wallet Ledger</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Maximus Wallet Ledger</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Wallet To Wallet Ledger</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Wallet To Bank Transfer Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Current Balance Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Bulk Wallet To Wallet Transfer</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">MATM Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Wallet Approval Cheker</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">
              Wallet Bank Transfer Settlement
            </span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const complaintManagementPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Other Complaints</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">BBPS Complaints</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const walletPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Wallet To Wallet Transfer</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-vertical-line"></span>
            </span>
            <span className="subMenuRight">Wallet To Wallet Transfer</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const SidebarSmall = (props) => {
  const path = useLocation().pathname;

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    } else {
      return "";
    }
  };

  return (
    <div className="sidebarSmall">
      {/* DMT */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={dmtPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-DMT">{/* DMT Icon */}</span>
        </OverlayTrigger>
      </div>

      {/* BBPS */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={bbpsPopover}
          rootClose
        >
          <span className=" sidebarIconSize icon-BBPS">{/*  BBPS Icon */}</span>
        </OverlayTrigger>
      </div>

      {/* Aeps */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={aepsPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-AEPS">
            {/* Aeps Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Wallet */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={walletPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-wallet2">
            {/* Wallet Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Home  */}
      <div className="sidebarSmallImg">
        <Link
          to="/housekeeping-activity"
          className={activeLink("/housekeeping-activity")}
        >
          <span className="sidebarIconSize icon-home">
            {/* Home  Small Icon */}
          </span>
        </Link>
      </div>

      {/* Wallet Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={walletManagementPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-wallet">
            {/* Wallet Management Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Transaction Report */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={transactionReportPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-Transaction-report">
            {/* Transaction Report Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Commission Report */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={CommissionReportPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-commission-report">
            {/* Commission Report Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Downloads */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={DownloadsPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-download">
            {/* Downloads Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Complaint Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={complaintManagementPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-complaint">
            {/* Complaint Management Small Icon */}
          </span>
        </OverlayTrigger>
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
            d="M6.78 3.33331C6.8796 3.33297 6.978 3.35496 7.06799 3.39764C7.15797 3.44033 7.23725 3.50263 7.3 3.57998L10.52 7.57998C10.6181 7.69927 10.6717 7.8489 10.6717 8.00331C10.6717 8.15773 10.6181 8.30736 10.52 8.42665L7.18667 12.4266C7.07351 12.5628 6.9109 12.6484 6.73462 12.6647C6.55833 12.6809 6.38281 12.6265 6.24667 12.5133C6.11052 12.4002 6.02491 12.2375 6.00865 12.0613C5.9924 11.885 6.04684 11.7095 6.16 11.5733L9.14 7.99998L6.26 4.42665C6.17848 4.32879 6.12669 4.20963 6.11077 4.08326C6.09485 3.9569 6.11546 3.82861 6.17017 3.7136C6.22487 3.59858 6.31138 3.50164 6.41945 3.43424C6.52753 3.36685 6.65264 3.33182 6.78 3.33331Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidebarSmall;
