export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(126,0,30,0.35),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(126,0,30,0.2),_transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
            By musicians for musicians
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Find your next jam partner
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
            JamMate helps musicians discover, connect, and collaborate with
            nearby talent. Swipe to match, chat to plan, and meet up to make
            music together.
          </p>
          <p className="mt-4 text-base font-medium text-primary-light">
            Connect • Create • Compose
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Get the App
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              See Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
