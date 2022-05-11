import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/manualKycRegistration/manualKyc.css";
// Components
import Header from "../components/common/Header";
import ManualKycMain from "../components/manualKycRegistration/ManualKycMain";
import Footer from "../components/common/Footer";

const ManualKycRegistration = () => {
  return (
    <div>
      <Header />
      <ManualKycMain />
      <Footer />
    </div>
  )
}

export default ManualKycRegistration