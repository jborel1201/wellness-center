import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from "#pages/Home";
import Financing from "#pages/Financing";
import LegalNotice from "#pages/regulatory/LegalNotice";
import TermsOfSales from "#pages/regulatory/TermsOfSales";
import PrivacyPolicy from "#pages/regulatory/PrivacyPolicy";
import InternalReg from "#pages/regulatory/InternalReg";
import CGV from "#pages/regulatory/CGV";
import Cookies from "#pages/regulatory/Cookies";
import Contact from "#pages/regulatory/Contact";
import OurValues from "#pages/OurValues";
import Bloc1 from "#pages/formation/Bloc1";
import Bloc2 from "#pages/formation/Bloc2";
import Bloc3 from "#pages/formation/Bloc3";
import Formation from "#pages/formation/Formation";
import Plus from "#pages/regulatory/Plus";
//Hooks
import useIsDesktop from './hooks/useInDesktop'
//Components
import LayoutBase from "./layout/LayoutBase";



function App() {
  const isDesktop = useIsDesktop();

  return (
    <Router>
      <LayoutBase isDesktop={isDesktop}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/formations" element={<Formation />} />
          <Route path="/formation/bloc_1" element={<Bloc1 />} /> 
          <Route path="/formation/bloc_2" element={<Bloc2 />} /> 
          <Route path="/formation/bloc_3" element={<Bloc3 />} /> 
          <Route path="/financements" element={<Financing />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/politique-en-matiere-de-cookies" element={<Cookies />} />
          <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
          <Route path="/conditions-d-utilisation" element={<TermsOfSales />} />
          <Route path="/reglement-interieur" element={<InternalReg />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/nos-valeurs" element={<OurValues isDesktop={isDesktop} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plus" element={<Plus />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </LayoutBase>
    </Router>
  );
}

export default App;
