// Page d'inscription

import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/use-auth';
import { Link, useNavigate } from 'react-router-dom';
interface RegisterFormData {
name: string;
email: string;
password: string;
confirmPassword: string;
}
const Register: React.FC = () => {
const { register: registerUser, error } = useAuth();
const navigate = useNavigate();
const { register, handleSubmit, watch, formState: { errors, isSubmitting } } =
useForm<RegisterFormData>();
const password = watch('password');
const onSubmit = async (data: RegisterFormData) => {
try {
await registerUser(data.email, data.password, data.name);
navigate('/account');
} catch (err) {
// L'erreur est déjà gérée dans le contexte d'authentification
console.error('Erreur d\'inscription:', err);
}
};
return (
<div className="container mx-auto py-12 px-4">
<div className="max-w-md mx-auto bg-card rounded-lg p-8">
<h1 className="text-2xl font-bold mb-6 text-center">Créer un compte</h1>
{error && (
<div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-md">
{error}
</div>
)}
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
<div>
<label htmlFor="name" className="block text-sm font-medium mb-1">
Nom complet
</label>
<input
id="name"
type="text"
className="w-full p-2 border rounded-md"
{...register('name', {
required: 'Le nom est requis',
minLength: {
value: 2,
message: 'Le nom doit contenir au moins 2 caractères'
}
})}
/>
{errors.name && (
<p className="text-destructive text-sm mt-1">{errors.name.message}</p>
)}
</div>
<div>
<label htmlFor="email" className="block text-sm font-medium mb-1">
Email
</label>
<input
id="email"
type="email"
className="w-full p-2 border rounded-md"
{...register('email', {
required: 'L\'email est requis',
pattern: {
value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
message: 'Adresse email invalide'
}
})}
/>
{errors.email && (
<p className="text-destructive text-sm mt-1">{errors.email.message}</p>
)}
</div>
<div>
<label htmlFor="password" className="block text-sm font-medium mb-1">
Mot de passe
</label>
<input
id="password"
type="password"
className="w-full p-2 border rounded-md"
{...register('password', {
required: 'Le mot de passe est requis',
minLength: {
value: 6,
message: 'Le mot de passe doit contenir au moins 6 caractères'
}
})}
/>
{errors.password && (
<p className="text-destructive text-sm mt-1">{errors.password.message}
</p>
)}
</div>
<div>
<label htmlFor="confirmPassword" className="block text-sm font-medium
mb-1">
Confirmer le mot de passe
</label>
<input
id="confirmPassword"
type="password"
className="w-full p-2 border rounded-md"
{...register('confirmPassword', {
required: 'Veuillez confirmer votre mot de passe',
validate: value => value === password || 'Les mots de passe ne correspondent pas'
})}
/>
{errors.confirmPassword && (
<p className="text-destructive text-sm
mt-1">{errors.confirmPassword.message}</p>
)}
</div>
<button
type="submit"
disabled={isSubmitting}
className="w-full py-2 bg-primary text-primary-foreground rounded-md
hover:bg-primary/90 transition-colors disabled:opacity-50"
>
{isSubmitting ? 'Inscription en cours...' : 'Créer un compte'}
</button>
</form>
<div className="mt-6 text-center">
<p className="text-sm text-muted-foreground">
Vous avez déjà un compte ?{' '}
<Link to="/login" className="text-primary hover:underline">
Se connecter
</Link>
</p>
</div>
</div>
</div>
);
};
export default Register;