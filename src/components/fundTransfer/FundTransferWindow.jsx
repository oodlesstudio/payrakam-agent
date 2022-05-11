import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import "./fundTransfer.css";

// Images
import Error from "../../images/common/error.svg";
import Success from "../../images/common/success.svg";

const options = [
  { value: "10 Entries", label: "Option" },
  { value: "25 Entries", label: "Option" },
  { value: "50 Entries", label: "Option" },
  { value: "100 Entries", label: "Option" },
];

const FundTransferWindow = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);

  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  // CSS

  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Fund Transfer
        </h5>

        <div className="d-flex align-items-center">
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Home</p>
          </Link>
          <Link to="/">
            <svg
              width="8"
              height="auto"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </Link>
          <p className="fontSize12  colorPrimaryDefault">DMT</p>
          <span>
            <svg
              width="8"
              height="auto"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <p className="fontSize12 colorPrimaryDefault">Transfer Money</p>
          <span>
            <svg
              width="8"
              height="auto"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <p className="fontSize12">Fund Transfer</p>
        </div>
      </div>

      <div className="tableBorderBox mb-24 ">
        <div className="configSelectBoxTop configSelectBoxTop2 FundTransferGrid mb-0 row  row-cols-auto">
          {/* Sender Name */}
          <div className="clientNameSelect col">
            <label htmlFor="name">Sender Name </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              className="inputTextBox"
            />
          </div>
          {/* Receiver Name */}
          <div className="clientNameSelect col">
            <label htmlFor="RName">Receiver Name</label>
            <input
              type="text"
              name="RName"
              id="RName"
              placeholder="Enter Receiver Name"
              className="inputTextBox"
            />
          </div>
          {/* Amount */}
          <div className="clientNameSelect col">
            <label htmlFor="Amount">Amount</label>
            <input
              type="text"
              name="Amount"
              id="Amount"
              placeholder="Enter Amount"
              className="inputTextBox"
            />
          </div>
          {/* Mode*/}
          <div className="clientNameSelect col">
            <label htmlFor="clientName">
              Mode<span>*</span>
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={() => {
                setClientName();
                changeClientName();
                setSelectedOption();
              }}
              options={options}
              id="clientName"
              classNamePrefix="reactSelectBox"
              placeholder="Select"
            />
            {clientName && (
              <p className="text-danger font-size9">Enter a correct input</p>
            )}
          </div>
          {/* Mobile Number */}
          <div className="clientNameSelect col">
            <label htmlFor="MobileNumber">Mobile Number</label>
            <input
              type="text"
              name="MobileNumber"
              id="MobileNumber"
              placeholder="Enter Mobile Number"
              className="inputTextBox"
            />
          </div>
          {/* Service Charges */}
          <div className="clientNameSelect col">
            <label htmlFor="ServiceCharges">Service Charges</label>
            <input
              type="text"
              name="ServiceCharges"
              id="ServiceCharges"
              placeholder="Enter Service Charges"
              className="inputTextBox"
            />
          </div>
          {/* Available Limit */}
          <div className="clientNameSelect col">
            <label htmlFor="Limit">Available Limit</label>
            <input
              type="text"
              name="Limit"
              id="Limit"
              placeholder="Enter Limit"
              className="inputTextBox"
            />
          </div>
          {/* Available Limit */}
          <div className="clientNameSelect col">
            <label htmlFor="AccountNumber">Account Number</label>
            <input
              type="text"
              name="AccountNumber"
              id="AccountNumber"
              placeholder="Enter Account Number"
              className="inputTextBox"
            />
          </div>
          {/* Net Amount */}
          <div className="clientNameSelect col">
            <label htmlFor="NetAmount">Net Amount</label>
            <input
              type="text"
              name="NetAmount"
              id="NetAmount"
              placeholder="Enter Net Amount"
              className="inputTextBox"
            />
          </div>
          {/* Wallet Balance */}
          <div className="clientNameSelect col">
            <label htmlFor="WalletBalance">Wallet Balance</label>
            <input
              type="text"
              name="WalletBalance"
              id="WalletBalance"
              placeholder="Enter Wallet Balance"
              className="inputTextBox"
            />
          </div>
          {/* IFSC Code */}
          <div className="clientNameSelect col">
            <label htmlFor="IFSCCode">IFSC Code</label>
            <input
              type="text"
              name="IFSCCode"
              id="IFSCCode"
              placeholder="Enter IFSC Code"
              className="inputTextBox"
            />
          </div>
          {/* Remarks */}
          <div className="clientNameSelect col">
            <label htmlFor="IFSCCode">Remarks</label>
            <input
              type="text"
              name="Remarks"
              id="Remarks"
              placeholder="Beneficiary Account Validation"
              className="inputTextBox"
            />
          </div>
        </div>
        <div className="beneficiaryBtns">
          <button
            type="button"
            className="btnPrimaryOutline"
            onClick={() => setResetFilters(!resetFilters)}
          >
            Cancel
          </button>
          <button
            type="button"
            class="btnPrimary beneRegisterBtn"
            onClick={() => setSaveFilters(!saveFilters)}
          >
            Validate Account
          </button>
        </div>
      </div>
      {/* form Success Modal */}
      {saveFilters && (
        <Modal
          show={saveFilters}
          onHide={() => setSaveFilters(!saveFilters)}
          centered
          className="defaultThemeModal saveFiltersModal centeredModal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Beneficiary Registration
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={Success} alt="Success" />
            <p className="letterSpacing-2 colorBlack">
              Form Submitted Successfully!
            </p>
          </Modal.Body>
        </Modal>
      )}

      {/* Form Cancel */}
      {resetFilters && (
        <Modal
          show={resetFilters}
          onHide={() => setResetFilters(!resetFilters)}
          centered
          className="defaultThemeModal saveFiltersModal errorFiltersModal centeredModal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Beneficiary Registration
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={Error} alt="Success" />
            <p className="letterSpacing-2 colorBlack">
              Are you sure to cancel the <br /> registration?
            </p>
            <div className="mt-3 pt-1">
              <button
                type="button"
                className="btnPrimaryOutline"
                onClick={() => setResetFilters(!resetFilters)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btnPrimary ms-2"
                onClick={() => setResetFilters(!resetFilters)}
              >
                Yes
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default FundTransferWindow;
