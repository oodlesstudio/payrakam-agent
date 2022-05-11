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

// component
import ManualKycWindow from "./../manualKycRegistration/ManualKycWindow";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const AgentRegistrationWindow = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Page State
  const [page, setPage] = useState("agentRegistration");

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
      {page === "agentRegistration" && (
        <div>
          {/* Breadcrumb */}
          <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
            <h5 className="fontWeight-600 fileConfigHead colorBlack">
              Agent Registration
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
              <p className="fontSize12  colorPrimaryDefault">
                Agent Management
              </p>
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
              <p className="fontSize12">Agent Registration</p>
            </div>
          </div>

          {/* Top Content */}
          <div className="configLeftTop usmTop">
            <div className="accordion" id="unmatchedFilters">
              <div className="accordion-item">
                <div
                  className="d-flex align-items-center configLeftFilters accordion-header"
                  id="unmatchedFiltersHeading"
                >
                  {/* Add New */}
                  <button
                    className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center agentRegBtn"
                    type="button"
                    onClick={() => setPage("manualKycRegistration")}
                  >
                    <span class="">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="7.2"
                          y="2.3999"
                          width="1.6"
                          height="11.2"
                          rx="0.8"
                          fill="#003087"
                        />
                        <rect
                          x="2.4"
                          y="7.19995"
                          width="11.2"
                          height="1.6"
                          rx="0.8"
                          fill="#003087"
                        />
                      </svg>
                    </span>
                    <span className="ms-1 fontSize12-m colorPrimaryDefault">
                      Add New
                    </span>
                  </button>
                  {/* Bulk Import */}
                  <button
                    className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center agentRegBtn"
                    type="button"
                    onClick={() => setAttachment(!attachment)}
                  >
                    <span class="">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.356 6.07788C2.72547 6.23654 2.17459 6.61999 1.80684 7.15618C1.43909 7.69236 1.27979 8.34438 1.35887 8.98974C1.43795 9.63509 1.74998 10.2294 2.23631 10.6609C2.72265 11.0924 3.34982 11.3315 4 11.3332H4.66667M8 7.99988V13.9999V7.99988ZM8 7.99988L6.33333 9.33321L8 7.99988ZM8 7.99988L9.66667 9.33321L8 7.99988Z"
                          stroke="#003087"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.5533 4.75864C10.3255 3.85636 9.76306 3.07447 8.98009 2.57148C8.19712 2.06849 7.25218 1.88204 6.33684 2.04991C5.42149 2.21779 4.60423 2.72743 4.05071 3.47553C3.49719 4.22364 3.24884 5.15422 3.356 6.07864C3.356 6.07864 3.458 6.66664 3.66667 6.99997"
                          stroke="#003087"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.3333 11.3332C11.804 11.3328 12.2693 11.2328 12.6986 11.0397C13.1278 10.8466 13.5113 10.5648 13.8238 10.2128C14.1363 9.86082 14.3707 9.44664 14.5116 8.99752C14.6525 8.54841 14.6966 8.07455 14.6412 7.60713C14.5857 7.13972 14.4319 6.68935 14.1899 6.28566C13.9478 5.88198 13.623 5.53414 13.2368 5.26503C12.8506 4.99592 12.4119 4.81165 11.9493 4.72434C11.4868 4.63704 11.011 4.64868 10.5533 4.7585L9.66667 4.99984"
                          stroke="#003087"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="ms-1 fontSize12-m colorPrimaryDefault">
                      Bulk Import
                    </span>
                  </button>
                  {/* Bulk Import */}
                  <button
                    className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center agentRegBtn"
                    type="button"
                  >
                    <span class="">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_3505_13505)">
                          <path
                            d="M2.25 8C2.25 8 4.25 3.75 8.5 3.75C12.75 3.75 14.75 8 14.75 8C14.75 8 12.75 12.25 8.5 12.25C4.25 12.25 2.25 8 2.25 8Z"
                            stroke="#003087"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.5 9.25C9.19036 9.25 9.75 8.69036 9.75 8C9.75 7.30964 9.19036 6.75 8.5 6.75C7.80964 6.75 7.25 7.30964 7.25 8C7.25 8.69036 7.80964 9.25 8.5 9.25Z"
                            fill="#003087"
                            stroke="#003087"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3505_13505">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="ms-1 fontSize12-m colorPrimaryDefault">
                      View Audit Log
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="configLeftBottom">
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
                <table className="table table-initial-width table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">
                        Agent Name
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Address
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
                        Created On
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Stage
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Rajesh Kumar</td>
                      <td>Unitech Park Gurgaon 140021</td>
                      <td>98456783456</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>Default Stage</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Rajesh Kumar</td>
                      <td>Unitech Park Gurgaon 140021</td>
                      <td>98456783456</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>Default Stage</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Rajesh Kumar</td>
                      <td>Unitech Park Gurgaon 140021</td>
                      <td>98456783456</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>Default Stage</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Rajesh Kumar</td>
                      <td>Unitech Park Gurgaon 140021</td>
                      <td>98456783456</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>Default Stage</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Rajesh Kumar</td>
                      <td>Unitech Park Gurgaon 140021</td>
                      <td>98456783456</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>Default Stage</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Rajesh Kumar</td>
                      <td>Unitech Park Gurgaon 140021</td>
                      <td>98456783456</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>Default Stage</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Rajesh Kumar</td>
                      <td>Unitech Park Gurgaon 140021</td>
                      <td>98456783456</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>Default Stage</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Rajesh Kumar</td>
                      <td>Unitech Park Gurgaon 140021</td>
                      <td>98456783456</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>Default Stage</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Rajesh Kumar</td>
                      <td>Unitech Park Gurgaon 140021</td>
                      <td>98456783456</td>
                      <td>01/02/2022, 06:35:00 PM</td>
                      <td>Default Stage</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Rajesh Kumar</td>
                      <td>Unitech Park Gurgaon 140021</td>
                      <td>98456783456</td>
                      <td>01/02/2022, 06:35:00 PM</td>
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
                            Do you really want to delete this role? <br /> This
                            process cannot be undone.
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
                        <p className="text-center attachmentText2">
                          Browse File
                        </p>
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
      )}

      {page === "manualKycRegistration" && <ManualKycWindow />}
    </div>
  );
};

export default AgentRegistrationWindow;
