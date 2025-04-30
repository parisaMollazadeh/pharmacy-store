import { ReactElement } from 'react'
import AppLayout from '@/layouts/AppLayout'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { formatPrice } from '@/utils/price'

export default function CartPage() {
  const { items, clearCart, getTotalPrice } = useCart()

  return (
    <AppLayout headerMode="back">
      <div className="p-4">
        <h1 className="text-lg font-bold mb-4">سبد خرید</h1>

        {items.length === 0 ? (
          <p className="text-center text-gray-500">سبد خرید شما خالی است.</p>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <ProductCard key={item.id} medicine={item} />
              ))}
            </div>

            <div className="border-t mt-4 pt-4 text-sm text-gray-700">
              <div className="flex justify-between mb-1">
                <span>تعداد کالا</span>
                <span>{items.length} عدد</span>
              </div>
              <div className="flex justify-between">
                <span>قیمت</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
            </div>

            <div className="flex justify-between gap-4 mt-8">
              <button
                onClick={clearCart}
                className="w-1/2 border border-black text-black py-2 rounded-full text-sm hover:bg-gray-100 transition"
                aria-label="حذف کل سبد خرید"
                type="button"
              >
                حذف سبد
              </button>

              <Link
                href="/checkout"
                className="w-1/2 text-center bg-primary text-white py-2 rounded-full text-sm hover:bg-primary-dark transition"
              >
                ادامه خرید
              </Link>
            </div>
          </>
        )}
      </div>
    </AppLayout>
  )
}

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout headerMode="back">{page}</AppLayout>
}
