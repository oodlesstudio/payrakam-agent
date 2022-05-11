import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/agentRegistration/AgentRegistration.css";

// Components
import Header from "../components/common/Header";
import AgentRegistrationMain from "../components/agentRegistration/AgentRegistrationMain";
import Footer from "../components/common/Footer";

const AgentRegistration = () => {
  return (
    <div>
      <Header />
      <AgentRegistrationMain />
      <Footer />
    </div>
  );
};

export default AgentRegistration;
