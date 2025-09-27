// pages/frontpages/ProductDetail.jsx

import { useParams, useNavigate } from "react-router-dom";
import { products, formatRupiah } from "../../data/products";
import { useState } from "react";
import { useCart } from "../../context/CartContext"; // Menggunakan Context

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart(); // Ambil fungsi tambah ke keranjang
    const [quantity, setQuantity] = useState(1);
    
    const productId = parseInt(id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return (
            <div className="text-center p-10 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <h1 className="text-3xl font-bold">Produk Tidak Ditemukan (ID: {id})</h1>
                <button 
                    onClick={() => navigate('/')} 
                    className="mt-4 text-blue-600 hover:underline"
                >
                    Kembali ke Dashboard
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(productId, quantity); // Memanggil Context
        alert(`${quantity}x ${product.name} berhasil ditambahkan ke keranjang!`);
        navigate('/cart');
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-2xl">
            <button 
                onClick={() => navigate(-1)} 
                className="text-blue-600 hover:text-blue-800 transition mb-6 flex items-center"
            >
                &larr; Kembali
            </button>
            <div className="flex flex-col md:flex-row gap-10">
                
                <div className="md:w-1/2">
                    <img src={product.imageUrl} alt={product.name} className="w-full rounded-xl shadow-lg" />
                </div>
                
                <div className="md:w-1/2">
                    <p className="text-sm text-blue-600 font-semibold mb-2">{product.category}</p>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-3">{product.name}</h1>
                    <hr className="my-5" />
                    <h2 className="text-5xl font-extrabold text-red-600 mb-6">
                        {formatRupiah(product.price)}
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-8">
                        <label htmlFor="quantity" className="font-semibold text-lg">Jumlah:</label>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-20 p-2 border border-gray-300 rounded-lg text-center text-lg"
                        />
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-green-600 text-white text-xl py-3 rounded-lg hover:bg-green-700 transition duration-300 font-bold shadow-md hover:shadow-lg"
                    >
                        Tambahkan ke Keranjang
                    </button>
                </div>
            </div>
        </div>
    );
}