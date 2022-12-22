
import './globals.css'
import { GiftProvider } from './context/giftContext'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <GiftProvider>
          {children}
        </GiftProvider>
        <script defer src="https://app.embed.im/snow.js"></script>
      </body>
    </html>
  )
}
