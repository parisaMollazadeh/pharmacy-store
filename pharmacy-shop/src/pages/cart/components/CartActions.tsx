import { ReactElement } from 'react';

interface CartActionsProps {
  onContinueShopping: () => void;
  onClearCart: () => void;
}

export function CartActions({
  onContinueShopping,
  onClearCart,
}: CartActionsProps): ReactElement {
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
