export default function Download() {
  return (
    <section id="download" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to start jamming?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Download JamMate on iOS or Android and start discovering musicians
            in your area today.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-900"
              aria-label="Download on the App Store"
            >
              <img
                src="/apple.png"
                alt=""
                className="h-5 w-5 object-contain"
                aria-hidden
              />
              App Store
            </a>
            <a
              href="#"
              className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-900"
              aria-label="Get it on Google Play"
            >
              <img
                src="/google.png"
                alt=""
                className="h-5 w-5 object-contain"
                aria-hidden
              />
              Google Play
            </a>
          </div>

          <p className="mt-6 text-sm text-white/70">
            App store links will be added when JamMate launches publicly.
          </p>
        </div>
      </div>
    </section>
  )
}
