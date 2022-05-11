import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import BeneficiaryRegistrationWindow from "./BeneficiaryRegistrationWindow";

const BeneficiaryRegistrationMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <BeneficiaryRegistrationWindow />
      </div>
    </div>
  );
};

export default BeneficiaryRegistrationMain;
