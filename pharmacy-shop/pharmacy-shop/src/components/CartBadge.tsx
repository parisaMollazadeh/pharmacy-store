import Image from 'next/image'
import Link from 'next/link'

interface Props {
  count: number
}

export default function CartBadge({ count }: Props) {
  return (
    <Link href="/cart" className="relative inline-block w-6 h-6">
      <Image src="/images/svg/ic-buy.svg" alt="buy" width={24} height={24} />
      {count > 0 && (
        <span className="absolute -top-1 -left-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
          {count}
        </span>
      )}
    </Link>
  )
}
