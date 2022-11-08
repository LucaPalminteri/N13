// layout.tsx: A file used to define UI that is shared across multiple pages. A layout accepts another layout or a page as its child. You can nest layouts to create nested routes.

import Link from "next/link";
import '../styles/globals.css'
import { Inter } from '@next/font/google'

const inter = Inter()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/albums'>Albums</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
