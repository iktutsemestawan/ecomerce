// pages/adminpages/AdminDashboard.jsx

import { formatRupiah } from "../../data/products"; // Import formatRupiah yang sudah kita buat

// Mock Data Statistik
const stats = [
    { title: "Total Penjualan", value: 45200000, icon: "💰", color: "bg-green-500" },
    { title: "Pesanan Baru", value: 12, icon: "📦", color: "bg-blue-500" },
    { title: "Produk Terjual", value: 158, icon: "🛍️", color: "bg-yellow-500" },
    { title: "Pengunjung Hari Ini", value: 789, icon: "👀", color: "bg-purple-500" },
];

const StatCard = ({ title, value, icon, color }) => (
    <div className={`p-6 rounded-xl shadow-lg text-white ${color} flex items-center justify-between transition duration-300 transform hover:scale-[1.02]`}>
        <div>
            <p className="text-sm font-light uppercase">{title}</p>
            <p className="text-3xl font-bold mt-1">
                {title === "Total Penjualan" ? formatRupiah(value) : value.toLocaleString('id-ID')}
            </p>
        </div>
        <span className="text-5xl opacity-75">{icon}</span>
    </div>
);

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Ringkasan Utama E-commerce</h1>
            
            {/* Grid Statistik */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            {/* Area Grafik dan Tabel Sederhana */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Tabel Pesanan Terbaru */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold mb-4 text-gray-700">5 Pesanan Terbaru</h2>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Pesanan</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pelanggan</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[
                                { id: 1001, customer: "Andi S.", status: "Diproses", total: 450000 },
                                { id: 1002, customer: "Budi H.", status: "Selesai", total: 1800000 },
                                { id: 1003, customer: "Citra D.", status: "Pending", total: 7500000 },
                            ].map((order) => (
                                <tr key={order.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Selesai' ? 'bg-green-100 text-green-800' : order.status === 'Diproses' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{formatRupiah(order.total)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Ringkasan Produk */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold mb-4 text-gray-700">Ringkasan Stok Produk</h2>
                    <ul className="space-y-3">
                        <li className="flex justify-between border-b pb-2">
                            <span>Total Kategori</span>
                            <span className="font-semibold text-lg">4</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                            <span>Produk Total</span>
                            <span className="font-semibold text-lg">150</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-red-600 font-bold">Stok Menipis</span>
                            <span className="font-bold text-red-600 text-lg">7</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}