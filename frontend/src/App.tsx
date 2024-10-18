import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectDaoType from './components/SelectDaoType';
import DescribeDao from './components/DescribeDao';
import DefineMembership from './components/DefineMembership';
import SelectGovernance from './components/SelectGovernance';
import DeployDao from './components/DeployDao'; // Make sure you import DeployDao

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectDaoType />} />
        <Route path="/describe-dao" element={<DescribeDao />} />
        <Route path="/define-membership" element={<DefineMembership />} />
        <Route path="/select-governance" element={<SelectGovernance />} />
        <Route path="/deploy-dao" element={<DeployDao />} />
      </Routes>
    </Router>
  );
}

export default App;