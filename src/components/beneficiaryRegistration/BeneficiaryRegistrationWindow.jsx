import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import "./beneficiaryRegistration.css";

// Images
import Error from "../../images/common/error.svg";
import Success from "../../images/common/success.svg";

const options = [
  { value: "10 Entries", label: "Option" },
  { value: "25 Entries", label: "Option" },
  { value: "50 Entries", label: "Option" },
  { value: "100 Entries", label: "Option" },
];

const BeneficiaryRegistrationWindow = () => {
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
          Beneficiary Registration
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
          <p className="fontSize12">Transfer Money</p>
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
          <p className="fontSize12">Beneficiary Registration</p>
        </div>
      </div>

      <div className="tableBorderBox mb-24 ">
        <div className="configSelectBoxTop configSelectBoxTop2 BeneficiaryRegistrationgrid mb-0 row  row-cols-auto">
          {/* Name */}
          <div className="clientNameSelect col">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              className="inputTextBox"
            />
          </div>
          {/* mobile */}
          <div className="clientNameSelect col">
            <label htmlFor="mobile">Mobile Number </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Enter Name"
              className="inputTextBox"
            />
          </div>
          {/* email Id */}
          <div className="clientNameSelect col">
            <label htmlFor="emailId">Email ID(optional)</label>
            <input
              type="text"
              name="emailId"
              id="emailId"
              placeholder="Enter Name"
              className="inputTextBox"
            />
          </div>
          {/* Bank */}
          <div className="clientNameSelect col">
            <label htmlFor="clientName">
              Bank<span>*</span>
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
          {/* IFSC Code */}
          <div className="clientNameSelect col">
            <label htmlFor="IFSC">IFSC Code</label>
            <input
              type="text"
              name="IFSC"
              id="IFSC"
              placeholder="Enter Name"
              className="inputTextBox"
            />
          </div>
          {/* Account Number */}
          <div className="clientNameSelect col">
            <label htmlFor="IFSC">Account Number</label>
            <input
              type="text"
              name="account Number"
              id="accountNumber"
              placeholder="Enter Name"
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
          <Link to="/fund-transfer">
            <button type="button" class="btnPrimary beneRegisterBtn">
              Register
            </button>
          </Link>
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

export default BeneficiaryRegistrationWindow;
