import product1 from '../assets/images/product1.avif';
import product3 from '../assets/images/product3.jpg';
import product2 from '../assets/images/product2.jpeg';

export const products = [
    {
        id: 1,
        name: "Iphone 16",
        price: 7500000,
        description: "Ponsel pintar dengan performa tinggi, layar AMOLED 120Hz, dan baterai tahan lama.",
        imageUrl: product1,
        category: "Elektronik",
    },
    {
        id: 2,
        name: "Smartwatch Alpha V2",
        price: 1800000,
        description: "Jam tangan pintar dengan fitur kesehatan lengkap, GPS, dan desain elegan.",
        imageUrl: product2,
        category: "Elektronik",
    },
    {
        id: 3,
        name: "Hoodie Polos Deluxe",
        price: 350000,
        description: "Hoodie katun tebal, nyaman digunakan sehari-hari. Tersedia berbagai warna.",
        imageUrl: product3,
        category: "Fashion",
    },
    {
        id: 4,
        name: "Serum Wajah Glow Up",
        price: 150000,
        description: "Serum dengan Niacinamide dan Vitamin C, mencerahkan kulit dalam 7 hari.",
        imageUrl: "https://via.placeholder.com/400x300?text=Serum+Wajah",
        category: "Kecantikan",
    },
];

export const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};