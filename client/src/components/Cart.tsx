import { FoodItem } from '../data/foodData';

export interface CartItem extends FoodItem {
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onRemoveFromCart: (itemId: number) => void;
}

export default function Cart({ cartItems, onRemoveFromCart }: CartProps) {
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <section className="cart-section" id="cart">
      <div className="container">
        <h2 className="section-title">Your Cart</h2>
        
        <div id="cartItems">
          {cartItems.length === 0 ? (
            <div className="empty-state">
              <p>Your cart is empty. Add some delicious items!</p>
            </div>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-details">
                      Quantity: {item.quantity} × ₹{item.price} = ₹{item.price * item.quantity}
                    </div>
                  </div>
                  <button 
                    className="remove-btn" 
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              
              <div className="cart-total">
                <p>Total: <span className="total-amount">₹{totalPrice}</span></p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
