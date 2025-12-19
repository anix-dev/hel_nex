import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import DigitalProductPassport from './pages/DigitalProductPassport';
import DistributorNetwork from './pages/DistributorNetwork';
import ExciseDutyCalculator from './pages/ExciseDutyCalculator';
import ExportDocumentationAutomation from './pages/ExportDocumentationAutomation';
import FormulaComplianceEngine from './pages/FormulaComplianceEngine';
import GlobalRegulatoryMap from './pages/GlobalRegulatoryMap';
import PredictedApprovalTimelineEngine from './pages/PredictedApprovalTimelineEngine';
import RegulatoryRuleTablesAdmin from './pages/RegulatoryRuleTablesAdmin';
import RegulatoryTemplateAdmin from './pages/RegulatoryTemplateAdmin';
import RegulatoryTemplateUploader from './pages/RegulatoryTemplateUploader';
import Footer from './pages/Footer';
import Ldashboard from './pages/Ldashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landingdashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Ldashboard />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/digital-product-passport" element={<DigitalProductPassport />} />
        <Route path="/distributor-network" element={<DistributorNetwork />} />
        <Route path="/excise-duty-calculator" element={<ExciseDutyCalculator />} />
        <Route path="/export-documentation-automation" element={<ExportDocumentationAutomation />} />
        <Route path="/formula-compliance-engine" element={<FormulaComplianceEngine />} />
        <Route path="/global-regulatory-map" element={<GlobalRegulatoryMap />} />
        <Route path="/predicted-approval-timeline-engine" element={<PredictedApprovalTimelineEngine />} />
        <Route path="/regulatory-rule-tables-admin" element={<RegulatoryRuleTablesAdmin />} />
         <Route path="/regulatory-template-admin" element={<RegulatoryTemplateAdmin />} />
        <Route path="/regulatory-template-uploader" element={<RegulatoryTemplateUploader />} />
        
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
