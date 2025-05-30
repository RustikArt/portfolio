// Contexte pour le panier

price: 450,
category: "graphisme",
features: [
"Logo + Charte graphique",
"Cartes de visite et papeterie",
"Modèles de médias sociaux",
"Guide d'utilisation de la marque"
]
},
{
id: "retouche-portrait",
title: "Retouche portrait professionnelle",
description: "Retouche photo de haute qualité pour portraits",
price: 75,
category: "retouche",
features: [
"Correction de la peau",
"Ajustement des couleurs",
"Retouche des yeux et dents",
"Livraison sous 48h"
]
},
// Ajoutez d'autres services selon vos catégories
];
export const getServicesByCategory = (category: string): Service[] => {
return services.filter(service => service.category === category);
};
export const getServiceById = (id: string): Service | undefined => {
return services.find(service => service.id === id);
};
2. Création du dossier context
D'abord, créez un dossier src/context s'il n'existe pas déjà.
3. Création du contexte de panier
Créez le fichier src/context/CartContext.tsx :
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Service } from '../data/services';
interface CartItem extends Service {
quantity: number;
}
interface CartState {
items: CartItem[];
total: number;
}
type CartAction =
| { type: 'ADD_ITEM'; payload: Service }
| { type: 'REMOVE_ITEM'; payload: string }
| { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
| { type: 'CLEAR_CART' };
const initialState: CartState = {
items: [],
total: 0
};
const calculateTotal = (items: CartItem[]): number => {
return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};
const cartReducer = (state: CartState, action: CartAction): CartState => {
switch (action.type) {
case 'ADD_ITEM': {
const existingItemIndex = state.items.findIndex(item => item.id ===
action.payload.id);
if (existingItemIndex >= 0) {
const updatedItems = [...state.items];
updatedItems[existingItemIndex].quantity += 1;
return {
...state,
items: updatedItems,
total: calculateTotal(updatedItems)
};
} else {
const newItem = { ...action.payload, quantity: 1 };
const updatedItems = [...state.items, newItem];
return {
...state,
items: updatedItems,
total: calculateTotal(updatedItems)
};
}
}
case 'REMOVE_ITEM': {
const updatedItems = state.items.filter(item => item.id !== action.payload);
return {
...state,
items: updatedItems,
total: calculateTotal(updatedItems)
};
}
case 'UPDATE_QUANTITY': {
const { id, quantity } = action.payload;
if (quantity <= 0) {
return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
}
const updatedItems = state.items.map(item =>
item.id === id ? { ...item, quantity } : item
);
return {
...state,
items: updatedItems,
total: calculateTotal(updatedItems)
};
}
case 'CLEAR_CART':
return initialState;
default:
return state;
}
};
interface CartContextType {
cart: CartState;
addItem: (service: Service) => void;
removeItem: (id: string) => void;
updateQuantity: (id: string, quantity: number) => void;
clearCart: () => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children })
=> {
const [cart, dispatch] = useReducer(cartReducer, initialState, () => {
// Récupérer le panier du localStorage au chargement
const savedCart = localStorage.getItem('cart');
return savedCart ? JSON.parse(savedCart) : initialState;
});
// Sauvegarder le panier dans localStorage à chaque changement
useEffect(() => {
localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);
const addItem = (service: Service) => {
dispatch({ type: 'ADD_ITEM', payload: service });
};
const removeItem = (id: string) => {
dispatch({ type: 'REMOVE_ITEM', payload: id });
};
const updateQuantity = (id: string, quantity: number) => {
dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
};
const clearCart = () => {
dispatch({ type: 'CLEAR_CART' });
};
return (
<CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity,
clearCart }}>
{children}
</CartContext.Provider>
);
};
export const useCart = () => {
const context = useContext(CartContext);
if (context === undefined) {
throw new Error('useCart must be used within a CartProvider');
}
return context;
};