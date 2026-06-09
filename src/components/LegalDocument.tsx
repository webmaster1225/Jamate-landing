type LegalSection = {
  title: string
  content: string
}

type LegalDocumentProps = {
  title: string
  lastUpdated: string
  intro: string
  sections: LegalSection[]
}

export default function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <header className="mb-10 border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        <p className="mt-6 leading-relaxed text-gray-600">{intro}</p>
      </header>

      <div className="legal-content">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        ))}
      </div>
    </article>
  )
}
