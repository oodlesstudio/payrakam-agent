import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import AgentRegistrationWindow from "./AgentRegistrationWindow";


const AgentRegistrationMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <AgentRegistrationWindow />
      </div>
    </div>
  )
}

export default AgentRegistrationMain