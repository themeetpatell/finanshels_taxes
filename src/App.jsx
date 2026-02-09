import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import CTRegistrationPage from './pages/CTRegistrationPage';
import CTFilingPage from './pages/CTFilingPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/corporate-tax-filing" replace />} />
        <Route path="/corporate-tax-registration" element={<CTRegistrationPage />} />
        <Route path="/corporate-tax-filing" element={<CTFilingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
