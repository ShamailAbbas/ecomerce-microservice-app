"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/order`
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Orders
      </h1>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li
            key={order.id}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-lg font-semibold text-gray-700">
              {order.product}
            </span>
            <span className="text-lg text-gray-600">${order.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
