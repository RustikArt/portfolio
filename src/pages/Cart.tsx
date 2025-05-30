// Page du panier

import React from 'react';
import { useCart } from '../hooks/use-cart';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
const CartItem: React.FC<{
id: string;
title: string;
price: number;
quantity: number;
onRemove: () => void;
onUpdateQuantity: (quantity: number) => void;
}> = ({ id, title, price, quantity, onRemove, onUpdateQuantity }) => {
return (
<div className="flex items-center justify-between py-4 border-b">
<div className="flex-1">
<h3 className="font-medium">{title}</h3>
<p className="text-sm text-muted-foreground">{price} € par unité</p>
</div>
<div className="flex items-center space-x-4">
<div className="flex items-center border rounded-md">
<button
onClick={() => onUpdateQuantity(quantity - 1)}
className="px-3 py-1 text-lg"
disabled={quantity <= 1}
>
-
</button>
<span className="px-3 py-1">{quantity}</span>
<button
onClick={() => onUpdateQuantity(quantity + 1)}
className="px-3 py-1 text-lg"
>
+
</button>
</div>
<span className="font-medium">{price * quantity} €</span>
<button
onClick={onRemove}
className="text-destructive hover:text-destructive/80"
>
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
strokeLinecap="round" strokeLinejoin="round">
<path d="M3 6h18"/>
<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
</svg>
</button>
</div>
</div>
);
};
const Cart: React.FC = () => {
const { cart, removeItem, updateQuantity, clearCart } = useCart();
const { user } = useAuth();
const navigate = useNavigate();
const handleCheckout = () => {
if (!user) {
// Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
navigate('/login', { state: { redirect: '/checkout' } });
} else {
// Rediriger vers la page de paiement
navigate('/checkout');
}
};
if (cart.items.length === 0) {
return (
<div className="container mx-auto py-12 px-4 text-center">
<h1 className="text-3xl font-bold mb-6">Votre panier</h1>
<div className="bg-card rounded-lg p-8 max-w-md mx-auto">
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"
viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-muted-
foreground">
<circle cx="8" cy="21" r="1"/>
<circle cx="19" cy="21" r="1"/>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0
1.95-1.57l1.65-7.43H5.12"/>
</svg>
<h2 className="text-xl font-medium mt-4">Votre panier est vide</h2>
<p className="text-muted-foreground mt-2">Découvrez nos services et
ajoutez-les à votre panier</p>
<Link
to="/shop"
className="mt-6 inline-block px-6 py-3 bg-primary text-primary-foreground
rounded-md hover:bg-primary/90 transition-colors"
>
Parcourir la boutique
</Link>
</div>
</div>
);
}
return (
<div className="container mx-auto py-12 px-4">
<h1 className="text-3xl font-bold mb-8">Votre panier</h1>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<div className="bg-card rounded-lg p-6">
{cart.items.map(item => (
<CartItem
key={item.id}
id={item.id}
title={item.title}
price={item.price}
quantity={item.quantity}
onRemove={() => removeItem(item.id)}
onUpdateQuantity={(quantity) => updateQuantity(item.id, quantity)}
/>
))}
<div className="mt-6 flex justify-between">
<button
onClick={clearCart}
className="text-sm text-muted-foreground hover:text-foreground
transition-colors"
>
Vider le panier
</button>
<Link
to="/shop"
className="text-sm text-primary hover:text-primary/80 transition-colors"
>
Continuer mes achats
</Link>
</div>
</div>
</div>
<div className="lg:col-span-1">
<div className="bg-card rounded-lg p-6 sticky top-24">
<h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
<div className="space-y-3 mb-6">
<div className="flex justify-between">
<span className="text-muted-foreground">Sous-total</span>
<span>{cart.total} €</span>
</div>
<div className="flex justify-between">
<span className="text-muted-foreground">TVA (20%)</span>
<span>{(cart.total * 0.2).toFixed(2)} €</span>
</div>
<div className="border-t pt-3 flex justify-between font-semibold">
<span>Total</span>
<span>{(cart.total * 1.2).toFixed(2)} €</span>
</div>
</div>
<button
onClick={handleCheckout}
className="w-full py-3 bg-primary text-primary-foreground rounded-md
hover:bg-primary/90 transition-colors"
>
Passer à la caisse
</button>
{!user && (
<p className="text-sm text-muted-foreground mt-4 text-center">
Vous devrez vous connecter pour finaliser votre commande
</p>
)}
</div>
</div>
</div>
</div>
);
};
export default Cart;