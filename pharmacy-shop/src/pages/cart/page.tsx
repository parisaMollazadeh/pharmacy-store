import { ReactElement, useMemo, useCallback } from 'react';
import { useCart } from '@/context/CartContext';
import AppLayout from '@/layouts/AppLayout';
import { CartActions } from './components/CartActions';
import { CartSummary } from './components/CartSummary';
import { CartItemList } from './components/CartItemList';

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
                    <CartItemList items={items} />

                    <CartSummary itemCount={itemCount} totalPrice={totalPrice} />

                    <CartActions
                        onContinueShopping={handleContinueShopping}
                        onClearCart={clearCart}
                    />
                </>
            )}
        </section>
    );
}



CartPage.getLayout = function getLayout(page: ReactElement): ReactElement {
    return <AppLayout headerMode="back">{page}</AppLayout>;
};
