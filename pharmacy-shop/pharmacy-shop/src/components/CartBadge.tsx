import Image from 'next/image'
import Link from 'next/link'

interface Props {
  count: number
}

export default function CartBadge({ count }: Props) {
  return (
    <Link href="/cart">
      <div className="relative w-6 h-6">
        <Image src="/icons/cart.png" alt="سبد خرید" width={24} height={24} />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 text-xs bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </div>
    </Link>
  )
}
