import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import PreView from "./pages/PreviewPage"
import Menubar from "./components/Menubar";
import LogPage from "./pages/LogPage";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { isAuthenticated } = useContext(AppContext);
  return (
    <BrowserRouter>
      <Menubar />
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {isAuthenticated &&
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/generate" element={<MainPage />} />
            <Route path="/preview" element={<PreView />} />
          </>}
        {!isAuthenticated &&
          <>
            <Route path="/login" element={<LogPage />} />
          </>}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
