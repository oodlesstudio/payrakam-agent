import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";
import DeleteIcon from "../../images/common/deleteIcon.svg";
import TransferIcon from "../../images/common/transferIcon.svg";
// import Error from "../../images/common/error.svg";
// import Success from "../../images/common/success.svg";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const TransferMoneyWindow = () => {
  // const [showFilters, setShowFilters] = useState(false);

  // Select Error

  const [selectedOption, setSelectedOption] = useState(null);

  // Modals
  const [referenceNo, setReferenceNo] = useState(false);

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to pdf
    </Tooltip>
  );

  const renderTooltipExcel = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to excel
    </Tooltip>
  );

  const renderDeleteTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete
    </Tooltip>
  );
  const renderTransferTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Transfer Money
    </Tooltip>
  );
  return (
    <div>
      <div className="configLeft identificationContainer ticketCenterSection">
        <div>
          {/* Breadcrumb */}
          <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
            <h5 className="fontWeight-600 fileConfigHead colorBlack">
              Remitter Details
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
            </div>
          </div>

          {/* Search Criteria 2 */}
          <div
            className="searchCriteriaBox searchCriteriaBox2"
            id="CriteriaFilters"
          >
            <div className="remitter-Search">
              <div
                className="d-flex align-items-center"
                id="criteriaFiltersHeading"
              >
                {/* Search Field And Buttons */}
                <div className="remitter-SearchField full-width">
                  <div className="form-group has-search hasRemitter-Search full-width">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div className="d-flex align-items-center w-100 searchFieldsBtns">
                    <button
                      type="button"
                      className="btnPrimary ms-2 full-width "
                    >
                      Search
                    </button>
                    <button
                      type="button"
                      className="btnPrimaryOutline  ms-2 full-width"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              {/* Result Found */}
              <div className="mt-3">
                <div className="hrGreyLine"></div>
                <div className="tableBorderBox mt-3 px-0">
                  {/* Table */}
                  <div className="table-responsive tableContentBox">
                    <table className="table transfer-money table-striped table-hover table-borderless align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col" className="ps-0">
                            Remitter Name
                          </th>
                          <th scope="col">Mobile No</th>
                          <th scope="col">Monthly Limit</th>
                          <th scope="col">Daily Limit</th>
                          <th scope="col">Wallet Balance</th>
                          <th scope="col">KYC</th>
                          <th scope="col" className="Remitter-col-Width"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-0">Rajesh</td>
                          <td>9876543456</td>
                          <td>5000.00</td>
                          <td>2000.00</td>
                          <td>500</td>
                          <td>Verified</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Result Not Found */}
              <div className="mt-3">
                <span className="remitterText">Remitter details not found</span>
                <span>
                  <Link to="/remitter-registration">
                    Click here to Register this mobile number
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="configLeftBottom ticketCentreTableHeader">
            <div className="tableBorderBox">
              <div className="BeneficiaryHeader">
                <h5>Beneficiary Details</h5>
                <Link to="/beneficiary-registration">
                  <button
                    className="beneficiaryBtn"
                    // onClick={() => setPage("beneficiaryRegistration")}
                  >
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="7.20007"
                          y="2.40039"
                          width="1.6"
                          height="11.2"
                          rx="0.8"
                          fill="#003087"
                        />
                        <rect
                          x="2.40002"
                          y="7.20117"
                          width="11.2"
                          height="1.6"
                          rx="0.8"
                          fill="#003087"
                        />
                      </svg>
                    </span>
                    <span>Add Beneficiary</span>
                  </button>
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                <div className="clientNameSelect configFormatEntities">
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    isSearchable={false}
                    classNamePrefix="reactSelectBox"
                    placeholder="10 Entries"
                  />
                </div>
                <div className="d-flex">
                  <div className="form-group has-search">
                    <span className="icon-Search form-control-feedback"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>

                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <button type="button" className="iconButtonBox">
                      <img src={Pdf} alt="Pdf" />
                    </button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltipExcel}
                  >
                    <button type="button" className="iconButtonBox">
                      <img src={Excel} alt="Excel" />
                    </button>
                  </OverlayTrigger>
                </div>
              </div>

              {/* Table */}
              <div className="table-responsive tableContentBox">
                <table className="table transfer-money-2 table-striped table-hover table-borderless align-middle mb-0">
                  <thead>
                    <tr>
                      <th scope="col" className="p-0">
                        Beneficiary Name
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Name In Bank
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Contact No.
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Account Number
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        IFSC Code
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Status
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Action
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0">Rajesh Kumar</td>
                      <td>Rajesh</td>
                      <td>98456783456</td>
                      <td>98456783456</td>
                      <td>HDFC0003456</td>
                      <td>Verified</td>
                      <td>
                        <div>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderDeleteTooltip}
                          >
                            <button className="act-delete-Btn">
                              <img src={DeleteIcon} alt="DeleteIcon" />
                            </button>
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTransferTooltip}
                          >
                            <button className="act-transfer-Btn">
                              <img src={TransferIcon} alt="TransferIcon" />
                            </button>
                          </OverlayTrigger>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">Rajesh Kumar</td>
                      <td>Rajesh</td>
                      <td>98456783456</td>
                      <td>98456783456</td>
                      <td>HDFC0003456</td>
                      <td>Verified</td>
                      <td>
                        <div>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderDeleteTooltip}
                          >
                            <button className="act-delete-Btn">
                              <img src={DeleteIcon} alt="DeleteIcon" />
                            </button>
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTransferTooltip}
                          >
                            <button className="act-transfer-Btn">
                              <img src={TransferIcon} alt="TransferIcon" />
                            </button>
                          </OverlayTrigger>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">Rajesh Kumar</td>
                      <td>Rajesh</td>
                      <td>98456783456</td>
                      <td>98456783456</td>
                      <td>HDFC0003456</td>
                      <td>Verified</td>
                      <td>
                        <div>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderDeleteTooltip}
                          >
                            <button className="act-delete-Btn">
                              <img src={DeleteIcon} alt="DeleteIcon" />
                            </button>
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTransferTooltip}
                          >
                            <button className="act-transfer-Btn">
                              <img src={TransferIcon} alt="TransferIcon" />
                            </button>
                          </OverlayTrigger>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">Rajesh Kumar</td>
                      <td>Rajesh</td>
                      <td>98456783456</td>
                      <td>98456783456</td>
                      <td>HDFC0003456</td>
                      <td>Verified</td>
                      <td>
                        <div>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderDeleteTooltip}
                          >
                            <button className="act-delete-Btn">
                              <img src={DeleteIcon} alt="DeleteIcon" />
                            </button>
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTransferTooltip}
                          >
                            <button className="act-transfer-Btn">
                              <img src={TransferIcon} alt="TransferIcon" />
                            </button>
                          </OverlayTrigger>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">Rajesh Kumar</td>
                      <td>Rajesh</td>
                      <td>98456783456</td>
                      <td>98456783456</td>
                      <td>HDFC0003456</td>
                      <td>Verified</td>
                      <td>
                        <div>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderDeleteTooltip}
                          >
                            <button className="act-delete-Btn">
                              <img src={DeleteIcon} alt="DeleteIcon" />
                            </button>
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTransferTooltip}
                          >
                            <button className="act-transfer-Btn">
                              <img src={TransferIcon} alt="TransferIcon" />
                            </button>
                          </OverlayTrigger>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">Rajesh Kumar</td>
                      <td>Rajesh</td>
                      <td>98456783456</td>
                      <td>98456783456</td>
                      <td>HDFC0003456</td>
                      <td>Verified</td>
                      <td>
                        <div>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderDeleteTooltip}
                          >
                            <button className="act-delete-Btn">
                              <img src={DeleteIcon} alt="DeleteIcon" />
                            </button>
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTransferTooltip}
                          >
                            <button className="act-transfer-Btn">
                              <img src={TransferIcon} alt="TransferIcon" />
                            </button>
                          </OverlayTrigger>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">Rajesh Kumar</td>
                      <td>Rajesh</td>
                      <td>98456783456</td>
                      <td>98456783456</td>
                      <td>HDFC0003456</td>
                      <td>Verified</td>
                      <td>
                        <div>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderDeleteTooltip}
                          >
                            <button className="act-delete-Btn">
                              <img src={DeleteIcon} alt="DeleteIcon" />
                            </button>
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTransferTooltip}
                          >
                            <button className="act-transfer-Btn">
                              <img src={TransferIcon} alt="TransferIcon" />
                            </button>
                          </OverlayTrigger>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">Rajesh Kumar</td>
                      <td>Rajesh</td>
                      <td>98456783456</td>
                      <td>98456783456</td>
                      <td>HDFC0003456</td>
                      <td>Verified</td>
                      <td>
                        <div>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderDeleteTooltip}
                          >
                            <button className="act-delete-Btn">
                              <img src={DeleteIcon} alt="DeleteIcon" />
                            </button>
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTransferTooltip}
                          >
                            <button className="act-transfer-Btn">
                              <img src={TransferIcon} alt="TransferIcon" />
                            </button>
                          </OverlayTrigger>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">Rajesh Kumar</td>
                      <td>Rajesh</td>
                      <td>98456783456</td>
                      <td>98456783456</td>
                      <td>HDFC0003456</td>
                      <td>Verified</td>
                      <td>
                        <div>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderDeleteTooltip}
                          >
                            <button className="act-delete-Btn">
                              <img src={DeleteIcon} alt="DeleteIcon" />
                            </button>
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTransferTooltip}
                          >
                            <button className="act-transfer-Btn">
                              <img src={TransferIcon} alt="TransferIcon" />
                            </button>
                          </OverlayTrigger>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-0">Rajesh Kumar</td>
                      <td>Rajesh</td>
                      <td>98456783456</td>
                      <td>98456783456</td>
                      <td>HDFC0003456</td>
                      <td>Verified</td>
                      <td>
                        <div>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderDeleteTooltip}
                          >
                            <button className="act-delete-Btn">
                              <img src={DeleteIcon} alt="DeleteIcon" />
                            </button>
                          </OverlayTrigger>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTransferTooltip}
                          >
                            <button className="act-transfer-Btn">
                              <img src={TransferIcon} alt="TransferIcon" />
                            </button>
                          </OverlayTrigger>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="paginationBox d-flex align-items-center justify-content-between my-12">
                <div className="paginationLeft fontSize12">
                  Showing 1 to 10 of 49 entries
                </div>

                <div className="paginationRight">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <Link
                          className="page-link previousPagination"
                          to="/"
                          aria-label="Previous"
                        >
                          <span
                            className="icon-Dropdown-Arrow"
                            style={{ fontSize: "12px" }}
                          ></span>
                          <span>First</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link paginationBottom" to="/">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link paginationBottom" to="/">
                          2
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link paginationBottom" to="/">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link paginationBottom" to="/">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link paginationBottom" to="/">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link nextPagination"
                          to="/"
                          aria-label="Next"
                        >
                          <span>Last</span>
                          <span
                            className="icon-Dropdown-Arrow-1"
                            style={{ fontSize: "12px" }}
                          ></span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* Save Filters */}
            {referenceNo && (
              <Modal
                show={referenceNo}
                onHide={() => setReferenceNo(!referenceNo)}
                centered
                className="defaultThemeModal saveFiltersModal unmatchedTableModal"
              >
                <Modal.Header closeButton>
                  <Modal.Title className="fontSize16-sm letterSpacing-2">
                    Transaction ID Details
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      EJ Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7">
                            <em>No record(s) found...</em>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      SW Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SVCB0001</td>
                          <td>01/02/2022, 06:35:00 PM</td>
                          <td>459115XXXXXX5716</td>
                          <td>203218001138</td>
                          <td>6100.00</td>
                          <td>00</td>
                          <td>N</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      Network Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SVCB0001</td>
                          <td>01/02/2022, 06:35:00 PM</td>
                          <td>459115XXXXXX5716</td>
                          <td>203218001138</td>
                          <td>6100.00</td>
                          <td>00</td>
                          <td>N</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      GL Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7">
                            <em>No record(s) found...</em>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Modal.Body>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferMoneyWindow;
