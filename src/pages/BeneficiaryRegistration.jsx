import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/beneficiaryRegistration/beneficiaryRegistration.css";

// Components
import Header from "../components/common/Header";
import BeneficiaryRegistrationMain from "../components/beneficiaryRegistration/BeneficiaryRegistrationMain";
import Footer from "../components/common/Footer";

const BeneficiaryRegistration = () => {
  return (
    <div>
      <Header />
      <BeneficiaryRegistrationMain />
      <Footer />
    </div>
  );
};

export default BeneficiaryRegistration;
