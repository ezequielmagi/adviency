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
        </body>
    </html>
  )
}
