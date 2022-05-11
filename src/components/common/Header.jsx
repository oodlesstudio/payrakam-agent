import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import {
  OverlayTrigger,
  Tooltip,
  Popover,
  Button,
  Modal,
  Offcanvas,
} from "react-bootstrap";

// Components
import SideBar from "./SideBar";
import { changeThemes } from "../../constants/actions/themeChangeAction";

// Images
import Logo from "../../images/common/logo.svg";
import LogoRight from "../../images/common/logoRight.svg";
import LogoDark from "../../images/common/logoDark.svg";
import LogoDarkRight from "../../images/common/logoDarkRight.svg";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Header = () => {
  // Select Menu
  const [selectedOption, setSelectedOption] = useState(null);

  // Left Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Version 6.0.0
    </Tooltip>
  );

  // SideBar Menu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Change Theme Modals
  const [siteConfiguration, setSiteConfiguration] = useState(false);
  const [openDefaultModal, setOpenDefaultModal] = useState(false);
  const [openLightModal, setOpenLightModal] = useState(false);
  const [openDarkModal, setOpenDarkModal] = useState(false);

  // Change Logo
  const changeTheme = useSelector((state) => {
    return state.themeChangeReducer;
  });

  const [logoLeft, setLogoLeft] = useState(Logo);
  const [logoRight, setLogoRight] = useState(LogoRight);

  useEffect(() => {
    if (changeTheme.theme === "default") {
      setLogoLeft(Logo);
      setLogoRight(LogoRight);
    } else if (changeTheme.theme === "light") {
      setLogoLeft(Logo);
      setLogoRight(LogoRight);
    } else if (changeTheme.theme === "dark") {
      setLogoLeft(LogoDark);
      setLogoRight(LogoDarkRight);
    }
  }, [changeTheme]);

  // Change Theme
  const dispatch = useDispatch();
  const changeThemeDefault = () => {
    dispatch(changeThemes("default"));
  };
  const changeThemeLight = () => {
    dispatch(changeThemes("light"));
  };
  const changeThemeDark = () => {
    dispatch(changeThemes("dark"));
  };

  // Settings Popover
  const popover = (
    <Popover id="popover-basic" className="headerSettingsPopover">
      <Popover.Body>
        <ul>
          <li>
            <button
              className="fontSize14"
              onClick={() => {
                setSiteConfiguration(!siteConfiguration);
                document.body.click();
              }}
            >
              Site Configuration
            </button>
          </li>
          <li className={changeTheme.theme === "default" ? "active" : ""}>
            <button
              className="fontSize14"
              onClick={() => {
                setOpenDefaultModal(!openDefaultModal);
                document.body.click();
              }}
            >
              Default Theme
            </button>
          </li>
          <li className={changeTheme.theme === "light" ? "active" : ""}>
            <button
              className="fontSize14"
              onClick={() => {
                setOpenLightModal(!openLightModal);
                document.body.click();
              }}
            >
              Light Theme
            </button>
          </li>
          <li className={changeTheme.theme === "dark" ? "active" : ""}>
            <button
              className="fontSize14"
              style={{ border: "none" }}
              onClick={() => {
                setOpenDarkModal(!openDarkModal);
                document.body.click();
              }}
            >
              Dark Theme
            </button>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const userPopover = (
    <Popover id="popover-basic" className="headerSettingsPopover">
      <Popover.Body>
        <ul>
          <li>
            <button className="fontSize14">My Profile</button>
          </li>
          <li className={changeTheme.theme === "default" ? "active" : ""}>
            <button className="fontSize14">Change Password</button>
          </li>
          <li className={changeTheme.theme === "light" ? "active" : ""}>
            <button className="fontSize14">Logout</button>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="headerBox w-100 d-flex align-items-center">
      {/* Header Left */}
      <div className="headerLeft d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <button className="headerHamburger" onClick={handleShow}>
            <span class="icon-Hamburger"></span>
          </button>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <img src={logoLeft} alt="Logo" />
          </OverlayTrigger>
        </div>
        <p className="fontSize14">
          Session Time: <span className="fontSize14-sb">59:12</span>
        </p>

        <Offcanvas show={show} onHide={handleClose} className="headerSideMenu">
          <Offcanvas.Body>
            <SideBar buttonCollapse={handleClose} />
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      {/* Header Right */}
      <div className="headerRight d-flex justify-content-end align-items-center">
        <div className="d-flex align-items-center">
          {/* Available Bal. */}
          <div className="d-flex align-items-center availBalance me-3">
            {/* ruppee svg */}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8499 7.675C19.0999 7.675 19.3082 7.75833 19.4749 7.925C19.6416 8.075 19.7249 8.275 19.7249 8.525C19.7249 8.775 19.6416 8.98333 19.4749 9.15C19.3082 9.3 19.0999 9.375 18.8499 9.375H17.0999C17.0166 10.6417 16.5749 11.675 15.7749 12.475C14.9749 13.275 13.9082 13.775 12.5749 13.975C12.9749 14.1083 13.3499 14.325 13.6999 14.625C14.0666 14.925 14.4499 15.3333 14.8499 15.85L17.7999 19.775C17.9999 20.0417 18.0999 20.3 18.0999 20.55C18.0999 20.85 17.9749 21.1167 17.7249 21.35C17.4749 21.5667 17.1832 21.675 16.8499 21.675C16.4166 21.675 16.0582 21.4917 15.7749 21.125L11.8249 15.85C11.3749 15.2333 10.9416 14.8083 10.5249 14.575C10.1249 14.3417 9.58324 14.225 8.8999 14.225H6.4999C6.0999 14.225 5.79157 14.1333 5.5749 13.95C5.3749 13.7667 5.2749 13.5083 5.2749 13.175C5.2749 12.8417 5.3749 12.5833 5.5749 12.4C5.79157 12.2167 6.0999 12.125 6.4999 12.125H10.8499C13.1332 12.125 14.3749 11.2083 14.5749 9.375H6.1499C5.8999 9.375 5.69157 9.3 5.5249 9.15C5.35824 8.98333 5.2749 8.775 5.2749 8.525C5.2749 8.275 5.35824 8.075 5.5249 7.925C5.69157 7.75833 5.8999 7.675 6.1499 7.675H14.4499C14.0499 6.275 12.8499 5.575 10.8499 5.575H6.1499C5.8999 5.575 5.69157 5.5 5.5249 5.35C5.35824 5.18333 5.2749 4.975 5.2749 4.725C5.2749 4.475 5.35824 4.275 5.5249 4.125C5.69157 3.95833 5.8999 3.875 6.1499 3.875H18.8499C19.0999 3.875 19.3082 3.95833 19.4749 4.125C19.6416 4.275 19.7249 4.475 19.7249 4.725C19.7249 4.975 19.6416 5.18333 19.4749 5.35C19.3082 5.5 19.0999 5.575 18.8499 5.575H15.7999C16.3832 6.075 16.7749 6.775 16.9749 7.675H18.8499Z"
                fill="#003087"
              />
            </svg>
            <div>
              <p className="text-uppercase fontSize10-m">Available Bal.</p>
              <p className="fontSize14-m colorPrimaryDefault">9675.00</p>
            </div>
          </div>

          {/* Search */}
          <span class="icon-Search me-3 sidebarIconSize"></span>

          {/* Settings */}
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popover}
            rootClose={true}
          >
            <button type="button" className="me-3">
              <span class="icon-ant-design_setting-outlined sidebarIconSize"></span>
            </button>
          </OverlayTrigger>

          {/* Notifications */}
          <button type="button" className="position-relative me-3">
            <span class="icon-ion_notifications-outline sidebarIconSize"></span>
            <span class="position-absolute top-0 start-100 translate-middle notificationCount">
              10
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={userPopover}
            rootClose={true}
          >
            <div className="d-flex align-items-center" type="button">
              {/* People */}
              <span class="icon-fluent_person-16-regular sidebarIconSize"></span>

              <div className="headerMyAccount">
                <p className="fontSize14-m colorPrimaryDefault">Sanjay_AD</p>
                <p className="text-uppercase fontSize10-m">Super Admin</p>
              </div>
            </div>
          </OverlayTrigger>
        </div>

        <img src={logoRight} alt="Logo Right" className="ms-4" />

        {/* Site Configuration Modal */}
        {siteConfiguration && (
          <Modal
            show={siteConfiguration}
            onHide={() => setSiteConfiguration(!siteConfiguration)}
            centered
            className="defaultThemeModal siteConfigurationModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Site Configuration
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="clientNameSelect">
                <label htmlFor="siteConfiguration">Select Startup Page</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  id="siteConfiguration"
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary btnPrimary">Submit</Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* Default Theme Modal */}
        {openDefaultModal && (
          <Modal
            show={openDefaultModal}
            onHide={() => setOpenDefaultModal(!openDefaultModal)}
            centered
            className="defaultThemeModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Apply Theme
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p className="fontSize14 letterSpacing-2 text-center">
                Are you sure to change the your theme to Default Theme?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary btnPrimaryOutline">Cancel</Button>
              <Button
                variant="primary btnPrimary"
                onClick={() => {
                  changeThemeDefault();
                  setOpenDefaultModal(!openDefaultModal);
                }}
              >
                Apply Theme
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* Light Theme Modal */}
        {openLightModal && (
          <Modal
            show={openLightModal}
            onHide={() => setOpenLightModal(!openLightModal)}
            centered
            className="defaultThemeModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Apply Theme
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p className="fontSize14 letterSpacing-2 text-center">
                Are you sure to change the your theme to Light Theme?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary btnPrimaryOutline"
                onClick={() => setOpenLightModal(!openLightModal)}
              >
                Cancel
              </Button>
              <Button
                variant="primary btnPrimary"
                onClick={() => {
                  changeThemeLight();
                  setOpenLightModal(!openLightModal);
                }}
              >
                Apply Theme
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* Dark Theme Modal */}
        {openDarkModal && (
          <Modal
            show={openDarkModal}
            onHide={() => setOpenDarkModal(!openDarkModal)}
            className="defaultThemeModal"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Apply Theme
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p className="fontSize14 letterSpacing-2 text-center">
                Are you sure to change the your theme to Dark Theme?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary btnPrimaryOutline"
                onClick={() => setOpenDarkModal(!openDarkModal)}
              >
                Cancel
              </Button>
              <Button
                variant="primary btnPrimary"
                onClick={() => {
                  changeThemeDark();
                  setOpenDarkModal(!openDarkModal);
                }}
              >
                Apply Theme
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Header;
