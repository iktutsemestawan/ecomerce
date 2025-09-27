// pages/frontpages/Dashboard.jsx (Perbaikan Filter Kategori)

import { Link } from "react-router-dom";
import { products, formatRupiah } from "../../data/products";
import { useState, useMemo } from "react"; // Tambahkan hook useState dan useMemo

// Komponen Kartu Produk (Tidak Berubah)
const ProductCard = ({ product }) => (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col">
        <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <h2 className="font-bold text-xl text-gray-800 truncate mb-1">{product.name}</h2>
            <p className="text-sm text-blue-600 font-semibold mb-2">{product.category}</p>
            <p className="text-2xl font-extrabold text-red-600 mb-4 mt-auto">
                {formatRupiah(product.price)}
            </p>
            <Link
                to={`/product/${product.id}`}
                className="w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
            >
                Lihat Detail
            </Link>
        </div>
    </div>
);

export default function Dashboard() {
    // State untuk menyimpan kategori yang dipilih
    const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");

    // Mendapatkan daftar unik kategori
    const uniqueCategories = useMemo(() => {
        const categories = products.map(p => p.category);
        return ["Semua Kategori", ...new Set(categories)];
    }, []);

    // Logika Filter Produk
    const filteredProducts = useMemo(() => {
        if (selectedCategory === "Semua Kategori") {
            return products;
        }
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]); // Hitung ulang hanya jika selectedCategory berubah

    return (
        <div>
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Produk Unggulan Hari Ini</h1>
            
            {/* Kontrol Filter Kategori (Dropdown Baru) */}
            <div className="mb-8 flex items-center space-x-3">
                <label htmlFor="categoryFilter" className="font-semibold text-gray-700">Filter Kategori:</label>
                <select
                    id="categoryFilter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                    {uniqueCategories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            {/* Akhir Kontrol Filter */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <div className="col-span-full text-center p-10 bg-gray-100 rounded-lg text-gray-600">
                        <p className="text-xl font-semibold">Tidak ada produk di kategori {selectedCategory}.</p>
                    </div>
                )}
            </div>
            
            <div className="text-center mt-10 p-4 bg-gray-200 rounded-lg text-gray-700">
                <p>Menampilkan {filteredProducts.length} produk.</p>
            </div>
        </div>
    );
}