// pages/frontpages/Cart.jsx

import { Link } from "react-router-dom";
import { formatRupiah } from "../../data/products";
import { useCart } from "../../context/CartContext"; // Menggunakan Context

export default function Cart() {
    const { getCartDetails, removeFromCart } = useCart();
    const { detailedCart, total, itemCount } = getCartDetails();

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-8 border-b pb-4">
                Keranjang Belanja Anda ({itemCount} Item)
            </h1>

            {itemCount === 0 ? (
                <div className="text-center p-10 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <p className="text-2xl font-semibold mb-3">Keranjang Anda masih kosong 🛒</p>
                    <Link to="/" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 font-semibold transition">
                        Lihat Semua Produk
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-3/5 space-y-4">
                        {detailedCart.map((item) => (
                            <div key={item.productId} className="flex items-center border p-4 rounded-xl bg-gray-50 hover:shadow-md transition duration-200">
                                <img src={item.product.imageUrl} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg mr-4 border" />
                                <div className="flex-grow">
                                    <h3 className="font-bold text-lg text-gray-800">{item.product.name}</h3>
                                    <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                                    <p className="text-red-600 font-extrabold text-xl mt-1">{formatRupiah(item.subtotal)}</p>
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.productId)}
                                    className="text-red-500 hover:text-red-700 p-2 transition duration-200 font-semibold"
                                >
                                    &times; Hapus
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="lg:w-2/5 bg-blue-50 p-6 rounded-xl shadow-inner h-fit">
                        <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800">Ringkasan Pesanan</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Total Subtotal ({itemCount} Item):</span>
                                <span className="font-medium">{formatRupiah(total)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Ongkos Kirim:</span>
                                <span className="font-medium">Gratis</span>
                            </div>
                        </div>
                        <hr className="my-4 border-blue-200" />
                        <div className="flex justify-between text-2xl font-extrabold text-red-600">
                            <span>Total Pembayaran:</span>
                            <span>{formatRupiah(total)}</span>
                        </div>
                        
                        <Link 
                            to="/checkout"
                            className="mt-6 w-full flex justify-center bg-green-600 text-white text-xl py-3 rounded-lg hover:bg-green-700 transition duration-300 font-bold shadow-lg"
                        >
                            Lanjutkan ke Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}