import { ReactElement } from 'react'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { formatPrice } from '@/utils/price'
import AppLayout from '@/layouts/AppLayout'

export default function CartPage() {
  const { items, clearCart, getTotalPrice } = useCart()

  return (
    <div>
      <span className="text-sm font-semibold my-4 text-gray-500">سبد خرید</span>

      <div className='mt-4'>
        {items.length === 0 ? (
          <p className="text-center text-gray-500">سبد خرید شما خالی است.</p>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <ProductCard key={item.id} medicine={item} />
              ))}
            </div>

            <div className="border-t border-gray-400 mt-4 pt-4 text-sm text-gray-700">
              <div className="flex justify-between mb-2">
                <span>تعداد کالا</span>
                <span>{items.length} عدد</span>
              </div>
              <div className="flex justify-between">
                <span>قیمت</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
            </div>

            <div className="flex justify-between gap-4 my-8">

              <button
                className="w-1/2 bg-purple-700  text-white py-3 rounded-xl text-sm shadow-md font-extrabold text-center"
                aria-label="ادامه خرید"
                type="button"
                onClick={()=> alert('not implement')}
              >
                ادامه خرید
              </button>

              <button
                onClick={clearCart}
                className="w-1/2 border border-black text-black py-2 rounded-xl text-sm hover:bg-gray-100 transition"
                aria-label="حذف کل سبد خرید"
                type="button"
              >
                حذف سبد
              </button>
            </div>
          </>
        )}
      </div>

    </div>
  )
}

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout headerMode="back">{page}</AppLayout>
}
