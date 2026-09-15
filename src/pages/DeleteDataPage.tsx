import { Link } from 'react-router-dom'
import { dataDeletion, supportEmail } from '../content/deletion'

export default function DeleteDataPage() {
  const mailto = `mailto:${supportEmail}?subject=${encodeURIComponent(dataDeletion.emailSubject)}`

  return (
    <div className="bg-gray-50">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            JaMate
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {dataDeletion.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {dataDeletion.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-6 px-6 py-12 md:py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            How to request data deletion
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-gray-600">
            <li>
              Email us from the address associated with your JaMate account.
            </li>
            <li>
              Use the subject line:{' '}
              <strong>{dataDeletion.emailSubject}</strong>.
            </li>
            <li>
              Tell us what data you want deleted (for example: profile, photos,
              chats, location history).
            </li>
          </ol>
          <a
            href={mailto}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Email data deletion request
          </a>
          <p className="mt-5 font-medium text-gray-900">Include:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-600">
            {dataDeletion.emailInclude.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            We will verify ownership and process verified requests within 30
            days.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Delete everything at once
          </h2>
          <p className="mt-3 text-gray-600">
            If you want your account and all associated data removed, the
            fastest option is in-app deletion:
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-gray-600">
            <li>Open JaMate and sign in.</li>
            <li>
              Go to <strong>Profile</strong> → <strong>Delete account</strong>.
            </li>
            <li>Confirm deletion.</li>
          </ol>
          <p className="mt-4 text-gray-600">
            Full instructions:{' '}
            <Link
              to="/delete-account"
              className="font-medium text-primary hover:text-primary-dark"
            >
              Account deletion request
            </Link>
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Data we may delete on request
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
            {dataDeletion.deletedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            Some limited information may be retained when required for legal,
            security, or operational reasons.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Related</h2>
          <p className="mt-3 text-gray-600">
            Review our{' '}
            <Link
              to="/privacy"
              className="font-medium text-primary hover:text-primary-dark"
            >
              Privacy Policy
            </Link>{' '}
            for more details about how JaMate handles your information.
          </p>
        </div>
      </section>
    </div>
  )
}
