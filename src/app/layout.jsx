import '../styles/index.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: {
    default: 'Engineering Consulting Services',
    template: 'Engineering Consulting Services | %s',
  },
  description: 'Professional engineering consultancy with 40+ years experience in structural engineering, building cost planning, expert assessments, and risk engineering services.',
  keywords: 'engineering consulting, structural engineering, building cost planning, expert assessments, risk engineering, building surveys, structural analysis',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'Engineering Consulting Services',
      template: 'Engineering Consulting Services | %s',
    },
    description: 'Trusted engineering consultancy offering expert structural analysis, cost management, and building assessment services with over 40 years of industry experience.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen overflow-x-hidden">{children}</body>
    </html>
  )
}