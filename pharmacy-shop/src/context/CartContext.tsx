import { createContext, useContext, useState, ReactNode } from 'react'
import { Medicine } from '@/types/medicine'

interface CartContextType {
  items: Medicine[]
  addToCart: (item: Medicine) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Medicine[]>([])

  const addToCart = (item: Medicine) => {
    
    if (!items.find((m) => m.id === item.id)) {
      setItems([...items, item])
    }
  }

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.price, 0)
  }

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('Cart context must be used inside CartProvider')
  return context
}
