import Image from 'next/image'
import Link from 'next/link'
import CartBadge from './CartBadge'

interface Props {
  mode: 'menu' | 'back'
  cartCount?: number
}

export default function Header({ mode, cartCount = 0 }: Props) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#E8EAF6] shadow-sm">
      {mode === 'menu' ? (
        <>
          <CartBadge count={cartCount} />
          <Image src="/icons/menu.png" alt="منو" width={24} height={24} />
        </>
      ) : (
        <Link href="/">
          <Image src="/icons/back.png" alt="بازگشت" width={24} height={24} />
        </Link>
      )}
    </header>
  )
}
