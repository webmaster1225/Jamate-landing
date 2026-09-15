import { supportEmail } from './support'

export { supportEmail }

export const accountDeletion = {
  title: 'Request account deletion',
  intro:
    'You can delete your JaMate account and associated personal data at any time. Deletion is permanent and cannot be undone.',
  inAppSteps: [
    'Open the JaMate app and sign in.',
    'Go to Profile.',
    'Tap Delete account.',
    'Confirm the deletion.',
  ],
  emailSubject: 'JaMate Account Deletion Request',
  emailInclude: [
    'The subject line: JaMate Account Deletion Request',
    'Your JaMate account email',
    'Your display name (if known)',
  ],
  deletedItems: [
    'Account credentials and profile information',
    'Photos and media you uploaded',
    'Location data associated with your profile',
    'Chats, messages, connections, and notifications tied to your account',
  ],
}

export const dataDeletion = {
  title: 'Request data deletion',
  intro:
    'Use this page to ask JaMate to delete personal data associated with your use of the app.',
  emailSubject: 'JaMate Data Deletion Request',
  emailInclude: [
    'The subject line: JaMate Data Deletion Request',
    'Your JaMate account email',
    'What data you want deleted (for example: profile, photos, chats, location history)',
  ],
  deletedItems: [
    'Profile details (name, instruments, style, school, photos, banner)',
    'Location data used for JaMap',
    'Chat messages and media you sent',
    'Connections, notifications, and related account records',
  ],
}
