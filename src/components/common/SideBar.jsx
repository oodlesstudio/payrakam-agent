import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = (props) => {
  let path = useLocation().pathname;

  if (
    path === "/remitter-registration" ||
    path === "/beneficiary-registration" ||
    path === "/fund-transfer"
  ) {
    path = "/transfer-money";
  }

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
              className={activeBtnClass("/transfer-money")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded={activeAriaExpand("/transfer-money")}
              aria-controls="collapseTwo"
            >
              <span className=" sidebarIconSize icon-DMT">
                {/* DMT ICon */}
              </span>
              <span className="fontSize14 ms-2">DMT</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={activeAccordionBodyClass("/transfer-money")}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link
                    to="/transfer-money"
                    className={activeLink("/transfer-money")}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Transfer Money</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
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
              <span className="sidebarIconSize icon-BBPS">
                {/* BBPS Icon */}
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
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Bill Payment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
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
              <span className="sidebarIconSize icon-AEPS">
                {/* AEPS Icon */}
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
                      <span className="icon-vertical-line"></span>
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
              <span className="sidebarIconSize icon-wallet2">
                {/* Wallet Icon */}
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
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Wallet To Wallet Transfer
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
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
              <span className="sidebarIconSize icon-home"></span>
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
              <span className="sidebarIconSize icon-wallet">
                {/* Wallet Management Icon */}
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
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Direct Credit/Debit Wallet
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Request Money</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Wallet Approval Maker</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">My Wallet</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Balance Report </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Bank Transfer Approval</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Wallet Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">E-Collect Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Maximus Wallet Top-Up</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Client Wallet Ledger</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Franchise Wallet Ledger
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Agent Wallet Ledger</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Maximus Wallet Ledger</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Wallet To Wallet Ledger
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Wallet To Bank Transfer Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Current Balance Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Bulk Wallet To Wallet Transfer
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">MATM Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Wallet Approval Cheker</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
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
              <span className="sidebarIconSize icon-Transaction-report">
                {/* ransaction Report Icon */}
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
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Transaction Log File</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">All Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Decline Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Reversal Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Current Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">DMT Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">BBPS Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">AEPS Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">MATM Transaction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Transaction Settlement Tracker
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
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
              <span className="sidebarIconSize icon-commission-report">
                {/* Commission Report Icon */}
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
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Agent Commission Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Agent Commission Summary
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Franchise Commission Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Franchise Commission Summary
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Client Commission Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Client Commission Summary
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Client Commission <br /> Settlement
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Franchise Commission Settlement
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Agent Commission <br /> Settlement
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Maximus Commission</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Maximus Commission Summary
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Client Wallet Ledger</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Invoice Commission Approve
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
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
              <span className="sidebarIconSize icon-download">
                {/* Downloads Report Icon */}
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
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Download Aggrements</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">BBPS Biller Details</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Manage Bank IFSC Details
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Import Billers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">GST Commission Invoice</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Invoice Commission Approve
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
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
              <span className="sidebarIconSize icon-complaint">
                {/* Complaint Management Icon */}
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
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Other Complaints</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
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
