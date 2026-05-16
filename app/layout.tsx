import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bloxd Tiers – Community Rankings',
  description: 'Discover player rankings and compare your progress.',
  metadataBase: new URL('https://bloxd-tier.netlify.app'),
  openGraph: {
    title: 'Bloxd Tiers – Community Rankings',
    description: 'Discover player rankings and compare your progress.',
    url: 'https://bloxd-tier.netlify.app',
    siteName: 'Bloxd Tiers',
    images: [
      {
        url: '/og-image.png',   // place your banner at public/og-image.png
        width: 1280,
        height: 640,
        alt: 'Bloxd Tiers – Community Rankings',
      },
    ],
    type: 'website',
  },
  // Discord also reads Twitter card tags as a fallback
  twitter: {
    card: 'summary_large_image',
    title: 'Bloxd Tiers – Community Rankings',
    description: 'Discover player rankings and compare your progress.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

