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
// import Error from "../../images/common/error.svg";
// import Success from "../../images/common/success.svg";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const AllTransactionWindow = () => {
  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);

  // const [showFilters, setShowFilters] = useState(false);

  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  const [transactionType, setTransactionType] = useState(false);
  const changeTransactionType = () => setTransactionType(true);

  const [transactionStatus, setTransactionStatus] = useState(false);
  const changeTransactionStatus = () => setTransactionStatus(true);

  const [franchise, setFranchise] = useState(false);
  const changeFranchise = () => setFranchise(true);

  const [agent, setAgent] = useState(false);
  const changeAgent = () => setAgent(true);

  const [channel, setChannel] = useState(false);
  const changeChannel = () => setChannel(true);

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

  //   Date Calendar
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Transaction Report
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
          <p className="fontSize12  colorPrimaryDefault">Transaction Report</p>
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
          <p className="fontSize12">AllTransaction</p>
        </div>
      </div>

      {/* Search Criteria 2 */}
      <div
        className="accordion searchCriteriaBox searchCriteriaBox2"
        id="CriteriaFilters"
      >
        <div className="accordion-item">
          <div
            className="d-flex justify-content-between align-items-center configLeftFilters accordion-header"
            id="criteriaFiltersHeading"
          >
            <h6 className="fontWeight-600 colorBlack">Search Criteria</h6>

            <button
              className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#criteriaFiltersCollapse"
              aria-expanded="true"
              aria-controls="criteriaFiltersCollapse"
            >
              <span className="icon-Hide"></span>
              <span className="ms-1 fontSize12-m colorPrimaryDefault">
                Show / Hide
              </span>
            </button>
          </div>

          <div
            id="criteriaFiltersCollapse"
            className="accordion-collapse collapse show"
            aria-labelledby="criteriaFiltersHeading"
            data-bs-parent="#criteriaFilters"
          >
            <div className="accordion-body">
              <div className="hrGreyLine"></div>
              <div className="configSelectBoxTop configTopBlueBox row">
                <div className="clientNameSelect col col-Criteria">
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    type="text"
                    name="startDate"
                    id="startDate"
                    placeholder="18-02-2022"
                    className="inputTextBox"
                  />
                </div>

                <div className="clientNameSelect col col-Criteria">
                  <label htmlFor="endDate">End Date</label>
                  <input
                    type="text"
                    name="endDate"
                    id="endDate"
                    placeholder="18-02-2022"
                    className="inputTextBox"
                  />
                </div>

                <div className="clientNameSelect col col-Criteria">
                  <label htmlFor="clientName">Transaction Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setTransactionType();
                      changeTransactionType();
                    }}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="Dropdown"
                  />
                  {transactionType && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                <div className="clientNameSelect col col-Criteria">
                  <label htmlFor="clientName">Transaction Status</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setTransactionStatus();
                      changeTransactionStatus();
                    }}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="Dropdown"
                  />
                  {transactionStatus && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                <div className="clientNameSelect col col-Criteria">
                  <label htmlFor="clientName">Clients</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setClientName();
                      changeClientName();
                    }}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="All"
                  />
                  {clientName && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                <div className="clientNameSelect col col-Criteria">
                  <label htmlFor="clientName">Franchise</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setFranchise();
                      changeFranchise();
                    }}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="All"
                  />
                  {franchise && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                <div className="clientNameSelect col col-Criteria">
                  <label htmlFor="clientName">Agents </label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setAgent();
                      changeAgent();
                    }}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="All"
                  />
                  {agent && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                <div className="clientNameSelect col col-Criteria">
                  <label htmlFor="clientName">Channels</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setChannel();
                      changeChannel();
                    }}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="All"
                  />
                  {channel && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                <div className="clientNameSelect col col-Criteria">
                  <label htmlFor="endDate">RRN</label>
                  <input
                    type="text"
                    name="rRN"
                    id="rRN"
                    placeholder="034154869956"
                    className="inputTextBox"
                  />
                </div>

                <div className="clientNameSelect col col-Criteria">
                  <label htmlFor="partnerTransactionID">
                    Partner Transaction ID
                  </label>
                  <input
                    type="text"
                    name="partnerTransactionID"
                    id="partnerTransactionID"
                    placeholder="034154869956"
                    className="inputTextBox"
                  />
                </div>
              </div>
              <div className="text-center btnsBtm">
                <button
                  type="button"
                  className="btnPrimaryOutline"
                  onClick={() => setResetFilters(!resetFilters)}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="btnPrimary ms-2"
                  onClick={() => setSaveFilters(!saveFilters)}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="accordion" id="unmatchedFilters">
        <div className="accordion-item">
          <div
            className="d-flex justify-content-between align-items-center configLeftFilters accordion-header"
            id="unmatchedFiltersHeading"
          >
            <h6 className="fontWeight-600 colorBlack">Summary</h6>
            <button
              className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#unmatchedFiltersCollapse"
              aria-expanded="true"
              aria-controls="unmatchedFiltersCollapse"
            >
              <span className="icon-Hide"></span>
              <span className="ms-1 fontSize12-m colorPrimaryDefault">
                Show / Hide
              </span>
            </button>
          </div>
          <div
            id="unmatchedFiltersCollapse"
            className="accordion-collapse collapse show"
            aria-labelledby="unmatchedFiltersHeading"
            data-bs-parent="#unmatchedFilters"
          >
            <div className="accordion-body">
              <div className="summaryRow summaryRow2">
                <div className="summaryTableBox summaryTableBox2">
                  <p className="fontWeight-600 fontSize12">Total Transaction</p>
                  <table className="table table-borderless summaryContentLeft">
                    <thead>
                      <tr>
                        <th scope="col">Total</th>
                        <th scope="col">Success</th>
                        <th scope="col">Failed</th>
                        <th scope="col">Timeout</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="summaryRed">231</td>
                        <td className="summaryBlue">231</td>
                        <td className="summaryYellow">231</td>
                        <td>231</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="summaryTableBox summaryTableBox2">
                  <p className="fontWeight-600 fontSize12">Total Transaction</p>
                  <table className="table table-borderless summaryContentLeft">
                    <thead>
                      <tr>
                        <th scope="col">Total</th>
                        <th scope="col">Success</th>
                        <th scope="col">Failed</th>
                        <th scope="col">Timeout</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="summaryRed">231</td>
                        <td className="summaryBlue">231</td>
                        <td className="summaryYellow">231</td>
                        <td>231</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="summaryTableBox summaryTableBox2">
                  <p className="fontWeight-600 fontSize12">Total Transaction</p>
                  <table className="table table-borderless summaryContentLeft">
                    <thead>
                      <tr>
                        <th scope="col">Total</th>
                        <th scope="col">Success</th>
                        <th scope="col">Failed</th>
                        <th scope="col">Timeout</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="summaryRed">231</td>
                        <td className="summaryBlue">231</td>
                        <td className="summaryYellow">231</td>
                        <td>231</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="summaryTableBox summaryTableBox2">
                  <p className="fontWeight-600 fontSize12">Total Transaction</p>
                  <table className="table table-borderless summaryContentLeft">
                    <thead>
                      <tr>
                        <th scope="col">Total</th>
                        <th scope="col">Success</th>
                        <th scope="col">Failed</th>
                        <th scope="col">Timeout</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="summaryRed">231</td>
                        <td className="summaryBlue">231</td>
                        <td className="summaryYellow">231</td>
                        <td>231</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="summaryTableBox summaryTableBox2">
                  <p className="fontWeight-600 fontSize12">Total Transaction</p>
                  <table className="table table-borderless summaryContentLeft">
                    <thead>
                      <tr>
                        <th scope="col">Total</th>
                        <th scope="col">Success</th>
                        <th scope="col">Failed</th>
                        <th scope="col">Timeout</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="summaryRed">231</td>
                        <td className="summaryBlue">231</td>
                        <td className="summaryYellow">231</td>
                        <td>231</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="configLeftBottom ticketCentreTableHeader">
        <div className="tableBorderBox">
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
            <table className="table all-transaction table-striped table-hover table-borderless align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">
                    <div className="form-check d-flex align-items-center">
                      Channel
                      <Link to="/">
                        <span className="icon-Sort-icon"></span>
                      </Link>
                    </div>
                  </th>
                  <th scope="col">
                    Transaction Category
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Txn Type
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Txn Flag
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    RRN
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Partner Txn ID
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Txn Date
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
                    Service Charges
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Gross Amount
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      MAMT
                    </div>
                  </td>
                  <td>Non Financial</td>
                  <td>BalanceEnquiry</td>
                  <td>NA</td>
                  <td>2018452269826</td>
                  <td>2018452269826</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td>00.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      AEPS
                    </div>
                  </td>
                  <td>Financial</td>
                  <td>Withdrawl</td>
                  <td>Credit</td>
                  <td>2018452269826</td>
                  <td>2018452269826</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td>00.00</td>
                  <td>1000.00</td>
                  <td>00.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      DMT
                    </div>
                  </td>
                  <td>Non Financial</td>
                  <td>Fund Transfer</td>
                  <td>NA</td>
                  <td>2018452269826</td>
                  <td>2018452269826</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td>1000.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      MAMT
                    </div>
                  </td>
                  <td>Non Financial</td>
                  <td>BalanceEnquiry</td>
                  <td>NA</td>
                  <td>2018452269826</td>
                  <td>2018452269826</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td>00.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      AEPS
                    </div>
                  </td>
                  <td>Financial</td>
                  <td>Withdrawl</td>
                  <td>Credit</td>
                  <td>2018452269826</td>
                  <td>2018452269826</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td>00.00</td>
                  <td>1000.00</td>
                  <td>00.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      DMT
                    </div>
                  </td>
                  <td>Non Financial</td>
                  <td>Fund Transfer</td>
                  <td>NA</td>
                  <td>2018452269826</td>
                  <td>2018452269826</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td>1000.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      MAMT
                    </div>
                  </td>
                  <td>Non Financial</td>
                  <td>BalanceEnquiry</td>
                  <td>NA</td>
                  <td>2018452269826</td>
                  <td>2018452269826</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td>00.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      AEPS
                    </div>
                  </td>
                  <td>Financial</td>
                  <td>Withdrawl</td>
                  <td>Credit</td>
                  <td>2018452269826</td>
                  <td>2018452269826</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td>00.00</td>
                  <td>1000.00</td>
                  <td>00.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      DMT
                    </div>
                  </td>
                  <td>Non Financial</td>
                  <td>Fund Transfer</td>
                  <td>NA</td>
                  <td>2018452269826</td>
                  <td>2018452269826</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td>1000.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      MAMT
                    </div>
                  </td>
                  <td>Non Financial</td>
                  <td>BalanceEnquiry</td>
                  <td>NA</td>
                  <td>2018452269826</td>
                  <td>2018452269826</td>
                  <td>01/02/2022, 06:35:00 PM</td>
                  <td>00.00</td>
                  <td>00.00</td>
                  <td>00.00</td>
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
  );
};

export default AllTransactionWindow;
