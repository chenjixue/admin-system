import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/page/home";
import LittleCode from "@/page/littleCode";
import AccountManager from "@/page/perssionManager/accountManager";
import RoleManager from "@/page/perssionManager/roleManager";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/littleCode" element={<LittleCode />} />
      <Route path="/accountManager" element={<AccountManager />} />
      <Route path="/roleManager" element={<RoleManager />} />
    </Routes>
  );
};
export default RoutePage;
