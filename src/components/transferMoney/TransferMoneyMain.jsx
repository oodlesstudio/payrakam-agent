import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import TransferMoneyWindow from "./TransferMoneyWindow";

const TransferMoneyMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });
  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <TransferMoneyWindow />
      </div>
    </div>
  );
};

export default TransferMoneyMain;
