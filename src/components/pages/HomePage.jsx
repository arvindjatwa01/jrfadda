import BannerMaster from "components/master/banner/BannerMaster";
import { Bell, Facebook, Instagram, Lightbulb, Linkedin, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Smile, Twitter, User, Youtube } from "lucide-react";
import React from "react";

import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 },
        },
    ],
};

const categories = [
    { title: "NET JRF", icon: "/images/category-icon.png", color: "blue", buttonColor: "bg-blue-600", borderColor: "border-b-blue-600" },
    { title: "NET JRF Hindi", icon: "/images/category-icon.png", color: "green", buttonColor: "bg-green-600", borderColor: "border-b-green-600" },
    { title: "SET", icon: "/images/category-icon.png", color: "yellow", buttonColor: "bg-yellow-500", borderColor: "border-b-yellow-500" },
    { title: "Assistant Professor", icon: "/images/category-icon.png", color: "teal", buttonColor: "bg-teal-600", borderColor: "border-b-teal-600" },
    { title: "NET JRF", icon: "/images/category-icon.png", color: "red", buttonColor: "bg-red-500", borderColor: "border-b-red-500" },
    { title: "NET JRF Hindi", icon: "/images/category-icon.png", color: "purple", buttonColor: "bg-purple-600", borderColor: "border-b-purple-600" },
    { title: "SET", icon: "/images/category-icon.png", color: "sky", buttonColor: "bg-sky-400", borderColor: "border-b-sky-400" },
    { title: "Assistant Professor", icon: "/images/category-icon.png", color: "gray", buttonColor: "bg-gray-800", borderColor: "border-b-gray-800" },
];

// Dummy image URLs (replace with real images)
const courses = [
    {
        id: 1,
        img: "/images/ytimage.jpeg", // Replace with your actual image
        title: "Premium Dec 2025 CS Batch (Paper1+Paper2)",
        price: "1599.00",
        originalPrice: "1899.00",
        discount: "10 % OFF",
    },
    {
        id: 2,
        img: "/images/ytimage.jpeg",
        title: "Premium Dec 2025 CS Batch (Paper1+Paper2)",
        price: "1599.00",
        originalPrice: "1899.00",
        discount: "10 % OFF",
    },
    {
        id: 3,
        img: "/images/ytimage.jpeg",
        title: "Premium Dec 2025 CS Batch (Paper1+Paper2)",
        price: "1599.00",
        originalPrice: "1899.00",
        discount: "10 % OFF",
    },
    {
        id: 4,
        img: "/images/ytimage.jpeg",
        title: "Premium Dec 2025 CS Batch (Paper1+Paper2)",
        price: "1599.00",
        originalPrice: "1899.00",
        discount: "10 % OFF",
    },
    {
        id: 5,
        img: "/images/ytimage.jpeg",
        title: "Premium Dec 2025 CS Batch (Paper1+Paper2)",
        price: "1599.00",
        originalPrice: "1899.00",
        discount: "10 % OFF",
    },
    {
        id: 6,
        img: "/images/ytimage.jpeg",
        title: "Premium Dec 2025 CS Batch (Paper1+Paper2)",
        price: "1599.00",
        originalPrice: "1899.00",
        discount: "10 % OFF",
    },
    {
        id: 7,
        img: "/images/ytimage.jpeg",
        title: "Premium Dec 2025 CS Batch (Paper1+Paper2)",
        price: "1599.00",
        originalPrice: "1899.00",
        discount: "10 % OFF",
    },
    {
        id: 8,
        img: "/images/ytimage.jpeg",
        title: "Premium Dec 2025 CS Batch (Paper1+Paper2)",
        price: "1599.00",
        originalPrice: "1899.00",
        discount: "10 % OFF",
    },
];

const channels = [
    {
        name: "JRFAdda",
        subscribers: "230K subscribers",
        image: "/images/jrf-logo.png",
    },
    {
        name: "JRFAdda Hindi Medium",
        subscribers: "230K subscribers",
        image: "/images/jrf-logo.png",
    },
    {
        name: "Commerce Spotlight by JRFAdda",
        subscribers: "230K subscribers",
        image: "/images/jrf-logo.png",
    },
];

const testimonialData = [
    {
        id: 1,
        name: "Rohit Sharma",
        role: "JRF Student",
        image: "images/aditi.jpg", // replace with actual image path
        text: "I'm Raushali Goyal, and JRFAdda's course was crucial in my UGC NET Public Administration journey. Aditi Mam's expert videos and doubt-clearing sessions were game-changers.",
    },
    {
        id: 2,
        name: "Priya Verma",
        role: "JRF Student",
        image: "images/aditi.jpg", // replace with actual image path
        text: "The study material and live sessions helped me tremendously to clear my UGC NET exams. The guidance was simply amazing.",
    },
    {
        id: 3,
        name: "Amit Kumar",
        role: "JRF Student",
        image: "images/aditi.jpg", // replace with actual image path
        text: "I highly recommend JRFAdda. The practice sessions and expert guidance really made a difference in my preparation journey.",
    },
];

const TestimonialCard = ({ name, role, image, text }) => (
    <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <img src={image} alt="User" className="w-20 h-20 rounded-full border-4 border-white shadow-md" />
        </div>
        <div className="max-w-sm h-[270px] rounded-tl-[5rem] rounded-br-[5rem] overflow-hidden text-white shadow-lg flex flex-col items-center text-center bg-gradient-to-r from-blue-400 to-blue-600 p-6 pt-16">
            <p className="text-sm mb-4">{text}</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">{name}</h3>
            <p className="text-sm">{role}</p>
            <div className="flex justify-center mt-4 space-x-1">
                {[...Array(5)].map((_, idx) => (
                    <svg key={idx} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448 1.287 3.955c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.371 2.448c-.785.57-1.84-.197-1.54-1.118l1.287-3.955-3.37-2.448c-.784-.57-.38-1.81.588-1.81h4.162l1.286-3.955z" />
                    </svg>
                ))}
            </div>
        </div>
    </div>
);

const CategoryCard = ({ name, icon }) => (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-1/4 flex flex-col items-center text-center space-y-4">
        <img src={icon} alt={name} className="w-12 h-12" />
        <h3 className="text-xl font-semibold">{name}</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Explore Category</button>
    </div>
);

const HomePage = () => {
    return (
        <div className="space-y-6">
            <BannerMaster />
            <div className="px-4 max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Select Your Course, Secure Your UGC NET <br />
                    Success Today!
                </h2>
                <div className="hidden lg:grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {categories.map((category, index) => (
                        <div className="border-2 border-[#126CB6] rounded-xl shadow-md relative">
                            <div className="bg-[url('/images/category-bg.png')] bg-cover rounded-xl p-6 relative text-center">
                                <h2 className="text-xl font-semibold text-[#126CB6] text-center my-3">{category.title}</h2>
                                <button className="text-white bg-blue-600 px-5 py-2 rounded-full font-medium hover:opacity-90 transition">Explore Category</button>
                            </div>

                            <div className="w-12 h-12 border-2 border-[#126CB6] rounded-full flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <img src={category.icon} alt="UGC jrf-logo" className="w-8 h-8 object-cover rounded-full border-4" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-lg p-6 border-2 flex flex-col border-b-4 ${item.borderColor} transition duration-300`}
                        >
                            <div className="flex items-center gap-x-3 mb-4">
                                <div className={`w-20 h-20 rounded-full bg-${item.color}-100 flex items-center justify-center`}>
                                    <img src="/images/jrf-category.png" alt="UGC jrf-logo" className="object-cover" />
                                </div>
                                <h2 className="text-3xl font-semibold text-[#126CB6] text-center">{item.title}</h2>
                            </div>

                            {/* Button */}
                            <button className={`text-white ${item.buttonColor} px-5 py-2 w-fit rounded-full font-medium hover:opacity-90 transition`}>Explore Category</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
