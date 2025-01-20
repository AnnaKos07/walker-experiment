import './globals.css'

export const metadata = {
  title: 'trail.',
  description: 'Chat with an AI assistant about mountain traveling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xxxxxxx.css" />
      </head>
      <body className="font-suisse-int">{children}</body>
    </html>
  )
}

