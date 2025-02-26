import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { EB_Garamond } from 'next/font/google'
import { cn } from '@/utils/cn-func'
import { Providers } from '@/components/providers'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'WatchDog',
  description: 'SaaS Monitoring App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en' className={cn(inter.variable, eb_garamond.variable)}>
        <body className='font-sans bg-brand-50 text-brand-950 antialiased'>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
