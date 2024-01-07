import { Rubik } from 'next/font/google'
import './globals.css'
import Header from './components/Header/page'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'DGTLFACE',
  description: 'DigitalFace App Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
      <Header />
      {children}
      </body>
    </html>
  )
}
