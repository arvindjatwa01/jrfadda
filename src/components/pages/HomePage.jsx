import BannerMaster from "components/master/banner/BannerMaster";
import {
    ArrowLeft,
    ArrowRight,
    Bell,
    BellRing,
    ChevronLeft,
    ChevronRight,
    Facebook,
    Instagram,
    Lightbulb,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    ShieldCheck,
    Smile,
    Twitter,
    User,
    Youtube,
} from "lucide-react";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MantorsSection from "components/master/dashboard/MantorsSection";
import Carousel from "components/common/Carousel";
import MentorsCarousel from "components/master/dashboard/MentorsCarousel";

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

const mentors = [
    {
        name: "Aditi Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/aditi.jpg",
        showReadMore: true,
    },
    {
        name: "Aayushi Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/aayushi.png",
        social: true,
    },
    {
        name: "Priyanka Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/priyanka.jpg",
        social: true,
    },
    {
        name: "Juhi Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/juhi.png",
        social: true,
    },
    // {
    //     name: "Juhi Ma'am",
    //     subject: "Computer Science (JRF)",
    //     image: "/images/mentor/juhi.png",
    //     social: true,
    // },
    // {
    //     name: "Juhi Ma'am",
    //     subject: "Computer Science (JRF)",
    //     image: "/images/mentor/juhi.png",
    //     social: true,
    // },
    // {
    //     name: "Juhi Ma'am",
    //     subject: "Computer Science (JRF)",
    //     image: "/images/mentor/juhi.png",
    //     social: true,
    // },
];

const testimonials = [
    {
        name: "Rohit Sharma",
        image: "/images/mentor/aditi.jpg", // Replace with actual image path or URL
        feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat dui...",
    },
    {
        name: "Ritu",
        image: "/images/mentor/aayushi.png", // Replace with actual image path or URL
        feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat dui...",
    },
    {
        name: "Raushali Goyal",
        image: "/images/mentor/priyanka.jpg", // Replace with actual image path or URL
        feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat dui...",
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
    const prevRef = useRef(null);
    const nextRef = useRef(null);
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
                        <div key={index} className={`bg-white rounded-xl shadow-lg p-6 border-2 flex flex-col border-b-4 ${item.borderColor} transition duration-300`}>
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
            <div>
                {/* <MantorsSection /> */}
                {/* <section className="relative py-12 px-4 bg-cover bg-no-repeat" style={{ backgroundImage: `url(/images/category-bg.png)` }}>
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-gray-800">Expert Mentor</h2>
                        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
                            At JRFadda, our experienced mentors are here to provide personalized guidance and support to help you master the UGC NET and SET exams. Start your
                            journey to success today!
                        </p>
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        <div ref={prevRef} className="absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700">
                            <ChevronLeft />
                        </div>
                        <div ref={nextRef} className="absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700">
                            <ChevronRight />
                        </div>

                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            onBeforeInit={(swiper) => {
                                if (typeof swiper.params.navigation !== "boolean") {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 }, // 👈 Mobile
                                640: { slidesPerView: 1 }, // 👈 Small screens
                                768: { slidesPerView: 2 }, // 👈 Tablets
                                1024: { slidesPerView: 4 }, // 👈 Desktops
                            }}
                        >
                            {mentors.map((mentor, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <img src={mentor.image} alt={mentor.name} className="w-full object-cover" />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800">{mentor.name}</h3>
                                            <p className="text-sm text-gray-600 font-semibold">{mentor.subject}</p>

                                            {mentor.showReadMore && (
                                                <a href="#" className="text-blue-600 text-sm mt-2 inline-block">
                                                    Read More &rarr;
                                                </a>
                                            )}

                                            {mentor.social && (
                                                <div className="flex justify-start gap-4 mt-4 text-gray-600">
                                                    <a href="#" className="bg-gray-200 p-2 rounded-full">
                                                        <Facebook className="w-5 h-5" />
                                                    </a>
                                                    <a href="#" className="bg-gray-200 p-2 rounded-full">
                                                        <Instagram className="w-5 h-5" />
                                                    </a>
                                                    <a href="#" className="bg-gray-200 p-2 rounded-full">
                                                        <Twitter className="w-5 h-5" />
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section> */}

                <section className="py-12 px-4 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${`/images/category-bg.png`})` }}>
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-gray-800">Expert Mentor</h2>
                        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
                            At JRFadda, our experienced mentors are here to provide personalized guidance and support to help you master the UGC NET and SET exams. Start your
                            journey to success today!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {mentors.map((mentor, index) => (
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={mentor.image} alt={mentor.name} className="w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{mentor.name}</h3>
                                    <p className="text-sm text-gray-600 font-semibold">{mentor.subject}</p>

                                    {mentor.showReadMore && (
                                        <a href="#" className="text-blue-600 text-sm mt-2 inline-block">
                                            Read More &rarr;
                                        </a>
                                    )}

                                    {mentor.social && (
                                        <div className="flex justify-start gap-4 mt-4 text-gray-600">
                                            <a href="#" className="bg-gray-200 p-2 rounded-full">
                                                <Facebook className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="bg-gray-200 p-2 rounded-full">
                                                <Instagram className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="bg-gray-200 p-2 rounded-full">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8 space-x-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">&lt;</button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">&gt;</button>
                    </div>
                </section>
                <div className="bg-blue-100 py-10 px-4 text-center">
                    <h2 className="text-xl font-semibold mb-8">Explore Our YouTube Channels for Expert Learning Resources</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        {channels.map((channel, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xs flex flex-col items-center">
                                <div className="mb-4 border rounded-full shadow-2xl">
                                    <img src="/images/jrf-logo.png" alt="Channel Icon" className="w-16 h-16 mx-auto" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">{channel.name}</h3>
                                <button className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                                    {channel.subscribers}
                                    <BellRing className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto p-6 bg-white">
                <h2 className="text-4xl font-bold text-center mb-10">Offline Center</h2>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="md:w-1/2 space-y-4">
                        <img
                            src="/images/office-center.png"
                            alt="JRFADDA storefront illuminated at night with hanging decorative lights and branding including 'JRFADDA' and 'Our Team'"
                            className="w-full h-auto rounded-lg object-cover"
                        />
                        <div>
                            <a href="#" className="text-blue-700 font-bold text-lg hover:underline" aria-label="Link to JRFADDA Jaipur">
                                JRFADDA JAIPUR
                            </a>
                        </div>
                        <p className="text-sm">
                            <strong>Address:</strong> 3rd Floor 23, 24, Gopalpura Bypass Rd, near Triveni Flyover 25, Vishveshvariya Nagar, Arjun Nagar, Jaipur, Rajasthan
                            302018
                        </p>
                        <div className="flex items-center space-x-4">
                            <a
                                // href="https://www.google.com/maps/dir/?api=1&destination=3rd+Floor+23,+24,+Gopalpura+Bypass+Rd,+near+Triveni+Flyover+25,+Vishveshvariya+Nagar,+Arjun+Nagar,+Jaipur,+Rajasthan+302018"
                                href="https://www.google.com/maps/dir//3rd+Floor+23,+24,+Gopalpura+Bypass+Rd,+near+Triveni+Flyover+25,+Vishveshvariya+Nagar,+Arjun+Nagar,+Jaipur,+Rajasthan+302018/@26.8668915,75.7024022,23668m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x396db5b54197f66f:0xc061e0dac7b78867!2m2!1d75.7849003!2d26.8669807?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                                aria-label="Get directions to JRFADDA Jaipur"
                            >
                                Directions
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="tel:+911234567890"
                                className="inline-flex items-center px-3 py-2 bg-gray-200 rounded-full text-sm font-semibold text-gray-800 hover:bg-gray-300 transition"
                                aria-label="Call JRFADDA Jaipur phone number"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 5h2l3.6 7.59a1 1 0 01-.26 1.11l-1.75 1.75a11.05 11.05 0 005.45 5.45l1.75-1.75a1 1 0 011.11-.26L19 19v2a2 2 0 01-2 2c-7.18 0-13-5.82-13-13a2 2 0 012-2z"
                                    />
                                </svg>
                                +91 12345 67890
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 rounded-lg overflow-hidden aspect-[4/3] shadow-md">
                        <iframe
                            title="Google Map showing location of JRFADDA Jaipur at Gopalpura Bypass Rd in Jaipur, Rajasthan"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAWJRq40ao0OgwMGU5hwzeYvupHGYBkvoU&q=3rd+Floor+23,+24,+Gopalpura+Bypass+Rd,+near+Triveni+Flyover+25,+Vishveshvariya+Nagar,+Arjun+Nagar,+Jaipur,+Rajasthan+302018"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50">
                <div className="max-w-6xl mx-auto bg-blue-50 py-16 px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl overflow-hidden shadow-xl">
                        <div className="bg-white p-8">
                            <h2 className="text-3xl font-bold mb-2">
                                Get In <span className="text-blue-600">Touch</span>
                            </h2>
                            <p className="text-gray-600 mb-8">Let us know how we can assist you</p>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Your Name</label>
                                    <div className="relative">
                                        <User className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="Enter Your Name"
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-100 outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-100 outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Enter Message</label>
                                    <div className="relative">
                                        <MessageCircle className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
                                        <textarea
                                            rows="4"
                                            placeholder="Enter Message"
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-100 outline-none"
                                        ></textarea>
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-blue-700 text-white font-medium py-3 rounded-full flex items-center justify-center space-x-2">
                                    <span>→</span> <span>Submit</span>
                                </button>
                            </form>
                        </div>
                        <div className="bg-blue-700 text-white p-8 md:px-8 md:py-20 flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-3xl font-bold mb-2">Contact Now</h2>
                                <p className="text-sm mb-6">Contact our help desk for assistance</p>

                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-center gap-3">
                                        <Phone className="w-5 h-5" />
                                        <div className="flex flex-col">
                                            <span>Phone Number</span>
                                            <span className="font-semibold">+91-1234567890</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Mail className="w-5 h-5" />
                                        <div className="flex flex-col">
                                            <span>Email</span>
                                            <span className="font-semibold">example@gmail.com</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5" />
                                        <div className="flex flex-col">
                                            <span>Address</span>
                                            <span className="font-semibold">Rajasthan, India</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-10 lg:mt-0">
                                <p className="text-2xl mb-3">Follow Us</p>
                                <div className="flex flex-wrap space-x-4 text-white">
                                    <a href="#" className="border-2 p-2 rounded-full bg-white">
                                        <Facebook className="w-6 h-6 font-bold text-blue-950" />
                                    </a>
                                    <a href="#" className="border-2 p-2 rounded-full bg-white">
                                        <Instagram className="w-6 h-6 font-bold text-blue-950" />
                                    </a>
                                    <a href="#" className="border-2 p-2 rounded-full bg-white">
                                        <Linkedin className="w-6 h-6 font-bold text-blue-950" />
                                    </a>
                                    <a href="#" className="border-2 p-2 rounded-full bg-white">
                                        <Twitter className="w-6 h-6 font-bold text-blue-950" />
                                    </a>
                                    <a href="#" className="border-2 p-2 rounded-full bg-white">
                                        <Youtube className="w-6 h-6 font-bold text-blue-950" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">Our Customer Feedback</h2>
                <div className="relative">
                    <div className="flex space-x-6 overflow-x-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-shrink-0 w-80 p-4 border rounded-lg shadow-md bg-white">
                                <div className="flex items-center space-x-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                                    <div>
                                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                        <div className="flex text-yellow-500">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <svg
                                                    key={starIndex}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill={starIndex < 4 ? "currentColor" : "none"}
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path fillRule="evenodd" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">{testimonial.feedback}</p>
                            </div>
                        ))}
                    </div>

                    <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white px-3 py-2 rounded-full">
                        <ArrowLeft size={24} />
                    </button>
                    <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white px-3 py-2 rounded-full">
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div> */}

            <section className="py-12 px-4 bg-cover bg-no-repeat">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Download India's Best Learning App</h2>
                    <p className="text-gray-700 font-semibold text-base max-w-2xl mx-auto">We're available on Android devices and platforms. Study from anywhere at your convenience.</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
