import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from "#pages/Home";
import Financing from "#pages/Financing";
import LegalNotice from "#pages/regulatory/LegalNotice";
import TermsOfSales from "#pages/regulatory/TermsOfSales";
import PrivacyPolicy from "#pages/regulatory/PrivacyPolicy";
import Cookies from "#pages/regulatory/Cookies";
import OurValues from "#pages/OurValues";
import Bloc1 from "#pages/formation/Bloc1";
import Bloc2 from "#pages/formation/Bloc2";
import Bloc3 from "#pages/formation/Bloc3";
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
          <Route path="/home" element={<Home />} />
          <Route path="/formations" >
            <Route path="/formations/bloc_1" element={<Bloc1 />} /> 
            <Route path="/formations/bloc_2" element={<Bloc2 />} /> 
            <Route path="/formations/bloc_3" element={<Bloc3 />} /> 
            <Route path="/formations/synthese" element={<Bloc1 />} /> 
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/financements" element={<Financing />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/politique-en-matiere-de-cookies" element={<Cookies />} />
          <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
          <Route path="/conditions-d-utilisation" element={<TermsOfSales />} />
          <Route path="/nos-valeurs" element={<OurValues />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </LayoutBase>
    </Router>
  );
}

export default App;
