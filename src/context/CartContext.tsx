// src/context/CartContext.tsx

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Service } from '../data/services'; // 👈 Import du type Service

// Définition du type d'un article dans le panier
interface CartItem extends Service {
  quantity: number;
}

// Structure du panier global
interface CartState {
  items: CartItem[];
  total: number;
}

// Actions possibles sur le panier
type CartAction =
  | { type: 'ADD_ITEM'; payload: Service }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

// État initial du panier
const initialState: CartState = {
  items: [],
  total: 0,
};

// Fonction pour recalculer le total
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

// Reducer = logique centrale de modification de l'état du panier
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex].quantity += 1;
        return { items: updatedItems, total: calculateTotal(updatedItems) };
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        const updatedItems = [...state.items, newItem];
        return { items: updatedItems, total: calculateTotal(updatedItems) };
      }
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return { items: updatedItems, total: calculateTotal(updatedItems) };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }
      const updatedItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      return { items: updatedItems, total: calculateTotal(updatedItems) };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}

// Type pour exposer les fonctions du contexte
interface CartContextType {
  cart: CartState;
  addItem: (service: Service) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

// Création du contexte
const CartContext = createContext<CartContextType | undefined>(undefined);

// Fournisseur du panier
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState, () => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (service: Service) => dispatch({ type: 'ADD_ITEM', payload: service });
  const removeItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const updateQuantity = (id: string, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook pour accéder au contexte du panier
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
