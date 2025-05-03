import { ReactElement, useMemo, useCallback } from 'react';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import { formatPrice } from '@/utils/price';
import AppLayout from '@/layouts/AppLayout';

export default function CartPage(): ReactElement {
  const { items, clearCart, getTotalPrice } = useCart();

  /*
  In React 19, the new compiler and internal optimizations handle most memoization, so `useMemo` and `useCallback` are rarely.
  I included them here just as a precaution for performance-critical parts.
*/

  const totalPrice = useMemo(() => getTotalPrice(), [getTotalPrice, items]);
  const itemCount = useMemo(() => items.length, [items]);

  const handleContinueShopping = useCallback(() => {
    alert('ادامه خرید هنوز پیاده‌سازی نشده است.');
  }, []);

  return (
    <section className="px-4 py-6 max-w-4xl mx-auto">
      <h1 className="text-lg font-semibold text-gray-700 mb-4">سبد خرید</h1>

      {itemCount === 0 ? (
        <p className="text-center text-gray-500">سبد خرید شما خالی است.</p>
      ) : (
        <>
          <ul className="flex flex-col gap-4" aria-label="لیست کالاهای سبد خرید">
            {items.map((item) => (
              <li key={item.id}>
                <ProductCard medicine={item} />
              </li>
            ))}
          </ul>

          <Summary itemCount={itemCount} totalPrice={totalPrice} />

          <Actions
            onContinueShopping={handleContinueShopping}
            onClearCart={clearCart}
          />
        </>
      )}
    </section>
  );
}

function Summary({
  itemCount,
  totalPrice,
}: {
  itemCount: number;
  totalPrice: number;
}): ReactElement {
  return (
    <div className="border-t border-gray-400 mt-6 pt-4 text-sm text-gray-700">
      <div className="flex justify-between mb-2">
        <span>تعداد کالا</span>
        <span>{itemCount} عدد</span>
      </div>
      <div className="flex justify-between font-bold">
        <span>قیمت کل</span>
        <span>{formatPrice(totalPrice)}</span>
      </div>
    </div>
  );
}

function Actions({
  onContinueShopping,
  onClearCart,
}: {
  onContinueShopping: () => void;
  onClearCart: () => void;
}): ReactElement {
  return (
    <div className="flex justify-between gap-4 mt-8">
      <button
        type="button"
        onClick={onContinueShopping}
        aria-label="ادامه خرید"
        className="w-1/2 bg-purple-700 text-white py-3 rounded-xl text-sm shadow-md font-extrabold transition-colors hover:bg-purple-800"
      >
        ادامه خرید
      </button>

      <button
        type="button"
        onClick={onClearCart}
        aria-label="حذف کل سبد خرید"
        className="w-1/2 border border-black text-black py-3 rounded-xl text-sm hover:bg-gray-100 transition-colors"
      >
        حذف سبد
      </button>
    </div>
  );
}

CartPage.getLayout = function getLayout(page: ReactElement): ReactElement {
  return <AppLayout headerMode="back">{page}</AppLayout>;
};
