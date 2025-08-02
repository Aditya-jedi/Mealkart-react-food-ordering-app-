import { FoodItem } from '../data/foodData';

interface FoodCardProps {
  item: FoodItem;
  onAddToCart: (item: FoodItem) => void;
}

export default function FoodCard({ item, onAddToCart }: FoodCardProps) {
  const handleAddToCart = () => {
    onAddToCart(item);
  };

  return (
    <div className="food-card">
      <img src={item.image} alt={item.name} className="food-image" />
      <div className="food-info">
        <h3 className="food-name">{item.name}</h3>
        <p className="food-price">₹{item.price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
