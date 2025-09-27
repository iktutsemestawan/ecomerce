// pages/adminpages/AboutPage.jsx

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Tentang Aplikasi Administrasi</h1>
            
            <div className="bg-white p-8 rounded-xl shadow-2xl space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Aplikasi E-commerce Sederhana ini dikembangkan menggunakan tumpukan teknologi modern untuk memberikan pengalaman belanja yang cepat dan antarmuka manajemen yang intuitif.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Detail Teknologi</h2>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li><span className="font-semibold">Frontend:</span> React.js (dengan Vite)</li>
                    <li><span className="font-semibold">Styling:</span> Tailwind CSS (untuk desain yang responsif dan cepat)</li>
                    <li><span className="font-semibold">Routing:</span> React Router Dom v6</li>
                    <li><span className="font-semibold">Versi Aplikasi:</span> 1.0.0 (Beta)</li>
                    <li><span className="font-semibold">Tanggal Rilis:</span> September 2025</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 pt-4">Tim Pengembang</h2>
                <p className="text-gray-600">
                    Proyek ini dibuat dan dikelola oleh [Nama Anda atau Tim Pengembang].
                </p>
            </div>
        </div>
    );
}