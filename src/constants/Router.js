import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgegingQueueWise from "../pages/AgegingQueueWise";
// import AgentRegistration from "../pages/AgentRegistration";
// Components
import BranchTerminalRegistration from "../pages/BranchTerminalRegistration";
import FieldIdentificationConfig from "../pages/FieldIdentificationConfig";
import AllTransaction from "../pages/AllTransaction";
import AepsTransactions from "../pages/AepsTransactions";
import OnlineCbrEntry from "../pages/OnlineCbrEntry";
import TransferMoney from '../pages/TransferMoney';
import BeneficiaryRegistration from "../pages/BeneficiaryRegistration";
import FundTransfer from "../pages/FundTransfer";
import RemitterRegistration from "../pages/RemitterRegistration";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/branch-terminal-registration"
          element={<BranchTerminalRegistration />}
        />
        <Route
          path="/field-identification-config"
          element={<FieldIdentificationConfig />}
        />
        <Route path="/online-cbr-entry" element={<OnlineCbrEntry />} />
        <Route path="/ageging-queue-wise" element={<AgegingQueueWise />} />

        
        {/* <Route path="/" element={<AgentRegistration />} /> */}
        <Route path="/all-Transaction" element={<AllTransaction />} />
        <Route path="/" element={<AepsTransactions />} />
        <Route path="/transfer-money" element={<TransferMoney />} />
        <Route path="/beneficiary-registration" element={<BeneficiaryRegistration />} />
        <Route path="/fund-transfer" element={<FundTransfer />} />
        <Route path="/remitter-registration" element={<RemitterRegistration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
