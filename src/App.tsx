import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
const App: React.FC = () => {
return (
<ThemeProvider defaultTheme="light">
<AuthProvider>
<CartProvider>
<Router>
<div className="flex flex-col min-h-screen">
<Header />
<main className="flex-grow">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/contact" element={<Contact />} />
<Route path="/reviews" element={<Reviews />} />
<Route path="/shop" element={<Shop />} />
<Route path="/cart" element={<Cart />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/account" element={<Account />} />
</Routes>
</main>
<Footer />
</div>
</Router>
</CartProvider>
</AuthProvider>
</ThemeProvider>
);
};

export default App;
// export default App;