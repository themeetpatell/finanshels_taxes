import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { taxPages } from './content/taxPages';
import TaxLandingPage from './pages/TaxLandingPage';
import CTRegistrationPage from './pages/CTRegistrationPage';
import CTFilingPage from './pages/CTFilingPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TaxLandingPage pageKey="overview" />} />
        <Route path="/corporate-tax-registration" element={<CTRegistrationPage />} />
        <Route path="/corporate-tax-filing" element={<CTFilingPage />} />
        <Route path={taxPages.corporateRegistration.path} element={<TaxLandingPage pageKey="corporateRegistration" />} />
        <Route path={taxPages.corporateFiling.path} element={<TaxLandingPage pageKey="corporateFiling" />} />
        <Route path={taxPages.vatRegistration.path} element={<TaxLandingPage pageKey="vatRegistration" />} />
        <Route path={taxPages.vatFiling.path} element={<TaxLandingPage pageKey="vatFiling" />} />
        <Route path={taxPages.ftaAmendment.path} element={<TaxLandingPage pageKey="ftaAmendment" />} />
      </Routes>
    </Layout>
  );
}

export default App;
