import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lemina - Building the investment bank for African tech',
  description: 'Market intelligence platform for investors deploying capital in African tech markets',
  keywords: ['africa', 'tech', 'investment', 'fintech', 'venture capital', 'startup'],
  authors: [{ name: 'Lemina' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
      </head>
      <body>
        <div className="gradient-bg"></div>
        <div className="grid-overlay"></div>
        {children}
      </body>
    </html>
  )
}