import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ImageUpload from '@/components/CloudinaryUploadWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tashus | Sharing Ride, Sharing Smiles',
  description: 'Empowering individuals to travel on their own terms through easy car sharing. Drive with freedom, drive with Tashus.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
