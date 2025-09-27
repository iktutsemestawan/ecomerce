// pages/adminpages/AdminProducts.jsx

import React, { useState } from 'react';
import { products as initialProducts, formatRupiah } from '../../data/products';

export default function AdminProducts() {
    // Kita gunakan state lokal untuk simulasi manajemen data
    const [products, setProducts] = useState(initialProducts);

    // Simulasi fungsi hapus
    const handleDelete = (id) => {
        if (window.confirm(`Yakin ingin menghapus produk ID: ${id}? (Ini hanya simulasi)`)) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    // Simulasi fungsi tambah/edit (Hanya menampilkan alert)
    const handleAddEdit = (action, id) => {
        alert(`${action} produk ID ${id || 'Baru'}. Di implementasi nyata akan membuka modal/form.`);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h1 className="text-3xl font-extrabold text-gray-800">Manajemen Produk ({products.length})</h1>
                <button
                    onClick={() => handleAddEdit('Tambah', null)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold shadow-md"
                >
                    + Tambah Produk Baru
                </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-2xl overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Produk</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50 transition duration-150">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold">{product.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{product.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold">{formatRupiah(product.price)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-2">
                                    <button 
                                        onClick={() => handleAddEdit('Edit', product.id)}
                                        className="text-indigo-600 hover:text-indigo-900 px-3 py-1 border border-indigo-600 rounded-md transition"
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(product.id)}
                                        className="text-red-600 hover:text-red-900 px-3 py-1 border border-red-600 rounded-md transition"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}