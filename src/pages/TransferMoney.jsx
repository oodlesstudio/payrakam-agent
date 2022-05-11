import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/transferMoney/transferMoney.css";

// Components
import Header from "../components/common/Header";
import TransferMoneyMain from "../components/transferMoney/TransferMoneyMain";
import Footer from "../components/common/Footer";

const TransferMoney = () => {
  return (
    <div>
      <Header />
      <TransferMoneyMain />
      <Footer />
    </div>
  );
};

export default TransferMoney;
