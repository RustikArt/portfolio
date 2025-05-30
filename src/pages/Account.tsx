import React from 'react';
import { useAuth } from '../hooks/use-auth';
import { Navigate, Link } from 'react-router-dom';
const Account: React.FC = () => {
const { user, logout } = useAuth();
// Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
if (!user) {
return <Navigate to="/login" />;
}
return (
<div className="container mx-auto py-12 px-4">
<div className="max-w-4xl mx-auto">
<div className="flex justify-between items-center mb-8">
<h1 className="text-3xl font-bold">Mon compte</h1>
<button
onClick={logout}
className="px-4 py-2 border border-destructive text-destructive rounded-
md hover:bg-destructive/10 transition-colors"
>
Se déconnecter
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="md:col-span-1">
<div className="bg-card rounded-lg p-6">
<h2 className="text-xl font-semibold mb-4">Informations personnelles</
h2>
<div className="space-y-3">
<div>
<p className="text-sm text-muted-foreground">Nom</p>
<p className="font-medium">{user.name}</p>
</div>
<div>
<p className="text-sm text-muted-foreground">Email</p>
<p className="font-medium">{user.email}</p>
</div>
</div>
<button className="mt-6 w-full py-2 bg-primary/10 text-primary rounded-
md hover:bg-primary/20 transition-colors">
Modifier mon profil
</button>
</div>
</div>
<div className="md:col-span-2">
<div className="bg-card rounded-lg p-6">
<h2 className="text-xl font-semibold mb-4">Mes commandes</h2>
{user.orders && user.orders.length > 0 ? (
<div className="space-y-4">
{user.orders.map(order => (
<div key={order.id} className="border rounded-md p-4">
<div className="flex justify-between items-center mb-2">
<div>
<p className="font-medium">Commande #{order.id}</p>
<p className="text-sm text-muted-foreground">
{new Date(order.date).toLocaleDateString()}
</p>
</div>
<span className={`px-3 py-1 rounded-full text-xs font-medium ${
order.status === 'completed'
? 'bg-green-100 text-green-800'
: order.status === 'cancelled'
? 'bg-red-100 text-red-800'
: 'bg-yellow-100 text-yellow-800'
}`}>
{order.status === 'completed'
? 'Terminée'
: order.status === 'cancelled'
? 'Annulée'
: 'En cours'}
</span>
</div>
<div className="border-t pt-2 mt-2">
<p className="text-sm">
{order.items.length} article{order.items.length > 1 ? 's' : ''}
</p>
<p className="font-medium mt-1">Total: {order.total} €</p>
</div>
</div>
))}
</div>
) : (
<div className="text-center py-8">
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-muted-
foreground">
<path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.
94.94-2.48 0-3.42L9 5Z"/>
<path d="M6 9.01V9"/>
<path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/>
</svg>
<h3 className="text-lg font-medium mt-4">Aucune commande</h3>
<p className="text-muted-foreground mt-1">
Vous n'avez pas encore passé de commande
</p>
<Link
to="/shop"
className="mt-4 inline-block px-4 py-2 bg-primary text-primary-
foreground rounded-md hover:bg-primary/90 transition-colors"
>
Parcourir la boutique
</Link>
</div>
)}
</div>
</div>
</div>
</div>
</div>
);
};
export default Account;