
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    description: "A beautiful, low-maintenance indoor plant that purifies the air.",
    price: 25,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b8e?w=500"
  },
  {
    id: 2,
    name: "Peace Lily",
    description: "An elegant flowering plant that brings freshness to your home.",
    price: 30,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500"
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    description: "A tropical plant with iconic split leaves, perfect for decoration.",
    price: 45,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500"
  },
  {
    id: 4,
    name: "Aloe Vera",
    description: "A versatile succulent known for its medicinal properties.",
    price: 20,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500"
  },
  {
    id: 5,
    name: "Pothos",
    description: "An easy-to-grow trailing plant suitable for any indoor space.",
    price: 18,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=500"
  },
  {
    id: 6,
    name: "Rubber Plant",
    description: "A striking indoor plant with glossy, dark green leaves.",
    price: 35,
    image: "https://images.unsplash.com/photo-1597055181300-1f0b1b1f0a7b?w=500"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      <div className="products-container">
        {plants.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img
              src={plant.image}
              alt={plant.name}
              className="product-image"
            />

            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p className="product-price">${plant.price.toFixed(2)}</p>

            <button
              onClick={() => handleAddToCart(plant)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
