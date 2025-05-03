import React, { ReactElement } from 'react';
import { Medicine } from '@/types/medicine';
import ProductCard from '@/components/ProductCard';

interface CartItemListProps {
  items: Medicine[];
}

export function CartItemList({ items }: CartItemListProps): ReactElement {
  return (
    <ul className="flex flex-col gap-4" aria-label="لیست کالاهای سبد خرید" role="list">
      {items.map((item) => (
        <li key={item.id} role="listitem">
          <ProductCard medicine={item} />
        </li>
      ))}
    </ul>
  );
}
