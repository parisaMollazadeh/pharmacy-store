import { ReactNode } from 'react'
import Header from '@/components/Header'
import { useCart } from '@/context/CartContext'

interface Props {
  children: ReactNode
  headerMode?: 'menu' | 'back'
}

export default function AppLayout({ children, headerMode = 'menu' }: Props) {
  const { items } = useCart()
  return (
    <div className="min-h-screen bg-white text-right text-black">
      <Header mode={headerMode} cartCount={items.length} />
      <main className="p-4">{children}</main>
    </div>
  )
}
