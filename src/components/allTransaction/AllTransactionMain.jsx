import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import AllTransactionWindow from "./AllTransactionWindow";

const AllTransactionMain = () => {

  const company = useSelector((state) => {
    return state.sidebarReducer;
  });


  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <AllTransactionWindow />
      </div>
    </div>
  )
}

export default AllTransactionMain