import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import Home from "Pages/Home";
import Dialer from "components/dialer/Dialer";
import PricingSection from "Pages/PricingSection";
import SignupPage from "Pages/SignupPage";
import LoginPage from "Pages/LoginPage";
import ForgotPasswordPage from "Pages/ForgotPasswordPage";
import HomeNavbar from "components/HomeNavbar";
import StripeCheckout from "Pages/StripeCheckout";

// Create a separate component for the first set of Routes
function MainRoutes() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/monthly" element={<Monthly />} />
          <Route path="/breakdown" element={<Breakdown />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/performance" element={<Performance />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* Apply ThemeProvider and CssBaseline to MainRoutes */}
        <MainRoutes />
        {/* Define the second set of Routes here */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pricing" element={<PricingSection />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/forgot" element={<ForgotPasswordPage />}></Route>
          {/* <Route path= "/stripe-checkout" element= {<StripeCheckout></StripeCheckout>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;