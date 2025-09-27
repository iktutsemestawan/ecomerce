// components/Sidebar.jsx (Penambahan Link Produk)

import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
    return (
        // Mengganti sintaks template literal yang kurang tepat
        <div className={`${sidebarOpen ? "block" : "hidden"} md:block w-64 bg-white shadow-xl h-full flex-shrink-0`}> 
            <div className="p-4 font-extrabold text-2xl text-blue-600 border-b">My Admin</div>
            <nav className="flex flex-col p-4 space-y-2">
                <Link to="/admin/dashboard" className="hover:bg-blue-100 p-3 rounded-lg text-gray-800 font-semibold transition duration-150">
                    Dashboard
                </Link>
                {/* Link Baru: Manajemen Produk */}
                <Link to="/admin/products" className="hover:bg-blue-100 p-3 rounded-lg text-gray-800 font-semibold transition duration-150">
                    Manajemen Produk
                </Link>
                <Link to="/admin/orders" className="hover:bg-blue-100 p-3 rounded-lg text-gray-800 font-semibold transition duration-150">
                    Manajemen Pesanan
                </Link>
                <Link to="/admin/about" className="hover:bg-blue-100 p-3 rounded-lg text-gray-800 font-semibold transition duration-150">
                    About App
                </Link>
            </nav>
        </div>
    );
}