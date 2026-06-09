const features = [
  {
    title: 'Discover',
    description:
      'Swipe through musician profiles filtered by instrument, style, and skill level. Like, skip, or save profiles to build your network.',
    icon: '🎵',
  },
  {
    title: 'JamMap',
    description:
      'See musicians near you on an interactive map. Find jam partners in your city and filter by what matters to your sound.',
    icon: '🗺️',
  },
  {
    title: 'Match & Chat',
    description:
      'When you and another musician like each other, it is a match. Start a conversation, plan a session, and make music happen.',
    icon: '💬',
  },
  {
    title: 'Your Profile',
    description:
      'Showcase your instrument, genres, skill level, bio, and photos. Control what others see with built-in privacy settings.',
    icon: '🎸',
  },
  {
    title: 'Privacy Controls',
    description:
      'Hide from discovery, hide your age, or hide your music school. You decide how much of your profile is visible.',
    icon: '🔒',
  },
  {
    title: 'Real-time Presence',
    description:
      'See when musicians are online and stay connected with in-app notifications for matches and messages.',
    icon: '⚡',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Everything you need to find your bandmate
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            JamMate is built for musicians who want to connect locally — whether
            you are looking for a drummer, a vocalist, or your next creative
            collaborator.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
