import React, { FC } from 'react';
import { Medicine } from '@/types/medicine';
import ProductCard from '@/components/ProductCard';

interface ProductListProps {
  medicines: Medicine[];
  onAdd: (medicine: Medicine) => void;
}

const ProductList: FC<ProductListProps> = ({ medicines, onAdd }) => (
  <section className="flex flex-col gap-4 mt-4" aria-label="Product list" role="list">
    {medicines.map((medicine) => (
      <ProductCard key={medicine.id} medicine={medicine} onAdd={onAdd} />
    ))}
  </section>
);

export default ProductList;
