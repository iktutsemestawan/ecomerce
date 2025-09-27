import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
            <Link to="/" className="font-bold text-xl">
                MyShop
            </Link>
            <div className="flex gap-6">
                <Link to="/dashboard" className="hover:text-white">
                    Dashboard
                </Link>
                <Link to="/cart" className="hover:text-white">
                    Keranjang
                </Link>
                <Link to="/checkout" className="hover:text-white">
                    Checkout
                </Link>
            </div>
        </nav>
    );
}