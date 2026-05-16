import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StockSense — WooCommerce Stockout Predictor',
  description: 'Predict WooCommerce inventory stockouts before they happen. Analyze sales velocity and get reorder alerts automatically.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="33469b2b-1b8b-4877-a25e-d6f7fcf111a5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
