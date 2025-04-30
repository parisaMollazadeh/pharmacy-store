import { ReactNode } from 'react'
import Header from '@/components/Header'
import { useCart } from '@/context/CartContext'
import localFont from 'next/font/local';

const iranSanceFont = localFont({
  src: '../../public/font/IranianSans.ttf',
});

interface Props {
  children: ReactNode
  headerMode?: 'menu' | 'back'
}

export default function AppLayout({ children, headerMode = 'menu' }: Props) {
  const { items } = useCart()
  return (
    <div className="min-h-screen bg-white text-right text-black">
      <header className="fixed top-0 right-0 left-0 z-50">
        <Header mode={headerMode} cartCount={items.length} />
      </header>
      <main className={`${iranSanceFont.className} pt-[64px] px-4`}>{children}</main>
    </div>
  )
}
