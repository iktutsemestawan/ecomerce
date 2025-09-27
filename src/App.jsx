// App.jsx (Perbaikan Rute Admin)

import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";
import AboutPage from "./pages/adminpages/AboutPage";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/frontpages/Dashboard";
import ProductDetail from "./pages/frontpages/ProductDetail";
import Cart from "./pages/frontpages/Cart";
import Checkout from "./pages/frontpages/Checkout";
// Import halaman baru:
import AdminProducts from "./pages/adminpages/AdminProducts"; 
import AdminOrders from "./pages/adminpages/AdminOrders";

function App() {
    return (
        <Routes>
            {/* Rute Frontend */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>
            
            {/* Rute Admin Area */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="about" element={<AboutPage />} />
                {/* Tambahkan Rute Produk Admin */}
                <Route path="products" element={<AdminProducts />} /> 
                <Route path="orders" element={<AdminOrders />} /> 
            </Route>
        </Routes>
    );
}

export default App;