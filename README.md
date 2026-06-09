# JamMate Landing Page

Marketing site for the JamMate musician networking app. Includes the home page, Support, Privacy Policy, and Terms of Service.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with features and download CTA |
| `/support` | Help center, FAQs, and contact |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Static files are output to `dist/` and can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host.

## Customization

- **Branding:** Colors are defined in `src/index.css` (`--color-primary`, etc.)
- **Support content:** Edit `src/content/support.ts` (FAQs and contact email)
- **Legal content:** Edit `src/content/privacy.ts` and `src/content/terms.ts`
- **Contact emails:** Update addresses in the footer and legal documents
- **App store links:** Replace `#` placeholders in `src/components/Download.tsx` when the app launches
- **Icon:** Replace `public/jammate-icon.png`

## App Store Requirements

When submitting JamMate to the App Store or Google Play, use these URLs:

- Privacy Policy: `https://your-domain.com/privacy`
- Terms of Service: `https://your-domain.com/terms`

Replace `your-domain.com` with your deployed domain after publishing this site.

## Important Note

The Privacy Policy and Terms of Service are drafted based on JamMate's current features and data practices. They are **not legal advice**. Have a qualified attorney review them before publishing, especially if you operate in regulated regions (EU/UK GDPR, California CCPA, etc.).
