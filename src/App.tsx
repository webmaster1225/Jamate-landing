import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import SupportPage from './pages/SupportPage'
import DeleteAccountPage from './pages/DeleteAccountPage'
import DeleteDataPage from './pages/DeleteDataPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
        <Route path="/delete-data" element={<DeleteDataPage />} />
      </Route>
    </Routes>
  )
}

export default App
