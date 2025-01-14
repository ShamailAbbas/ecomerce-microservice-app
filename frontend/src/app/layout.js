import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "E-Commerce App",
  description: "A micro services based e-commerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar /> {/* Add the Navbar component */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
