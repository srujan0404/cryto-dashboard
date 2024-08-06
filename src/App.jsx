import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import TransactionStatsPage from "./pages/TransactionStatsPage/TransactionStatsPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/transaction-stats" element={<TransactionStatsPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
