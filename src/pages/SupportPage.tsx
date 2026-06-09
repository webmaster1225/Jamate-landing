import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supportEmail, supportFaqs } from '../content/support'

function FaqAccordion({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <p className="pb-5 leading-relaxed text-gray-600">{answer}</p>
      )}
    </div>
  )
}

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="bg-gray-50">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Support
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Need help with JamMate? Browse common questions below or reach out
            to our team — we are here to help you connect and jam.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href={`mailto:${supportEmail}?subject=JamMate%20Support%20Request`}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="mt-4 font-semibold text-gray-900">Email support</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              General questions, account help, and technical issues.
            </p>
            <p className="mt-3 text-sm font-medium text-primary">{supportEmail}</p>
          </a>

          <a
            href={`mailto:${supportEmail}?subject=JamMate%20Safety%20Report`}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="mt-4 font-semibold text-gray-900">Report a concern</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Safety issues, harassment, or urgent account concerns.
            </p>
            <p className="mt-3 text-sm font-medium text-primary">{supportEmail}</p>
          </a>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-gray-900">Response time</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            We aim to reply within 1–2 business days. For in-app safety issues,
            please also use the report feature inside JamMate so our team can act
            quickly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12 md:pb-16">
        <h2 className="text-2xl font-bold text-gray-900">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-gray-600">
          Quick answers to the most common JamMate questions.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white px-6">
          {supportFaqs.map((faq, index) => (
            <FaqAccordion
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <h2 className="text-xl font-bold text-gray-900">Related resources</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link
                to="/privacy"
                className="font-medium text-primary hover:text-primary-dark"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-500">
                {' '}
                — how we collect and use your data
              </span>
            </li>
            <li>
              <Link
                to="/terms"
                className="font-medium text-primary hover:text-primary-dark"
              >
                Terms of Service
              </Link>
              <span className="text-gray-500">
                {' '}
                — rules for using JamMate
              </span>
            </li>
            <li>
              <a
                href="/#download"
                className="font-medium text-primary hover:text-primary-dark"
              >
                Download JamMate
              </a>
              <span className="text-gray-500">
                {' '}
                — get the app on iOS or Android
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
