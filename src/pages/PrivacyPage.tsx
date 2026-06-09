import LegalDocument from '../components/LegalDocument'
import { privacyPolicy } from '../content/privacy'

export default function PrivacyPage() {
  return <LegalDocument {...privacyPolicy} />
}
