import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import Menubar from "./components/Menubar";
import { Toaster } from "react-hot-toast"; 

const App = () => {
  return (
    <BrowserRouter>
      <Menubar />
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
