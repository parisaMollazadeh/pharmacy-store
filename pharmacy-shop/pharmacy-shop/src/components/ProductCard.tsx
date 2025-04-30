import Image from 'next/image'
import { Medicine } from '@/types/medicine'
import { formatPrice } from '@/utils/price'

interface Props {
  medicine: Medicine
  onAdd?: (id: Medicine) => void
}

export default function ProductCard({ medicine, onAdd }: Props) {
  return (
    <div className="flex items-center justify-between p-2 bg-white rounded-xl shadow-sm border border-gray-400 h-24">
      
      <div className="w-16 h-16 relative ml-2">
        <Image
          src={medicine.image || '/images/png/placeholder.png'}
          alt={medicine.name}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      
      <div className="flex flex-col items-right py-2 justify-between flex-1 text-sm font-semibold h-full">
        <span>{medicine.name}</span>
        {onAdd && <span className="text-gray-400 text-xs mt-1">{formatPrice(medicine.price)}</span>}
      </div>

    
      {onAdd && <button
        onClick={() => onAdd(medicine)}
        className="text-[12px] text-purple-700 flex items-end font-extrabold whitespace-nowrap h-full pb-2"
      >
         +افزودن
      </button>}
    </div>
  )
}
