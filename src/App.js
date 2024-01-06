import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

//Hooks
import useIsDesktop from './hooks/useInDesktop'
//Components
import LayoutBase from "./layout/LayoutBase";



function App() {
  const isDesktop = useIsDesktop();
  
  return (
    <LayoutBase isDesktop={isDesktop}>
      {/* <Header />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/record" element={isContentAccessible ? <Content /> : <Navigate to="/home" />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={isContentAccessible ? <Navigate to="/record" /> : <Navigate to="/home" />} />
        </Routes>
      </Router> */}
    </LayoutBase>
  );
}

export default App;
