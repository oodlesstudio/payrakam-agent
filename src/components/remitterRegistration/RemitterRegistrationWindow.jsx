import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Modal } from "react-bootstrap";

// Images
import Success from "../../images/common/success.svg";
import fingerPrintSvg from "../../images/common/fingerPrint.svg";

const options = [
  { value: "10 Entries", label: "Option" },
  { value: "25 Entries", label: "Option" },
  { value: "50 Entries", label: "Option" },
  { value: "100 Entries", label: "Option" },
];

const RemitterRegistrationWindow = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);
  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Remitter Registration
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
          <p className="fontSize12">Remitter Registration</p>
        </div>
      </div>
      {/* main */}
      <div className="tableBorderBox mb-24 ">
        <div className="remitterBox">
          {/* first Box */}
          <div className="w-100">
            <div className="configSelectBoxTop configSelectBoxTop2 RemitterRegistrationgrid mb-0 row  row-cols-auto">
              {/*RemitterName */}
              <div className="clientNameSelect col">
                <label htmlFor="name">RemitterName </label>
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
              <div className="e-kycPara">
                <p className="remitterText-1">
                  Note : You can complete e-KYC to become a full verified KYC
                  Customer so the customer will get the following benefits.
                </p>
                <p className="remitterText-1">
                  1. Daily amount of fund Transfer gets upgraded from 5000 to
                  49.750
                </p>
                <p className="remitterText-1">
                  2. Monthly amount of fund transfer gets upgraded from 50,000
                  to 2,00,000
                </p>
              </div>
            </div>
          </div>
          {/* vertical */}
          <div className="vertical-hr "></div>
          {/* Second Box */}
          <div className="w-100">
            <div className="configSelectBoxTop configSelectBoxTop2 RemitterRegistrationgrid mb-0 row  row-cols-auto">
              {/* Device Type */}
              <div className="clientNameSelect col">
                <label htmlFor="clientName">
                  Device Type<span>*</span>
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
                  <p className="text-danger font-size9">
                    Enter a correct input
                  </p>
                )}
              </div>
              {/* Adhar Number */}
              <div className="clientNameSelect col">
                <label htmlFor="IFSC">Adhar Number</label>
                <input
                  type="text"
                  name="AdharNumber"
                  id="AdharNumber"
                  placeholder="Enter Name"
                  className="inputTextBox"
                />
              </div>
              <div className="clientNameSelect col">
                <div className="fingerPrintBox">
                  <h5>Scan your fingerprints here</h5>
                  <img
                    className="fingerPrintSvg"
                    src={fingerPrintSvg}
                    alt="fingerPrint"
                  />
                  <button className="captureBtn">Capture</button>
                </div>
              </div>
            </div>
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
            Proceed
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
              Remitter Registration
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={Success} alt="Success" />
            <p className="letterSpacing-2 colorBlack">
              Remitter Added Successfully
            </p>
            <Link to="/beneficiary-registration">
              <button className="addBeneficiaryBtn">Add Beneficiary</button>
            </Link>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default RemitterRegistrationWindow;
