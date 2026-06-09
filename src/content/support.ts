export const supportEmail = 'jamatemusic@gmail.com'

export type FaqItem = {
  question: string
  answer: string
}

export const supportFaqs: FaqItem[] = [
  {
    question: 'How do I create a JamMate account?',
    answer:
      'Download JamMate from the App Store or Google Play, tap "Start Now" on the welcome screen, and sign up with your email or continue with Google or Apple. Complete your musician profile with your instrument, style, and location to start discovering others.',
  },
  {
    question: 'How does matching work?',
    answer:
      'On the Discover tab, swipe right to like a musician or left to skip. When you and another user both like each other, it is a match. You can then chat and plan a jam session together.',
  },
  {
    question: 'Why does JamMate need my location?',
    answer:
      'Location helps power Discover and JamMap so you can find musicians near you. You can control location access in your device settings. JamMate only uses location while you use the app, with your permission.',
  },
  {
    question: 'How do I change my privacy settings?',
    answer:
      'Open your Profile tab and go to Privacy settings. You can hide your profile from discovery, hide your age, or hide your music school from other users at any time.',
  },
  {
    question: 'How do I block or report a user?',
    answer:
      'From a user\'s profile or inside a chat, use the block or report options. Blocked users cannot contact you or see your profile in discovery. Reports are reviewed by our team to keep JamMate safe.',
  },
  {
    question: 'I forgot my password. How do I reset it?',
    answer:
      'On the sign-in screen, tap "Forgot password?" and enter the email linked to your account. You will receive a reset code by email. Enter the code and choose a new password.',
  },
  {
    question: 'How do I delete my account?',
    answer:
      'To request account deletion, email us at jamatemusic@gmail.com from the address linked to your JamMate account. Include your profile name so we can verify your request. We will delete your data within a reasonable period, subject to legal retention requirements.',
  },
  {
    question: 'Is JamMate free?',
    answer:
      'JamMate offers a free tier with core features including discovery, matching, chat, and JamMap. Optional paid plans may be introduced in the future. Any pricing will be shown clearly before you subscribe.',
  },
]
