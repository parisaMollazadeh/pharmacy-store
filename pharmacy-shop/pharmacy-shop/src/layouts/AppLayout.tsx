import { ReactNode } from 'react'
import Header from '@/components/Header'

interface Props {
  children: ReactNode
  headerMode?: 'menu' | 'back'
  cartCount?: number
}

export default function AppLayout({ children, headerMode = 'menu', cartCount = 0 }: Props) {
  return (
    <div className="min-h-screen bg-white text-right text-black">
      <Header mode={headerMode} cartCount={cartCount} />
      <main className="p-4">{children}</main>
    </div>
  )
}
