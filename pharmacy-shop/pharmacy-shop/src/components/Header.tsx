import Image from 'next/image'
import Link from 'next/link'
import CartBadge from './CartBadge'

interface Props {
    mode: 'menu' | 'back'
    cartCount?: number
}

export default function Header({ mode = 'menu', cartCount = 0 }: Props) {
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-[#E8EAF6] shadow-sm">
            {mode === 'menu' ? (
                <>
                    <CartBadge count={cartCount} />

                    <Image src="/images/svg/ic-menu.svg" alt="menu" width={24} height={24} />
                </>
            ) : (
                <Link href="/">
                    <Image src="/images/svg/ic-back.svg" alt="بازگشت" width={24} height={24} />
                </Link>
            )}
        </header>
    )
}
