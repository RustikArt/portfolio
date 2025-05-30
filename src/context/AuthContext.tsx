// Contexte pour l'authentification

import React, { createContext, useContext, useState, useEffect } from 'react';
interface User {
id: string;
email: string;
name: string;
orders?: Order[];
}
interface Order {
id: string;
date: string;
items: any[];
total: number;
status: 'pending' | 'completed' | 'cancelled';
}
interface AuthContextType {
user: User | null;
loading: boolean;
error: string | null;
login: (email: string, password: string) => Promise<void>;
register: (email: string, password: string, name: string) => Promise<void>;
logout: () => void;
updateProfile: (data: Partial<User>) => Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
// Simulation d'une base de données utilisateurs (à remplacer par Firebase ou autre)
let users: User[] = [];
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
useEffect(() => {
// Vérifier si l'utilisateur est déjà connecté
const savedUser = localStorage.getItem('user');
if (savedUser) {
setUser(JSON.parse(savedUser));
}
setLoading(false);
// Charger les utilisateurs simulés
const savedUsers = localStorage.getItem('users');
if (savedUsers) {
users = JSON.parse(savedUsers);
}
}, []);
const saveUsers = () => {
localStorage.setItem('users', JSON.stringify(users));
};
const login = async (email: string, password: string) => {
setLoading(true);
setError(null);
try {
// Simulation d'une API d'authentification
const foundUser = users.find(u => u.email === email);
if (!foundUser) {
throw new Error('Utilisateur non trouvé');
}
// Dans une vraie implémentation, vérifiez le mot de passe avec bcrypt
// Ici, nous simulons simplement
setUser(foundUser);
localStorage.setItem('user', JSON.stringify(foundUser));
} catch (err) {
setError(err instanceof Error ? err.message : 'Erreur de connexion');
throw err;
} finally {
setLoading(false);
}
};
const register = async (email: string, password: string, name: string) => {
setLoading(true);
setError(null);
try {
// Vérifier si l'email existe déjà
if (users.some(u => u.email === email)) {
throw new Error('Cet email est déjà utilisé');
}
// Créer un nouvel utilisateur
const newUser: User = {
id: `user_${Date.now()}`,
email,
name,
orders: []
};
// Ajouter l'utilisateur à notre "base de données"
users.push(newUser);
saveUsers();
// Connecter l'utilisateur
setUser(newUser);
localStorage.setItem('user', JSON.stringify(newUser));
} catch (err) {
setError(err instanceof Error ? err.message : 'Erreur d\'inscription');
throw err;
} finally {
setLoading(false);
}
};
const logout = () => {
setUser(null);
localStorage.removeItem('user');
};
const updateProfile = async (data: Partial<User>) => {
setLoading(true);
setError(null);
try {
if (!user) {
throw new Error('Utilisateur non connecté');
}
// Mettre à jour l'utilisateur
const updatedUser = { ...user, ...data };
// Mettre à jour dans notre "base de données"
const userIndex = users.findIndex(u => u.id === user.id);
if (userIndex >= 0) {
users[userIndex] = updatedUser;
saveUsers();
}
setUser(updatedUser);
localStorage.setItem('user', JSON.stringify(updatedUser));
} catch (err) {
setError(err instanceof Error ? err.message : 'Erreur de mise à jour du profil');
throw err;
} finally {
setLoading(false);
}
};
return (
<AuthContext.Provider value={{
user,
loading,
error,
login,
register,
logout,
updateProfile
}}>
{children}
</AuthContext.Provider>
);
};
export const useAuth = () => {
const context = useContext(AuthContext);
if (context === undefined) {
throw new Error('useAuth must be used within an AuthProvider');
}
return context;
};