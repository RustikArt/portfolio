// Page de connexion

import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/use-auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
interface LoginFormData {
email: string;
password: string;
}
const Login: React.FC = () => {
const { login, error } = useAuth();
const navigate = useNavigate();
const location = useLocation();
const { register, handleSubmit, formState: { errors, isSubmitting } } =
useForm<LoginFormData>();
// Récupérer l'URL de redirection si elle existe
const redirectTo = location.state?.redirect || '/account';
const onSubmit = async (data: LoginFormData) => {
try {
await login(data.email, data.password);
navigate(redirectTo);
} catch (err) {
// L'erreur est déjà gérée dans le contexte d'authentification
console.error('Erreur de connexion:', err);
}
};
return (
<div className="container mx-auto py-12 px-4">
<div className="max-w-md mx-auto bg-card rounded-lg p-8">
<h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
{error && (
<div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-md">
{error}
</div>
)}
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
<button
type="submit"
disabled={isSubmitting}
className="w-full py-2 bg-primary text-primary-foreground rounded-md
hover:bg-primary/90 transition-colors disabled:opacity-50"
>
{isSubmitting ? 'Connexion en cours...' : 'Se connecter'}
</button>
</form>
<div className="mt-6 text-center">
<p className="text-sm text-muted-foreground">
Vous n'avez pas de compte ?{' '}
<Link to="/register" className="text-primary hover:underline">
Créer un compte
</Link>
</p>
</div>
</div>
</div>
);
};
export default Login;