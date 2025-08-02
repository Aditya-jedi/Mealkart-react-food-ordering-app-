import { useState } from 'react';
import Header from '../components/Header';
import Notice from '../components/Notice';
import SearchBar from '../components/SearchBar';
import FoodCard from '../components/FoodCard';
import Cart, { CartItem } from '../components/Cart';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { foodItems, FoodItem } from '../data/foodData';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Filter food items based on search term
  const filteredItems = foodItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show only first 6 items when not searching, all when searching
  const displayItems = searchTerm === '' ? filteredItems.slice(0, 6) : filteredItems;

  const handleAddToCart = (item: FoodItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        // If item already exists, increase quantity
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If new item, add with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handleCartClick = () => {
    document.getElementById('cart')?.scrollIntoView({ behavior: 'smooth' });
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <Header cartItemCount={cartItemCount} onCartClick={handleCartClick} />
      <Notice />
      
      <div className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <h1 className="hero-title">Welcome to MealKart</h1>
            <p className="hero-subtitle">Delicious Indian cuisine delivered to your doorstep</p>
          </div>
        </section>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {/* Food Items Section */}
        <section className="food-section">
          <div className="container">
            <h2 className="section-title">Our Delicious Menu</h2>
            
            {displayItems.length === 0 ? (
              <div className="empty-state">
                <p>No dishes found. Try searching for something else!</p>
              </div>
            ) : (
              <div className="food-grid">
                {displayItems.map(item => (
                  <FoodCard 
                    key={item.id} 
                    item={item} 
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      </div>

      <Contact />
      <Footer />
    </div>
  );
}
