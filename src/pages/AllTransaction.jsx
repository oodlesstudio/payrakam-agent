import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import '../components/allTransaction/AllTransaction.css'

// Components
import Header from "../components/common/Header";
import AllTransactionMain from "../components/allTransaction/AllTransactionMain";
import Footer from "../components/common/Footer";

const AllTransaction = () => {
  return (
        <div>
      <Header />
      <AllTransactionMain />
      <Footer />
    </div>
  )
}

export default AllTransaction