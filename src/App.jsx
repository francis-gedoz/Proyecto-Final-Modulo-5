import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import NetworksPage from "./Pages/NetworksPage";
import StationsPage from "./Pages/StationsPage";
import ErrorBoundary from "./Errors/ErrorBoundary";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Navbar />
        <div style={{ marginTop: "95px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/networks" element={<NetworksPage />} />
            <Route path="/stations/:id" element={<StationsPage />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;