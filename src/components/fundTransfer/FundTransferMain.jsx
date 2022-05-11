import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import FundTransferWindow from "./FundTransferWindow";

const FundTransferMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });
  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <FundTransferWindow />
      </div>
    </div>
  );
};

export default FundTransferMain;
