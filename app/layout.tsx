import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Payment Nudger — Automate Polite Payment Reminders',
  description: 'Automatically send progressive payment reminders via email/SMS with customizable templates and escalation rules. Built for freelancers, agencies, and consultants.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ebd32a21-5f8f-40f8-a33f-c8d61cd829a3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
