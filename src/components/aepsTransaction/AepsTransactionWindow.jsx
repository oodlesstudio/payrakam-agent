import React, { useState } from "react";
import Select from "react-select";
import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";
import Error from "../../images/common/error.svg";
import Success from "../../images/common/success.svg";
import excelImg from "../../images/common/excel.svg";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const AepsTransactionWindow = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  // Change Select

  // Modals
  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);

  const [attachment, setAttachment] = useState(false);

  const [attachmentUpload, setAttachmentUpload] = useState(false);

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

  function uploadData() {
    setAttachmentUpload(true);
  }
  function removeUpload() {
    setAttachmentUpload(false);
  }

  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          AEPS Transactions
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
          <p className="fontSize12  colorPrimaryDefault">AEPS Transactions</p>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="configLeftBottom mt-0">
        <div className="row gx-0">
          <div className="col-lg-5 col-sm-12  borderBoxSideway">
            <div className="tableBorderBox tableBorderBox-2">
              {/* Heading */}
              <div className="aepsHeading">AEPS - Balance Enquiry</div>
              <div className="aepsBox aepsTabBox">
                <div className="configSelectBoxTop configSelectBoxTop2 mt-3 mb-0  row">
                  <div className="clientNameSelect col-12">
                    <label htmlFor="dob">Transaction Type</label>
                    <div className="row row-cols-auto row-transaction ">
                      <div className=" mt-2 col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Balance Enquiry
                          </label>
                        </div>
                      </div>
                      <div className=" mt-2 col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Cash Withdrawal
                          </label>
                        </div>
                      </div>
                      <div className=" mt-2 col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault3"
                          >
                            Mini Statement
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clientNameSelect col-12">
                    <label htmlFor="dob">Source Type</label>
                    <div className="row row-cols-auto row-transaction ">
                      <div className=" mt-2 col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="SourceType"
                            id="flexRadioDefault4"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault4"
                          >
                            Aadhar Number
                          </label>
                        </div>
                      </div>
                      <div className=" mt-2 col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="SourceType"
                            id="flexRadioDefault5"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault5"
                          >
                            Virtual ID
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clientNameSelect col-12">
                    <label htmlFor="dob">
                      Aadhar Number<span> *</span>{" "}
                    </label>
                    <input
                      type="text"
                      name="Aadhar"
                      id="Aadhar"
                      placeholder="Enter Aadhar Number"
                      className="inputTextBox"
                    />
                  </div>
                  <div className="clientNameSelect col-12">
                    <label htmlFor="dob">
                      Customer Name<span> *</span>{" "}
                    </label>
                    <input
                      type="text"
                      name="Aadhar"
                      id="Aadhar"
                      placeholder="Enter Customer Name"
                      className="inputTextBox"
                    />
                  </div>
                  <div className="clientNameSelect col-12">
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
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                </div>
                <div className="clientNameSelect col-12">
                  <div className="d-flex align-items-end h-100 apesAgreeCheck">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="flexCheckDefault"
                      >
                        I accept Terms and Conditions
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center aepsBalanceEnquiryBtns">
                  <button type="button" className="btnPrimaryOutline">
                    Reset
                  </button>
                  <button type="button" className="btnPrimary ms-2">
                    Sumbit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12  aepsRecentTransactionBox">
            <div className="tableBorderBox tableBorderBox-2">
              {/* Heading */}
              <div className="aepsHeading">Recent Transactions</div>
              <div className="aepsBox">
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
                <div className="table-responsive tableContentBox aepsTableContentBox">
                  <table className="table table-initial-width aeps-table table-striped table-hover table-borderless align-middle">
                    <thead>
                      <tr>
                        <th scope="col">
                          Txn Date
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
                          Amount
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
                          Txn Status
                          <Link to="/">
                            <span className="icon-Sort-icon"></span>
                          </Link>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01/02/2022, 06:35:00 PM</td>
                        <td>Balance Enquiry</td>
                        <td>0.00</td>
                        <td>237894567823</td>
                        <td>Default Stage</td>
                      </tr>
                      <tr>
                        <td>01/02/2022, 06:35:00 PM</td>
                        <td>Balance Enquiry</td>
                        <td>0.00</td>
                        <td>237894567823</td>
                        <td>Default Stage</td>
                      </tr>
                      <tr>
                        <td>01/02/2022, 06:35:00 PM</td>
                        <td>Balance Enquiry</td>
                        <td>0.00</td>
                        <td>237894567823</td>
                        <td>Default Stage</td>
                      </tr>
                      <tr>
                        <td>01/02/2022, 06:35:00 PM</td>
                        <td>Balance Enquiry</td>
                        <td>0.00</td>
                        <td>237894567823</td>
                        <td>Default Stage</td>
                      </tr>
                      <tr>
                        <td>01/02/2022, 06:35:00 PM</td>
                        <td>Balance Enquiry</td>
                        <td>0.00</td>
                        <td>237894567823</td>
                        <td>Default Stage</td>
                      </tr>
                      <tr>
                        <td>01/02/2022, 06:35:00 PM</td>
                        <td>Balance Enquiry</td>
                        <td>0.00</td>
                        <td>237894567823</td>
                        <td>Default Stage</td>
                      </tr>
                      <tr>
                        <td>01/02/2022, 06:35:00 PM</td>
                        <td>Balance Enquiry</td>
                        <td>0.00</td>
                        <td>237894567823</td>
                        <td>Default Stage</td>
                      </tr>
                      <tr>
                        <td>01/02/2022, 06:35:00 PM</td>
                        <td>Balance Enquiry</td>
                        <td>0.00</td>
                        <td>237894567823</td>
                        <td>Default Stage</td>
                      </tr>
                      <tr>
                        <td>01/02/2022, 06:35:00 PM</td>
                        <td>Balance Enquiry</td>
                        <td>0.00</td>
                        <td>237894567823</td>
                        <td>Default Stage</td>
                      </tr>
                      <tr>
                        <td>01/02/2022, 06:35:00 PM</td>
                        <td>Balance Enquiry</td>
                        <td>0.00</td>
                        <td>237894567823</td>
                        <td>Default Stage</td>
                      </tr>

                      {/* Delete Actions */}
                      {resetFilters && (
                        <Modal
                          show={resetFilters}
                          onHide={() => setResetFilters(!resetFilters)}
                          centered
                          className="defaultThemeModal saveFiltersModal errorFiltersModal modalWidthFix"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title className="fontSize16-sm letterSpacing-2">
                              Delete Role
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body className="text-center pb-0">
                            <img src={Error} alt="Success" />
                            <p className="letterSpacing-2 colorBlack">
                              Do you really want to delete this role? <br />{" "}
                              This process cannot be undone.
                            </p>
                            <div className="text-center btnsBtm cancelDeleteBtns">
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
                                onClick={() => {
                                  setResetFilters(!resetFilters);
                                  setSaveFilters(!saveFilters);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </Modal.Body>
                        </Modal>
                      )}

                      {/* Edit Actions */}
                      {saveFilters && (
                        <Modal
                          show={saveFilters}
                          onHide={() => setSaveFilters(!saveFilters)}
                          centered
                          className="defaultThemeModal saveFiltersModal modalWidthFix"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title className="fontSize16-sm letterSpacing-2">
                              Role Deleted
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body className="text-center">
                            <img src={Success} alt="Success" />
                            <p className="letterSpacing-2 colorBlack">
                              Switch operator deleted <br /> successfully
                            </p>
                          </Modal.Body>
                        </Modal>
                      )}
                    </tbody>
                  </table>
                </div>

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
                              class="icon-Breadcrumb-Arrow"
                              style={{
                                fontSize: "16px",
                                transform: "rotate(180deg)",
                              }}
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
                              class="icon-Breadcrumb-Arrow"
                              style={{ fontSize: "16px" }}
                            ></span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* attachment Request */}
      {attachment && (
        <Modal
          show={attachment}
          onHide={() => setAttachment(!attachment)}
          centered
          className="defaultThemeModal attachmentModal bulkAttachment unmatchedTableModal"
          id="attachmentModal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Bulk Import
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex align-items-center bulkAttachmentBox ">
              <div
                className={
                  attachmentUpload === true
                    ? "attachmentUploadBox active "
                    : "attachmentUploadBox"
                }
              >
                <div className="beforeAttachmentUpload">
                  <p className="text-center d-flex align-items-center justify-content-center attachmentText1">
                    <svg
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.25 4.66667C9.25 4.02208 9.72017 3.5 10.3 3.5H23.95C24.5298 3.5 25 4.02208 25 4.66667V23.3333C25 23.9779 24.5298 24.5 23.95 24.5H10.3C9.72017 24.5 9.25 23.9779 9.25 23.3333V19.8333H5.05C4.47017 19.8333 4 19.3112 4 18.6667V9.33333C4 8.68875 4.47017 8.16667 5.05 8.16667H9.25V4.66667ZM16.8333 8.16667V4.66667H10.4167V8.16667H16.8333ZM18 4.66667V8.16667H23.8333V4.66667H18ZM16.8333 9.33333H14.5V13.4167H16.8333V9.33333ZM18 13.4167V9.33333H23.8333V13.4167H18ZM16.8333 14.5833H14.5V18.6667H16.8333V14.5833ZM18 18.6667V14.5833H23.8333V18.6667H18ZM16.8333 19.8333H10.4167V23.3333H16.8333V19.8333ZM18 23.3333V19.8333H23.8333V23.3333H18ZM13.3333 9.33333V18.6667H5.05V9.33333H13.3333ZM7.0485 11.0833H8.30092L9.31767 13.2732L10.3916 11.0833H11.5617L9.95 14L11.5991 16.9167H10.3642L9.25642 14.6242L8.15392 16.9167H6.90092L8.57742 13.9895L7.0485 11.0833Z"
                        fill="#5C5C5C"
                      />
                    </svg>
                    Drop your file here
                  </p>
                  <span className="text-center attachmentText1">or</span>
                  <label htmlFor="attachmentInput">
                    <p className="text-center attachmentText2">Browse File</p>
                  </label>
                  <input
                    onChange={uploadData}
                    type="file"
                    id="attachmentInput"
                    className="d-none"
                  />
                </div>
                <div className="afterAttachmentUpload">
                  <div className="attachmentUploaded">
                    <div className="d-flex aligm-items-center">
                      <img src={excelImg} alt="" />
                      <p className="uploadedDataText ms-2">
                        Excelspreadsheet.xls
                      </p>
                    </div>
                    {/* remove  */}
                    <span type="button" onClick={removeUpload}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 4L12 12"
                          stroke="black"
                          stroke-width="1.8"
                          stroke-linecap="round"
                        />
                        <path
                          d="M12 4L4 12"
                          stroke="black"
                          stroke-width="1.8"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipExcel}
              >
                <button type="button" className="iconButtonBox ms-3">
                  <img src={Excel} alt="Excel" />
                </button>
              </OverlayTrigger>
            </div>

            <div className="d-flex justify-content-center bulkAttachmentBtn ">
              <button type="button" class="btnPrimaryOutline">
                Cancel
              </button>
              <button type="button" class="btnPrimary btnMobile ms-2">
                import
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default AepsTransactionWindow;
