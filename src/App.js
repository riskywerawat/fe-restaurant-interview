/**
=========================================================
*  React - v2.0.0
=========================================================





 =========================================================

* 
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//  React themes
import theme from "assets/theme";


//  React routes

import PlaceDetail from "pages/LandingPages/PlaceDetail";
import AboutUs from "pages/LandingPages/AboutUs";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>

        <Route path="/search" element={<AboutUs />} />
        <Route path="/search/detail/:id" element={<PlaceDetail />} />
        <Route path="*" element={<Navigate to="/search" />} />
        
      </Routes>
    </ThemeProvider>
  );
}
