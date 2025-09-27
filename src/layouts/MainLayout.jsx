import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <div className="flex flex-col h-screen w-screen">
        <Navbar/>
        <header className="bg-gray-100 p-4 flex flex-col md:flex-row gap-2 justify-between items-center">
            <input
                type="text"
                placeholder="Cari produk..."
                className="w-full md:w-1/3 px-4 py-2 border rounded-lg"
            />
            <select className="px-4 py-2 border rounder-lg">
                <option>Semua Kategori</option>
                <option>Elektronik</option>
                <option>Fashion</option>
                <option>Kecantikan</option>
            </select>
        </header>
        <main className="flex-1 p-6">
            <Outlet/>
        </main>
        <footer className="bg-gray-800 text-white text-center p-4">
            <p>&copy; 2025 E-Comerce Simple App | Version 1.0</p>
        </footer>
    </div>
    );
}