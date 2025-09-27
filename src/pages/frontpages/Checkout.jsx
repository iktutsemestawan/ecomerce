// pages/frontpages/Checkout.jsx

import { useNavigate } from "react-router-dom";
import { formatRupiah } from "../../data/products";
import { useCart } from "../../context/CartContext"; // Menggunakan Context

export default function Checkout() {
    const navigate = useNavigate();
    const { getCartDetails, clearCart } = useCart();
    const { total, detailedCart } = getCartDetails();

    const mockTotal = total; 

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        
        if (total === 0) {
            alert("Keranjang Anda kosong! Silakan tambahkan produk terlebih dahulu.");
            navigate('/');
            return;
        }

        // SIMULASI PROSES PEMBAYARAN SUKSES
        alert(`Pesanan senilai ${formatRupiah(mockTotal)} berhasil dibuat! Keranjang dibersihkan.`);
        
        clearCart(); // KOSONGKAN KERANJANG setelah pembayaran sukses
        
        navigate('/'); 
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-2xl">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-8 border-b pb-4">
                Proses Checkout
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">
                
                <div className="lg:w-2/3">
                    <h2 className="text-xl font-bold mb-4 text-gray-700">1. Detail Pengiriman</h2>
                    <form onSubmit={handlePlaceOrder} className="space-y-4">
                        {/* Formulir Pengiriman dan Pembayaran */}
                        <div><label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label><input type="text" required className="w-full p-3 border rounded-lg" /></div>
                        <div><label className="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label><input type="email" required className="w-full p-3 border rounded-lg" /></div>
                        <div><label className="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</label><textarea rows="3" required className="w-full p-3 border rounded-lg"></textarea></div>
                        <h2 className="text-xl font-bold pt-4 mb-4 text-gray-700">2. Metode Pembayaran</h2>
                        <select required className="w-full p-3 border rounded-lg"><option value="">Pilih Metode Pembayaran</option><option>Transfer Bank</option><option>Kartu Kredit/Debit</option><option>COD (Bayar di Tempat)</option></select>
                        
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white text-xl py-3 rounded-lg hover:bg-red-700 transition duration-300 font-bold shadow-lg"
                                disabled={total === 0}
                            >
                                Bayar Sekarang {formatRupiah(mockTotal)}
                            </button>
                        </div>
                    </form>
                </div>
                
                {/* Ringkasan Pesanan */}
                <div className="lg:w-1/3 bg-gray-100 p-6 rounded-xl shadow-inner h-fit">
                    <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800">Ringkasan Pesanan</h2>
                    <div className="space-y-2">
                        {detailedCart.map(item => (
                            <p key={item.productId} className="text-sm text-gray-700">{item.product.name} (x{item.quantity})</p>
                        ))}
                        <hr className="border-gray-300" />
                        <div className="flex justify-between text-2xl font-extrabold text-red-600">
                            <span>Total Bayar:</span>
                            <span>{formatRupiah(mockTotal)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}