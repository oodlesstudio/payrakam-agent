import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/fundTransfer/fundTransfer.css";

// Components
import Header from "../components/common/Header";
import FundTransferMain from "../components/fundTransfer/FundTransferMain";
import Footer from "../components/common/Footer";

const FundTransfer = () => {
  return (
    <div>
      <Header />
      <FundTransferMain />
      <Footer />
    </div>
  );
};

export default FundTransfer;
