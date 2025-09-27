// pages/adminpages/AdminOrders.jsx

import React, { useState } from 'react';
import { formatRupiah } from '../../data/products';

// Mock Data Pesanan
const initialOrders = [
    { id: 1005, customer: "Risa N.", total: 550000, status: "Pending", date: "2025-09-26" },
    { id: 1004, customer: "Tono W.", total: 1200000, status: "Diproses", date: "2025-09-25" },
    { id: 1003, customer: "Siti A.", total: 7500000, status: "Selesai", date: "2025-09-24" },
    { id: 1002, customer: "Budi H.", total: 1800000, status: "Dibatalkan", date: "2025-09-24" },
    { id: 1001, customer: "Andi S.", total: 450000, status: "Selesai", date: "2025-09-23" },
];

// Helper untuk Badge Status
const StatusBadge = ({ status }) => {
    let colorClass = '';
    switch (status) {
        case 'Selesai':
            colorClass = 'bg-green-100 text-green-800';
            break;
        case 'Diproses':
            colorClass = 'bg-yellow-100 text-yellow-800';
            break;
        case 'Pending':
            colorClass = 'bg-blue-100 text-blue-800';
            break;
        case 'Dibatalkan':
            colorClass = 'bg-red-100 text-red-800';
            break;
        default:
            colorClass = 'bg-gray-100 text-gray-800';
    }
    return (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClass}`}>
            {status}
        </span>
    );
};

export default function AdminOrders() {
    const [orders, setOrders] = useState(initialOrders);
    const statuses = ["Pending", "Diproses", "Selesai", "Dibatalkan"];

    // Fungsi untuk mengubah status pesanan
    const handleStatusChange = (orderId, newStatus) => {
        setOrders(orders.map(order => 
            order.id === orderId ? { ...order, status: newStatus } : order
        ));
        alert(`Status Pesanan #${orderId} diubah menjadi: ${newStatus}`);
    };

    // Statistik Pesanan
    const pendingCount = orders.filter(o => o.status === 'Pending').length;
    const completedCount = orders.filter(o => o.status === 'Selesai').length;

    return (
        <div>
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-4">Manajemen Pesanan ({orders.length})</h1>
            
            {/* Statistik Pesanan Mini */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                    <p className="text-sm text-gray-500">Total Pesanan</p>
                    <p className="text-3xl font-bold text-gray-800">{orders.length}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
                    <p className="text-sm text-gray-500">Pesanan Pending</p>
                    <p className="text-3xl font-bold text-yellow-600">{pendingCount}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                    <p className="text-sm text-gray-500">Pesanan Selesai</p>
                    <p className="text-3xl font-bold text-green-600">{completedCount}</p>
                </div>
            </div>

            {/* Tabel Pesanan */}
            <div className="bg-white p-6 rounded-xl shadow-2xl overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pelanggan</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 transition duration-150">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold">{order.customer}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-bold">{formatRupiah(order.total)}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <StatusBadge status={order.status} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <select
                                        value={order.status}
                                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                        className="border border-gray-300 p-1 rounded text-sm focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        {statuses.map(s => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}