import '../styles/index.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen overflow-x-hidden">{children}</body>
    </html>
  )
}