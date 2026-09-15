import { Link } from 'react-router-dom'
import {
  accountDeletion,
  supportEmail,
} from '../content/deletion'

export default function DeleteAccountPage() {
  const mailto = `mailto:${supportEmail}?subject=${encodeURIComponent(accountDeletion.emailSubject)}`

  return (
    <div className="bg-gray-50">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            JaMate
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {accountDeletion.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {accountDeletion.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-6 px-6 py-12 md:py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Option 1 — Delete in the app (fastest)
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-gray-600">
            {accountDeletion.inAppSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-gray-500">
            Your account and associated data are deleted immediately from our
            servers.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Option 2 — Request by email
          </h2>
          <p className="mt-3 text-gray-600">
            If you cannot access the app, email us from the address linked to
            your JaMate account.
          </p>
          <a
            href={mailto}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Email deletion request
          </a>
          <p className="mt-5 font-medium text-gray-900">Include:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            {accountDeletion.emailInclude.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            We will verify ownership and complete deletion within 30 days.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            What gets deleted
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
            {accountDeletion.deletedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            We may retain limited records only when required by law (for
            example, fraud prevention or legal compliance).
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Related</h2>
          <p className="mt-3 text-gray-600">
            To request deletion of your data without deleting your full
            account, see{' '}
            <Link
              to="/delete-data"
              className="font-medium text-primary hover:text-primary-dark"
            >
              Data deletion request
            </Link>
            . You can also review our{' '}
            <Link
              to="/privacy"
              className="font-medium text-primary hover:text-primary-dark"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
