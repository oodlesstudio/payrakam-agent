import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import RemitterRegistrationWindow from "./RemitterRegistrationWindow";

const RemitterRegistrationMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <RemitterRegistrationWindow />
      </div>
    </div>
  );
};

export default RemitterRegistrationMain;
