import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import AepsTransactions from "../pages/AepsTransactions";
import TransferMoney from '../pages/TransferMoney';
import BeneficiaryRegistration from "../pages/BeneficiaryRegistration";
import FundTransfer from "../pages/FundTransfer";
import RemitterRegistration from "../pages/RemitterRegistration";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AepsTransactions />} />
        <Route path="/aeps/transactions" element={<AepsTransactions />} />
        <Route path="/dmt/transfer-money" element={<TransferMoney />} />
        <Route path="/dmt/beneficiary-registration" element={<BeneficiaryRegistration />} />
        <Route path="/dmt/fund-transfer" element={<FundTransfer />} />
        <Route path="/dmt/remitter-registration" element={<RemitterRegistration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
