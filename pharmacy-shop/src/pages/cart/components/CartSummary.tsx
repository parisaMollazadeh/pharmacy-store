import React, { ReactElement } from 'react';
import { formatPrice } from '@/utils/price';

interface CartSummaryProps {
  itemCount: number;
  totalPrice: number;
}

export function CartSummary({
  itemCount,
  totalPrice,
}: CartSummaryProps): ReactElement {
  return (
    <section
      aria-label="خلاصه سبد خرید"
      className="border-t border-gray-400 mt-6 pt-4 text-sm text-gray-700"
    >
      <div className="flex justify-between mb-2">
        <span>تعداد کالا</span>
        <span>{itemCount} عدد</span>
      </div>
      <div className="flex justify-between font-bold">
        <span>قیمت کل</span>
        <span>{formatPrice(totalPrice)}</span>
      </div>
    </section>
  );
}
