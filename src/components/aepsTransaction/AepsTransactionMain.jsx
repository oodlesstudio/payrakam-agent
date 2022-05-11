import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import AepsTransactionWindow from "./AepsTransactionWindow";


const AepsTransactionMain = () => {
    const company = useSelector((state) => {
        return state.sidebarReducer;
    });
    return (
        <div className="mainView d-flex">
            <SidebarMain />
            <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
                <AepsTransactionWindow/>
            </div>
        </div>
    )
}

export default AepsTransactionMain