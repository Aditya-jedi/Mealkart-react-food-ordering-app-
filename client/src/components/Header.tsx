interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export default function Header({ cartItemCount, onCartClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">MealKart</a>
          <button onClick={onCartClick} className="cart-icon">
            🛒 Cart
            <span className="cart-badge">{cartItemCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
