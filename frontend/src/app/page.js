"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/product`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Products
      </h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-lg font-semibold text-gray-700">
              {product.name}
            </span>
            <span className="text-lg text-gray-600">${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
