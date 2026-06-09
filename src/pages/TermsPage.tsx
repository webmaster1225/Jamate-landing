import LegalDocument from '../components/LegalDocument'
import { termsOfService } from '../content/terms'

export default function TermsPage() {
  return <LegalDocument {...termsOfService} />
}
