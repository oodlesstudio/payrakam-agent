import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

// css
import "./manualKyc.css";

// Images
import Error from "../../images/common/error.svg";
import Success from "../../images/common/success.svg";

const options = [
  { value: "option1", label: "option" },
  { value: "option2", label: "option" },
  { value: "option3", label: "option" },
  { value: "option4", label: "option" },
];

const ManualKycWindow = () => {
  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);

  // Gst State
  const [gst, setGst] = useState(false);

  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  const [franchise, setFranchise] = useState(false);
  const changeFranchise = () => setFranchise(true);

  const [serviceOffer, setServiceOffer] = useState(false);
  const changeServiceOffer = () => setServiceOffer(true);

  const [gender, setGender] = useState(false);
  const changeGender = () => setGender(true);

  const [category, setCategory] = useState(false);
  const changeCategory = () => setCategory(true);

  const [physically, setPhysically] = useState(false);
  const changePhysically = () => setPhysically(true);

  const [qualification, setQualification] = useState(false);
  const changeQualification = () => setQualification(true);

  const [course, setCourse] = useState(false);
  const changeCourse = () => setCourse(true);

  const [occupation, setOccupationType] = useState(false);
  const changeOccupation = () => setOccupationType(true);

  // form 2 - Select

  const [entityType, setEntityType] = useState(false);
  const changeEntityType = () => setEntityType(true);

  const [shopOpenTime, setShopOpenTime] = useState(false);
  const changeShopOpenTime = () => setShopOpenTime(true);

  const [shopCloseTime, setShopCloseTime] = useState(false);
  const changeShopCloseTime = () => setShopCloseTime(true);

  const [deviceName, setDeviceName] = useState(false);
  const changeDeviceName = () => setDeviceName(true);

  const [connectivityType, setConnectivityType] = useState(false);
  const changeConnectivityType = () => setConnectivityType(true);

  const [corporateType, setCorporateType] = useState(false);
  const changeCorporateType = () => setCorporateType(true);

  const [deviceType, setDeviceType] = useState(false);
  const changeDeviceType = () => setDeviceType(true);

  // folow- 3

  const [agentWallet, setAgentWallet] = useState(false);
  const changeAgentWallet = () => setAgentWallet(true);

  const [upiPartner, setUpiPartner] = useState(false);
  const changeUpiPartner = () => setUpiPartner(true);

  const [walletLoading, setWalletLoading] = useState(false);
  const changeWalletLoading = () => setWalletLoading(true);

  const [bcAgentType, setBcAgentType] = useState(false);
  const changeBcAgentType = () => setBcAgentType(true);

  const [parentFlag, setParentFlag] = useState(false);
  const changeParentFlag = () => setParentFlag(true);

  const [registrationType, setRegistrationType] = useState(false);
  const changeRegistrationType = () => setRegistrationType(true);

  const [commissionType, setCommissionType] = useState(false);
  const changeCommissionType = () => setCommissionType(true);

  // form 4

  const [country, setCountry] = useState(false);
  const changeCountry = () => setCountry(true);

  const [state, setState] = useState(false);
  const changeState = () => setState(true);

  const [city, setCity] = useState(false);
  const changeCity = () => setCity(true);

  // form 4 Extra fields form-1
  const [localCountry, setLocalCountry] = useState(false);
  const changeLocalCountry = () => setLocalCountry(true);

  const [localState, setLocalState] = useState(false);
  const changeLocalState = () => setLocalState(true);

  const [localCity, setLocalCity] = useState(false);
  const changeLocalCity = () => setLocalCity(true);

  // form 4 Extra fields form-1
  const [shopCountry, setShopCountry] = useState(false);
  const changeShopCountry = () => setShopCountry(true);

  const [shopState, setShopState] = useState(false);
  const changeShopState = () => setShopState(true);

  const [shopCity, setShopCity] = useState(false);
  const changeShopCity = () => setShopCity(true);

  // form extra field checkBox

  const [extrafield, setExtraField] = useState(true);

  function displayExtraFields() {
    setExtraField(!extrafield);
  }

  // flow bar

  const [flow, setFlow] = useState(1);

  function nextForm() {
    if (flow < 4) {
      setFlow((prevFlow) => prevFlow + 1);
    }
  }
  function prevForm() {
    if (flow > 0) {
      setFlow((prevFlow) => prevFlow - 1);
    }
  }

  //

  const [selectedOption, setSelectedOption] = useState(null);

  // Modals

  return (
    <div>
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Manual KYC Registration
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
          <p className="fontSize12  colorPrimaryDefault">Agent Management</p>
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
          <p className="fontSize12">Manual KYC Registration</p>
        </div>
      </div>

      {/* form steps */}
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="form-Steps">
          {/* Step 1 */}
          <div className="form-step active position-relative">
            <div className="formbar-type formbar">
              <svg
                className="flowcircleSvg flowcircle1Svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="12" height="12" rx="6" fill="#003087" />
              </svg>
              <p className="formFlow-text-1 barText active text-nowrap">
                Personal Information
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div
            className={
              flow > 1
                ? "form-step active position-relative w-100"
                : "form-step  position-relative w-100"
            }
          >
            <div className="formbar-type-2 formbar">
              <svg
                className="flowcircleSvg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="12" height="12" rx="6" fill="#D5D9E0" />
              </svg>
              <p className="formFlow-text barText">ID & Shop Details</p>
            </div>
          </div>
          {/* Step 3 */}
          <div
            className={
              flow > 2
                ? "form-step active position-relative w-100"
                : "form-step  position-relative w-100"
            }
          >
            <div className="formbar-type-2 formbar">
              <svg
                className="flowcircleSvg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="12" height="12" rx="6" fill="#D5D9E0" />
              </svg>
              <p className="formFlow-text barText">Account Details</p>
            </div>
          </div>
          {/* Step 4 */}
          <div
            className={
              flow > 3
                ? "form-step active position-relative w-100"
                : "form-step  position-relative w-100"
            }
          >
            <div className="formbar-type-3 formbar">
              <svg
                className="flowcircleSvg flowcircle4Svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="12" height="12" rx="6" fill="#D5D9E0" />
              </svg>
              <p className="formFlow-text-2 barText">Communication</p>
            </div>
          </div>
        </div>
      </div>

      {/* form fields */}

      <div className="tableBorderBox mb-24 ">
        <div className={flow === 1 ? "formflow-1 formflow" : "d-none"}>
          <div className="configSelectBoxTop configSelectBoxTop2 mb-0  row">
            {/* CLient Name */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="clientName">
                Client <span>*</span>
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
            {/* Franchise */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="franchise">
                Franchise <span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setFranchise();
                  changeFranchise();
                }}
                options={options}
                id="franchise"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {franchise && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Services Offer */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="serviceOffer">
                Services Offer<span> *</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setServiceOffer();
                  changeServiceOffer();
                }}
                options={options}
                id="serviceOffer"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {serviceOffer && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            <div className="clientNameSelect d-none d-lg-block col-lg-3">
              {/* Empty Field  */}
            </div>
            {/* First Name */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="firstName">
                First Name <span> *</span>{" "}
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter First Name"
                className="inputTextBox"
              />
            </div>
            {/* Middle Name*/}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="middleName">Middle Name</label>
              <input
                type="text"
                name="middleName"
                id="middleName"
                placeholder="Enter Middle Name"
                className="inputTextBox"
              />
            </div>
            {/* Last Name*/}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                Last Name <span> *</span>{" "}
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Last Name"
                className="inputTextBox"
              />
            </div>
            {/* Date of Birth*/}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="dob">
                Date of Birth<span> *</span>{" "}
              </label>
              <input
                type="text"
                name="dob"
                id="dob"
                placeholder="Enter DOB"
                className="inputTextBox"
              />
            </div>
            {/* Gender */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="gender">
                Gender <span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setGender();
                  changeGender();
                }}
                options={options}
                id="gender"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {gender && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Father Name  */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="fatherName">
                Father Name <span> *</span>
              </label>
              <input
                type="text"
                name="fatherName"
                id="fatherame"
                placeholder="Enter Father Name"
                className="inputTextBox"
              />
            </div>
            {/* Spouse Name  */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                Spouse Name<span> *</span>{" "}
              </label>
              <input
                type="text"
                name="spouseName"
                id="spouseName"
                placeholder="Enter Spouse Name"
                className="inputTextBox"
              />
            </div>
            {/* Category  */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="category">
                Category<span> *</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setCategory();
                  changeCategory();
                }}
                options={options}
                id="category"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {category && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Physically  */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="physically">
                Physically<span> *</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setPhysically();
                  changePhysically();
                }}
                options={options}
                id="physically"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {physically && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Highest Education Qualification  */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="qualification">
                Highest Education Qualification<span> *</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setQualification();
                  changeQualification();
                }}
                options={options}
                id="qualification"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {qualification && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Course  */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="qualification">
                Course<span> *</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setCourse();
                  changeCourse();
                }}
                options={options}
                id="course"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {course && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Institute Name */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                Institute Name <span> *</span>{" "}
              </label>
              <input
                type="text"
                name="instituteName "
                id="instituteName "
                placeholder="Enter Institute Name"
                className="inputTextBox"
              />
            </div>
            {/* Date of Passing */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                Date of Passing <span> *</span>{" "}
              </label>
              <input
                type="text"
                name="dateofPassing  "
                id="dateofPassing  "
                placeholder="Enter Date of Passing"
                className="inputTextBox"
              />
            </div>
            {/* Alternate Occupation Type */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="occupation">
                Alternate Occupation Type<span> *</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setOccupationType();
                  changeOccupation();
                }}
                options={options}
                id="occupation"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {occupation && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Alternate Occupation Description */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                Alternate Occupation Description <span> *</span>{" "}
              </label>
              <input
                type="text"
                name="alternateOccupationDescriptiong  "
                id="alternateOccupationDescription "
                placeholder="Enter Date of Passing"
                className="inputTextBox"
              />
            </div>
          </div>
        </div>
        <div className={flow === 2 ? "formflow-2 formflow" : "d-none"}>
          <div className="configSelectBoxTop configSelectBoxTop2 mb-0  row">
            {/* Company Name */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                Company Name<span> *</span>{" "}
              </label>
              <input
                type="text"
                name="companyName "
                id="companyName "
                placeholder="Enter Company Name"
                className="inputTextBox"
              />
            </div>
            {/* Personale Email ID */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                Personale Email ID<span> *</span>{" "}
              </label>
              <input
                type="text"
                name="personalEmail"
                id="personalEmail"
                placeholder="Enter Email ID"
                className="inputTextBox"
              />
            </div>
            {/* ID Card Type */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="idCardType">
                ID Card Type<span> *</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setFranchise();
                  changeFranchise();
                }}
                options={options}
                id="franchise"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {franchise && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* PAN No. */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="panNumber">
                PAN No.<span> *</span>{" "}
              </label>
              <input
                type="text"
                name="panNumber"
                id="panNumber"
                placeholder="Enter 10 digit PAN No."
                className="inputTextBox"
              />
            </div>
            {/* Adhar Card No. */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                Adhar Card No.<span> *</span>{" "}
              </label>
              <input
                type="text"
                name="adharCard"
                id="adharCard"
                placeholder="Enter Adhar Card No."
                className="inputTextBox"
              />
            </div>
            {/* Check if GST Registered */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <div className="d-flex align-items-end h-100">
                <div className="form-check gst-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onChange={() => {
                      setGst(!gst);
                    }}
                  />
                  <label
                    className="form-check-label mb-0"
                    htmlFor="flexCheckDefault"
                  >
                    Check if GST Registered
                  </label>
                </div>
              </div>
            </div>
            {/* GST No */}
            <div className=" col-sm-4 col-lg-3">
              {gst && (
                <div className="clientNameSelect">
                  <label htmlFor="lastName">GST No </label>
                  <input
                    type="text"
                    name="GSTNo"
                    id="GSTNo"
                    placeholder="Enter 15 digit GST No."
                    className="inputTextBox"
                  />
                </div>
              )}
            </div>
            {/* Empty Field */}
            <div className="clientNameSelect d-sm-4 col-lg-3 mb-0">
              {/* Empty Field */}
            </div>

            {/* Entity Type */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="idCardType">Entity Type</label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setEntityType();
                  changeEntityType();
                }}
                options={options}
                id="franchise"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {entityType && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Shop Opens At*/}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="showOpenType">Shop Opens At</label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setShopOpenTime();
                  changeShopOpenTime();
                }}
                options={options}
                id="shopOpen"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {shopOpenTime && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Shop Closes At*/}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="showCloseType">Shop Closes At</label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setShopCloseTime();
                  changeShopCloseTime();
                }}
                options={options}
                id="shopOpen"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {shopCloseTime && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Week Off */}

            <div className="clientNameSelect col-12">
              <label htmlFor="idCardType" className="mb-0">
                Weekly Off
              </label>
              <div className="row row-cols-auto row-week">
                <div className=" mt-2 col">
                  <div className="d-flex align-items-end h-100">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDay"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckDay"
                      >
                        None
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" mt-2 col">
                  <div className="d-flex align-items-end h-100">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDay1"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckDay1"
                      >
                        Sunday
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" mt-2 col">
                  <div className="d-flex align-items-end h-100">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDay2"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckDay2"
                      >
                        Monday
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" mt-2 col">
                  <div className="d-flex align-items-end h-100">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDay3"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckDay3"
                      >
                        Tuesday
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" mt-2 col">
                  <div className="d-flex align-items-end h-100">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDay4"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckDay4"
                      >
                        Wednesday
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" mt-2 col">
                  <div className="d-flex align-items-end h-100">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDay5"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckDay5"
                      >
                        Thursday
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" mt-2 col">
                  <div className="d-flex align-items-end h-100">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDay6"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckDay6"
                      >
                        Friday
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" mt-2 col">
                  <div className="d-flex align-items-end h-100">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDay7"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckDay7"
                      >
                        Saturday
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Device Name  */}
            <div className="clientNameSelect col-lg-3 col-sm-3">
              <label htmlFor="deviceName">Device Name</label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setDeviceName();
                  changeDeviceName();
                }}
                options={options}
                id="deviceName"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {deviceName && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Connectivity Type */}
            <div className="clientNameSelect col-lg-3 col-sm-3">
              <label htmlFor="connectivityType">Connectivity Type</label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setConnectivityType();
                  changeConnectivityType();
                }}
                options={options}
                id="connectivityType"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {connectivityType && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Bank Reference Number*/}
            <div className="clientNameSelect col-lg-3 col-sm-3">
              <label htmlFor="lastName">Bank Reference Number</label>
              <input
                type="text"
                name="bankRefNo"
                id="bankRefNo"
                placeholder="Enter Reference Number"
                className="inputTextBox"
              />
            </div>
            {/* Corporate/ Individual BC*/}
            <div className="clientNameSelect col-lg-3 col-sm-3">
              <label htmlFor="corporateType">Corporate/ Individual BC</label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setCorporateType();
                  changeCorporateType();
                }}
                options={options}
                id="shopOpen"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {corporateType && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Provider*/}
            <div className="clientNameSelect col-lg-3 col-sm-3">
              <label htmlFor="lastName">Provider</label>
              <input
                type="text"
                name="provider"
                id="provider"
                placeholder="Enter Provider"
                className="inputTextBox"
              />
            </div>
            {/* Device Name */}
            <div className="clientNameSelect col-lg-3 col-sm-3">
              <label htmlFor="deviceType">Device Name</label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setDeviceType();
                  changeDeviceType();
                }}
                options={options}
                id="deviceName"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {deviceType && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Device ID */}
            <div className="clientNameSelect col-lg-3 col-sm-3">
              <label htmlFor="DeviceID">Device ID</label>
              <input
                type="text"
                name="DeviceID"
                id="DeviceID"
                placeholder="Enter Device ID"
                className="inputTextBox"
              />
            </div>
            {/* Device IMEI No */}
            <div className="clientNameSelect col-lg-3 col-sm-3">
              <label htmlFor="DeviceID">
                Device IMEI No<span> *</span>{" "}
              </label>
              <input
                type="text"
                name="DeviceImeiNo"
                id="DeviceImeiNo"
                placeholder="Enter Device IMEI No"
                className="inputTextBox"
              />
            </div>
            {/* Indusken ID */}
            <div className="clientNameSelect col-lg-3 col-sm-3">
              <label htmlFor="Indusken">Indusken ID</label>
              <input
                type="text"
                name="InduskenNo"
                id="InduskenNo"
                placeholder="Enter Indusken ID"
                className="inputTextBox"
              />
            </div>
            {/* Empty Field */}
            <div className="clientNameSelect col-lg-3 d-sm-none d-md-block">
              {/*  */}
            </div>
            <div></div>
            {/*  */}
          </div>
        </div>
        {/* flow-3 */}
        <div className={flow === 3 ? "formflow-3 formflow" : "d-none"}>
          <div className="configSelectBoxTop configSelectBoxTop2 mb-0  row">
            {/* Account Number */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                Account Number<span> *</span>
              </label>
              <input
                type="text"
                name="accountNumber "
                id="accountName "
                placeholder="Enter Account Number"
                className="inputTextBox"
              />
            </div>
            {/* IFSC Code */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                IFSC Code<span> *</span>
              </label>
              <input
                type="text"
                name="IFSCCode"
                id="IFSCCode"
                placeholder="Enter IFSC Code"
                className="inputTextBox"
              />
            </div>
            {/* No. of Transactions Per Day */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                No. of Transactions Per Day<span> *</span>
              </label>
              <input
                type="text"
                name="TransactionsPerDay"
                id="TransactionsPerDay"
                placeholder="Enter Transactions/day"
                className="inputTextBox"
              />
            </div>
            {/* Transfer Amount Per day */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                Transfer Amount Per day<span> *</span>
              </label>
              <input
                type="text"
                name="TransfersPerDay"
                id="TransfersPerDay"
                placeholder="Enter Transactions/day"
                className="inputTextBox"
              />
            </div>
            {/* Agent Wallet Transfer */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="agentWallet">
                Agent Wallet Transfer<span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setAgentWallet();
                  changeAgentWallet();
                }}
                options={options}
                id="agentWallet"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {agentWallet && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Agent Account Name */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="lastName">
                Agent Account Name<span> *</span>
              </label>
              <input
                type="text"
                name="AgentAccountName"
                id="AgentAccountName"
                placeholder="Enter Agent Account Name"
                className="inputTextBox"
              />
            </div>
            {/* Is UPI Partner */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="upiPartner">
                Is UPI Partner<span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setUpiPartner();
                  changeUpiPartner();
                }}
                options={options}
                id="upiPartner"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {upiPartner && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Wallet Loading/Withdrawal */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="Wallet Loading">
                Wallet Loading/Withdrawal<span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setWalletLoading();
                  changeWalletLoading();
                }}
                options={options}
                id="Walletloading"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {walletLoading && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>

            {/* Empty Field */}
            <div className="clientNameSelect col-sm-4 d-lg-none">
              {/* not in use */}
            </div>

            {/* BC Agent Type */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="bcAgentType">
                BC Agent Type<span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setBcAgentType();
                  changeBcAgentType();
                }}
                options={options}
                id="agentWallet"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {bcAgentType && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* parentFlag */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="parentFlag">
                parentFlag<span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setParentFlag();
                  changeParentFlag();
                }}
                options={options}
                id="parentFlag"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {parentFlag && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>

            {/* Parent Agent ID  */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="ParentAgentID ">
                Parent Agent ID <span> *</span>
              </label>
              <input
                type="text"
                name="ParentAgentID"
                id="ParentAgentID"
                placeholder="Enter Parent Agent ID"
                className="inputTextBox"
              />
            </div>

            {/* Registration Type  */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="RegistrationType">
                Registration Type<span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setRegistrationType();
                  changeRegistrationType();
                }}
                options={options}
                id="RegistrationType"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {registrationType && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>

            {/* Type of Commission  */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="commissionType">
                Type of Commission<span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setCommissionType();
                  changeCommissionType();
                }}
                options={options}
                id="agentWallet"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {commissionType && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            {/* Threshold Amount  */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="ThresholdAmount ">
                Threshold Amount<span> *</span>
              </label>
              <input
                type="text"
                name="ThresholdAmount"
                id="ThresholdAmount"
                placeholder="Enter Threshold Amount"
                className="inputTextBox"
              />
            </div>
            {/* Alert Configuration */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="alertConfiguration ">
                Alert Configuration<span> *</span>
              </label>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <div className="d-flex align-items-end h-100">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckEmail"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckEmail"
                      >
                        Email
                      </label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="d-flex align-items-end h-100">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckSms"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckSms"
                      >
                        SMS
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Configuration Category */}
            <div className="clientNameSelect col-sm-4 col-lg-3">
              <label htmlFor="alertConfiguration ">
                Configuration Category<span> *</span>
              </label>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <div className="d-flex align-items-end h-100">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckUnlimited"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckUnlimited"
                      >
                        Unlimited
                      </label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="d-flex align-items-end h-100">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckLimited"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckLimited"
                      >
                        Limited
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={flow === 4 ? "formflow-4 formflow" : "d-none"}>
          <div className="configSelectBoxTop configSelectBoxTop2 mb-0 row">
            {/* to add TextArea */}
            <div className="clientNameSelect col-12 d-flex flex-column">
              <label htmlFor="Area">
                Registered Address<span> *</span>
              </label>
              <textarea
                className="textAreaBox"
                placeholder="Enter Registered Address"
                id="RegisterAddress"
                rows={3}
              ></textarea>
            </div>

            <div className="clientNameSelect col-sm-3">
              <label htmlFor="Area">
                Area<span> *</span>
              </label>
              <input
                type="text"
                name="Area"
                id="Area"
                placeholder="Enter Area"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col-sm-3">
              <label htmlFor="Country">
                Country<span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setCountry();
                  changeCountry();
                }}
                options={options}
                id="Country"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {country && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>

            <div className="clientNameSelect col-sm-3">
              <label htmlFor="State">
                State<span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setState();
                  changeState();
                }}
                options={options}
                id="State"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {state && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>

            <div className="clientNameSelect col-sm-3">
              <label htmlFor="State">
                District<span> *</span>
              </label>
              <input
                type="text"
                name="District"
                id="District"
                placeholder="Enter District"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col-sm-3">
              <label htmlFor="CityName">
                City<span>*</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setCity();
                  changeCity();
                }}
                options={options}
                id="CityName"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {city && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>

            <div className="clientNameSelect col-sm-3">
              <label htmlFor="Pincode">
                Pincode<span> *</span>
              </label>
              <input
                type="text"
                name="Pincode"
                id="Pincode"
                placeholder="Enter Pincode"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col-sm-3">
              <label htmlFor="businessEmailID">
                Business Email ID<span> *</span>
              </label>
              <input
                type="text"
                name="Pincode"
                id="Pincode"
                placeholder="Enter Business Email"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col-sm-3">
              <label htmlFor="contactNo">
                Contact No.<span> *</span>
              </label>
              <input
                type="text"
                name="contactNo"
                id="contactNo"
                placeholder="Enter Contact No"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col-sm-3">
              <label htmlFor="landlineNo">
                Landline No.<span> *</span>
              </label>
              <input
                type="text"
                name="landlineNo"
                id="landlineNo"
                placeholder="Enter Landline No"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col-sm-3">
              <label htmlFor="alternateNo">
                Alternate No.<span> *</span>
              </label>
              <input
                type="text"
                name="alternateNo"
                id="alternateNo"
                placeholder="Enter Landline No"
                className="inputTextBox"
              />
            </div>
          </div>

          <div className="hrGreyLine extra-form-hr  my-4"></div>

          <div className="configSelectBoxTop configSelectBoxTop2 row mt-0 xtraFormBottomMargin">
            <div className="clientNameSelect col-12 xtraFormBottomMargin">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="localShopAddress"
                  onChange={displayExtraFields}
                />
                <label
                  className="form-check-label mb-0"
                  htmlFor="localShopAddress"
                >
                  Local and shop address same as registered address
                </label>
              </div>
            </div>
          </div>

          <section
            className={extrafield ? "formExtraField active" : "formExtraField"}
          >
            {/* extra form 1 */}
            <div className="configSelectBoxTop configSelectBoxTop2 row mb-0">
              {/* to add TextArea */}
              <div className="clientNameSelect col-12 d-flex flex-column">
                <label htmlFor="Area">
                  Local Address<span> *</span>
                </label>
                <textarea
                  className="textAreaBox"
                  placeholder="Enter Local Address"
                  id="RegisterAddress"
                  rows={3}
                ></textarea>
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="LocalArea">
                  Local Area<span> *</span>
                </label>
                <input
                  type="text"
                  name="LocalArea"
                  id="LocalArea"
                  placeholder="Enter Area"
                  className="inputTextBox"
                />
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="LocalCountry">
                  Local Country<span>*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => {
                    setLocalCountry();
                    changeLocalCountry();
                  }}
                  options={options}
                  id="LocalCountry"
                  classNamePrefix="reactSelectBox"
                  placeholder="Select"
                />
                {localCountry && (
                  <p className="text-danger font-size9">
                    Enter a correct input
                  </p>
                )}
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="LocalState">
                  Local State<span>*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => {
                    setLocalState();
                    changeLocalState();
                  }}
                  options={options}
                  id="LocalState"
                  classNamePrefix="reactSelectBox"
                  placeholder="Select"
                />
                {localState && (
                  <p className="text-danger font-size9">
                    Enter a correct input
                  </p>
                )}
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="State">
                  Local District<span> *</span>
                </label>
                <input
                  type="text"
                  name="LocalDistrict"
                  id="LocalDistrict"
                  placeholder="Enter District"
                  className="inputTextBox"
                />
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="LocalCityName">
                  Local City<span>*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => {
                    setLocalCity();
                    changeLocalCity();
                  }}
                  options={options}
                  id="LocalCityName"
                  classNamePrefix="reactSelectBox"
                  placeholder="Select"
                />
                {localCity && (
                  <p className="text-danger font-size9">
                    Enter a correct input
                  </p>
                )}
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="Pincode">
                  Pincode<span> *</span>
                </label>
                <input
                  type="text"
                  name="Pincode"
                  id="Pincode"
                  placeholder="Enter Pincode"
                  className="inputTextBox"
                />
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="businessEmailID">
                  Business Email ID<span> *</span>
                </label>
                <input
                  type="text"
                  name="Pincode"
                  id="Pincode"
                  placeholder="Enter Business Email"
                  className="inputTextBox"
                />
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="contactNo">
                  Contact No.<span> *</span>
                </label>
                <input
                  type="text"
                  name="contactNo"
                  id="contactNo"
                  placeholder="Enter Contact No"
                  className="inputTextBox"
                />
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="landlineNo">
                  Landline No.<span> *</span>
                </label>
                <input
                  type="text"
                  name="landlineNo"
                  id="landlineNo"
                  placeholder="Enter Landline No"
                  className="inputTextBox"
                />
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="alternateNo">
                  Alternate No.<span> *</span>
                </label>
                <input
                  type="text"
                  name="alternateNo"
                  id="alternateNo"
                  placeholder="Enter Landline No"
                  className="inputTextBox"
                />
              </div>
            </div>

            {/* extra form 2 */}
            <div className="hrGreyLine my-4 extra-form-hr "></div>

            <div className="configSelectBoxTop configSelectBoxTop2 row">
              {/* to add TextArea */}
              <div className="clientNameSelect col-12 d-flex flex-column">
                <label htmlFor="Area">
                  Shop Address<span> *</span>
                </label>
                <textarea
                  className="textAreaBox"
                  placeholder="Enter Local Address"
                  id="ShopAddress"
                  rows={3}
                ></textarea>
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="ShopCountry">
                  Shop Country<span>*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => {
                    setShopCountry();
                    changeShopCountry();
                  }}
                  options={options}
                  id="LocalCountry"
                  classNamePrefix="reactSelectBox"
                  placeholder="Select"
                />
                {shopCountry && (
                  <p className="text-danger font-size9">
                    Enter a correct input
                  </p>
                )}
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="ShopArea">
                  Shop Area<span> *</span>
                </label>
                <input
                  type="text"
                  name="ShopArea"
                  id="ShopArea"
                  placeholder="Enter Landline No"
                  className="inputTextBox"
                />
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="ShopState">
                  Shop State<span>*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => {
                    setShopState();
                    changeShopState();
                  }}
                  options={options}
                  id="LocalCountry"
                  classNamePrefix="reactSelectBox"
                  placeholder="Select"
                />
                {shopState && (
                  <p className="text-danger font-size9">
                    Enter a correct input
                  </p>
                )}
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="ShopDistrict">
                  Shop District<span> *</span>
                </label>
                <input
                  type="text"
                  name="ShopDistrict"
                  id="ShopDistrict"
                  placeholder="Enter District"
                  className="inputTextBox"
                />
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="LocalCityName">
                  Shop City<span>*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => {
                    setShopCity();
                    changeShopCity();
                  }}
                  options={options}
                  id="LocalCityName"
                  classNamePrefix="reactSelectBox"
                  placeholder="Select"
                />
                {shopCity && (
                  <p className="text-danger font-size9">
                    Enter a correct input
                  </p>
                )}
              </div>

              <div className="clientNameSelect col-sm-3">
                <label htmlFor="Pincode2">
                  Pincode<span> *</span>
                </label>
                <input
                  type="text"
                  name="Pincode2"
                  id="Pincode2"
                  placeholder="Enter Pincode"
                  className="inputTextBox"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Stage Btn */}
        <div className="text-center btnsBtm mt-0 btnsBtmMobile ">
          <button
            type="button"
            className="btnPrimaryOutline"
            onClick={() => setResetFilters(!resetFilters)}
          >
            Cancel
          </button>
          <button
            type="button"
            className={flow > 1 ? "btnPrimaryOutline ms-2" : "d-none"}
            onClick={prevForm}
          >
            Previous
          </button>
          {/* Save and next */}
          <button
            type="button"
            className={flow < 4 ? "btnPrimary btnMobile ms-2" : "d-none"}
            onClick={nextForm}
          >
            Save & Next
          </button>

          {/* submit */}
          <button
            type="button"
            className={flow === 4 ? "btnPrimary ms-2" : "d-none"}
            onClick={() => setSaveFilters(!saveFilters)}
          >
            Submit
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
              Manual KYC Registration
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
              Manual KYC Registration
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

export default ManualKycWindow;
