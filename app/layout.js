import './globals.css'

export const metadata = {
  title: 'Mirae Asset',
  description: 'Mirae Asset',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`font-spoqa antialiased w-screen min-h-screen`}>
        <main className='w-full h-auto text-white-default'>
          {children}
        </main>
      </body>
    </html>
  )
}
