import Image from 'next/image'
import { Medicine } from '@/types/medicine'
import { formatPrice } from '@/utils/price'

interface Props {
  medicine: Medicine
  onAdd?: (id: Medicine) => void
}

export default function ProductCard({ medicine, onAdd }: Props) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border">
      
      <div className="w-16 h-16 relative ml-2">
        <Image
          src={medicine.image || '/images/png/placeholder.png'}
          alt={medicine.name}
          fill
          className="object-contain"
        />
      </div>

      
      <div className="flex flex-col items-center justify-center flex-1 text-sm font-semibold">
        <span>{medicine.name}</span>
        <span className="text-gray-500 text-xs mt-1">{formatPrice(medicine.price)}</span>
      </div>

    
      {onAdd && <button
        onClick={() => onAdd(medicine)}
        className="text-sm text-purple-700 flex items-center whitespace-nowrap"
      >
        افزودن <span className="text-lg leading-none mr-1">+</span>
      </button>}
    </div>
  )
}
