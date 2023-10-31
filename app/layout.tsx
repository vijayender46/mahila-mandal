import './globals.css'
import { Inter } from 'next/font/google';
import type { Metadata } from 'next'
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import { AuthProvider } from './providers'

export const metadata: Metadata = {
  title: 'Mahila Mandal India',
  description: 'The Real Women empowerment',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ 
  children,
 }: { 
  children: React.ReactNode
  }) {
  return (
    
    <html lang="en">
      
      <body className={inter.className}>
        <AuthProvider>      
          <TopBar />
            <Navbar />
            {children}
            <Footer />
        </AuthProvider>
      </body>
    </html>
    
  )
}
