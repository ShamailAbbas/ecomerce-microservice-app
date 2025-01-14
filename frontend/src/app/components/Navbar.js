import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/orders"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Orders
            </Link>
            <Link
              href="/notifications"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Notifications
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
