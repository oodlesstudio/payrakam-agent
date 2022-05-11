import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/remitterRegistration/remitterRegistration.css";
// Components
import Header from "../components/common/Header";
import RemitterRegistrationMain from "../components/remitterRegistration/RemitterRegistrationMain";
import Footer from "../components/common/Footer";

const RemitterRegistration = () => {
  return (
    <div>
      <Header />
      <RemitterRegistrationMain />
      <Footer />
    </div>
  );
};

export default RemitterRegistration;
