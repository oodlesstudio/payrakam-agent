import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/aepsTransaction/AepsTransaction.css";

// Components
import Header from "../components/common/Header";
import AepsTransactionMain from "../components/aepsTransaction/AepsTransactionMain";
import Footer from "../components/common/Footer";

const AepsTransactions = () => {
  return (
    <div>
      <Header />
      <AepsTransactionMain />
      <Footer />
    </div>
  );
};

export default AepsTransactions;
