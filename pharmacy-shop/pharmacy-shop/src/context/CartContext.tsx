import { createContext, useContext, useState, ReactNode } from 'react'

interface CartContextType {
  items: number[]
  addToCart: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<number[]>([])

  const addToCart = (id: number) => {
    if (!items.includes(id)) {
      setItems([...items, id])
    }
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{ items, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('Cart context must be used inside CartProvider')
  return context
}
