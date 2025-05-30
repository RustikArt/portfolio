// Page principale de la boutique

import React, { useState } from 'react';
import { services, getServicesByCategory, Service } from '../data/services';
import { useCart } from '../hooks/use-cart';
import { Link } from 'react-router-dom';
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
const { addItem } = useCart();
return (
<div className="bg-card rounded-lg overflow-hidden shadow-md
hover:shadow-lg transition-all">
<div className="aspect-video bg-muted relative">
{service.image ? (
<img
src={service.image}
alt={service.title}
className="w-full h-full object-cover"
/>
) : (
<div className="absolute inset-0 flex items-center justify-center text-muted-
foreground">
[Image: {service.title}]
</div>
)}
</div>
<div className="p-4">
<span className="text-sm text-primary font-medium">{service.category}</
span>
<h3 className="text-xl font-semibold mt-1">{service.title}</h3>
<p className="text-muted-foreground text-sm mt-2 line-clamp-3">
{service.description}
</p>
<div className="mt-3">
<ul className="text-sm space-y-1">
{service.features.slice(0, 2).map((feature, index) => (
<li key={index} className="flex items-center">
<span className="mr-2">✓</span> {feature}
</li>
))}
{service.features.length > 2 && (
<li className="text-primary">+ {service.features.length - 2} autres
avantages</li>
)}
</ul>
</div>
<div className="flex items-center justify-between mt-4">
<span className="text-xl font-bold">{service.price} €</span>
<button
onClick={() => addItem(service)}
className="px-4 py-2 bg-primary text-primary-foreground rounded-md
hover:bg-primary/90 transition-colors"
>
Ajouter au panier
</button>
</div>
</div>
</div>
);
};
const Shop: React.FC = () => {
const [activeCategory, setActiveCategory] = useState<string>('all');
const { cart } = useCart();
const categories = [
{ id: 'all', name: 'Tous les services' },
{ id: 'graphisme', name: 'Graphisme' },
{ id: 'retouche', name: 'Retouche photo' },
{ id: 'codage', name: 'Développement' },
{ id: 'video', name: 'Montage vidéo' },
{ id: 'musique', name: 'Production musicale' },
{ id: '3d', name: 'Modélisation 3D' },
];
const filteredServices = activeCategory === 'all'
? services
: getServicesByCategory(activeCategory);
return (
<div className="container mx-auto py-12 px-4">
<div className="flex justify-between items-center mb-8">
<h1 className="text-3xl font-bold">Boutique de services</h1>
<Link
to="/cart"
className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary
rounded-md hover:bg-primary/20 transition-colors"
>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
strokeLinecap="round" strokeLinejoin="round">
<circle cx="8" cy="21" r="1"/>
<circle cx="19" cy="21" r="1"/>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0
1.95-1.57l1.65-7.43H5.12"/>
</svg>
<span>{cart.items.length} articles</span>
</Link>
</div>
<div className="mb-8 overflow-x-auto">
<div className="flex space-x-2 p-1 bg-muted rounded-lg min-w-max">
{categories.map(category => (
<button
key={category.id}
onClick={() => setActiveCategory(category.id)}
className={`px-4 py-2 rounded-md transition-colors ${
activeCategory === category.id
? 'bg-background text-foreground shadow-sm'
: 'text-muted-foreground hover:text-foreground'
}`}
>
{category.name}
</button>
))}
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{filteredServices.map(service => (
<ServiceCard key={service.id} service={service} />
))}
</div>
</div>
);
};
export default Shop;