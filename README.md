# Adewale Oretuga | Frontend Engineer portfolio

Live: https://adewale-oretuga.netlify.app

Personal portfolio built with Next.js 13 (App Router), TypeScript and Tailwind CSS.

## Editing content

All text (summary, experience, skills, education and projects) lives in one file:
`app/data/profile.ts`. Update it there and every page follows, so the site stays in
sync with the CV and LinkedIn.

To show the "Download my CV" button, save a PDF as `public/Adewale-Oretuga-CV.pdf`
and set `cvUrl: "/Adewale-Oretuga-CV.pdf"` in `app/data/profile.ts`.

## Contact form

The form sends through EmailJS when these environment variables are set (in Netlify:
Site settings > Environment variables):

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Without them, the form opens the visitor's email app with the message filled in.

## Run locally

```bash
npm ci
npm run dev
```
