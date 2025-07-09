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
    { title: "NET JRF", color: "blue", buttonColor: "bg-blue-600", borderColor: "border-blue-600" },
    { title: "NET JRF Hindi", color: "green", buttonColor: "bg-green-600", borderColor: "border-green-600" },
    { title: "SET", color: "yellow", buttonColor: "bg-yellow-500", borderColor: "border-yellow-500" },
    { title: "Assistant Professor", color: "teal", buttonColor: "bg-teal-600", borderColor: "border-teal-600" },
    { title: "NET JRF", color: "red", buttonColor: "bg-red-500", borderColor: "border-red-500" },
    { title: "NET JRF Hindi", color: "purple", buttonColor: "bg-purple-600", borderColor: "border-purple-600" },
    { title: "SET", color: "sky", buttonColor: "bg-sky-400", borderColor: "border-sky-400" },
    { title: "Assistant Professor", color: "gray", buttonColor: "bg-gray-800", borderColor: "border-gray-800" },
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

const HomePage = () => {
    return (
        <div className="space-y-6">
            <h4 className="text-2xl font-bold text-center">Top Bar</h4>
            <div className="px-4 py-10 max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Select Your Course, Secure Your UGC NET <br />
                    Success Today!
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-between border-b-4 ${item.borderColor} transition duration-300`}
                        >
                            {/* Icon Circle */}
                            <div className={`w-20 h-20 rounded-full bg-${item.color}-100 flex items-center justify-center mb-4`}>
                                <img src="/images/jrf-category.png" alt="UGC jrf-logo" className="w-24 h-24 object-cover" />
                            </div>

                            {/* Title */}
                            <h2 className="text-lg font-semibold text-center mb-4">{item.title}</h2>

                            {/* Button */}
                            <button className={`text-white ${item.buttonColor} px-5 py-2 rounded-full font-medium hover:opacity-90 transition`}>Explore Category</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-50 py-10">
                <div className="max-w-screen-xl  px-4 mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-8">UGC NET Hindi Course</h2>
                    <Slider {...settings}>
                        {courses.map((course) => (
                            <div key={course.id} className="px-3">
                                {" "}
                                {/* Add padding to each slide */}
                                <div className="border bg-white rounded-xl shadow-md">
                                    <div className="relative p-4">
                                        <img src={course.img} alt={`Course: ${course.title}`} className="w-full sm:h-40 object-fill rounded-xl" />
                                        <div className="py-4">
                                            <h3 className="text-sm font-medium mb-2 text-gray-900">{course.title}</h3>
                                            <div className="flex items-center space-x-3 mb-2">
                                                <p className="text-lg font-semibold text-gray-800">Rs.{course.price}</p>
                                                <p className="text-sm line-through text-red-500">Rs.{course.originalPrice}</p>
                                            </div>
                                            <a href="#" className="text-blue-600 font-medium text-sm hover:underline" aria-label={`Enroll in ${course.title}`}>
                                                Enroll Now →
                                            </a>
                                        </div>
                                        <div className="absolute top-5 left-0 bg-blue-600 text-white text-xs px-2 py-1 rounded">{course.discount}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="bg-white py-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Explore Our YouTube Channels for Expert Learning Resources</h2>
                </div>
                <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
                    {channels.map((channel, index) => (
                        <div key={index} className="bg-blue-600 rounded-2xl p-6 text-white text-center shadow-lg flex flex-col items-center space-y-4">
                            <div className="bg-white rounded-full">
                                <img src={channel.image} alt={`${channel.name} logo`} className="w-16 h-16 rounded-full" />
                            </div>
                            <h3 className="text-lg font-medium">{channel.name}</h3>
                            <div className="bg-red-600 text-white px-4 py-1.5 rounded-full flex items-center space-x-2 cursor-pointer">
                                <span className="text-sm font-semibold">{channel.subscribers}</span>
                                <Bell size={16} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-50">
                {/* STATS SECTION */}
                <section className="bg-[#f4f9f9] py-16">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 text-center gap-10">
                        {/* Stat 1 */}
                        <div>
                            <Smile className="mx-auto text-blue-600 w-12 h-12" />
                            <h3 className="text-3xl font-bold text-blue-600 mt-3">1653</h3>
                            <p className="text-lg font-medium mt-1 text-black">Happy Clients</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="border-l border-r border-gray-300 px-6">
                            <ShieldCheck className="mx-auto text-blue-600 w-12 h-12" />
                            <h3 className="text-3xl font-bold text-blue-600 mt-3">403</h3>
                            <p className="text-lg font-medium mt-1 text-black">Trusted Users</p>
                        </div>

                        {/* Stat 3 */}
                        <div>
                            <Lightbulb className="mx-auto text-blue-600 w-12 h-12" />
                            <h3 className="text-3xl font-bold text-blue-600 mt-3">953</h3>
                            <p className="text-lg font-medium mt-1 text-black">Projects Done</p>
                        </div>
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white rounded-3xl overflow-hidden shadow-xl">
                        {/* Form */}
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

                        {/* Contact Info */}
                        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold mb-2">
                                    Contact <span className="text-green-500">Now</span>
                                </h2>
                                <p className="text-sm mb-6">Contact our help desk for assistance</p>

                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-center gap-3">
                                        <Phone className="w-5 h-5" /> +91-1234567890
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Mail className="w-5 h-5" /> example@gmail.com
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5" /> Rajasthan, India
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-10">
                                <p className="text-2xl mb-3">Follow Us</p>
                                <div className="flex space-x-4 text-white">
                                    <a href="#" className="border-2 p-1.5 rounded-full bg-white">
                                        <Facebook className="w-6 h-6 font-bold text-blue-950 fill-blue-900" />
                                    </a>
                                    <a href="#" className="border-2 p-1.5 rounded-full bg-white">
                                        <Instagram className="w-6 h-6 font-bold text-blue-950" />
                                    </a>
                                    <a href="#" className="border-2 p-1.5 rounded-full bg-white">
                                        <Linkedin className="w-6 h-6 font-bold text-blue-950 fill-blue-950" />
                                    </a>
                                    <a href="#" className="border-2 p-1.5 rounded-full bg-white">
                                        <Twitter className="w-6 h-6 font-bold text-blue-950 fill-blue-950" />
                                    </a>
                                    <a href="#" className="border-2 p-1.5 rounded-full bg-white">
                                        <Youtube className="w-6 h-6 font-bold text-blue-950" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-facebook-f text-xl"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram text-xl"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-linkedin text-xl"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter text-xl"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-youtube text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="bg-white py-16 space-y-20">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Testimonials</h2>
                    <p className="mt-4 text-gray-600 max-w-5xl mx-auto">
                        Hear from successful UGC NET candidates who achieved their dreams with our expert guidance and resources. Discover how our platform transformed their
                        preparation journey and helped them secure top results.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
                    {testimonialData.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} name={testimonial.name} role={testimonial.role} image={testimonial.image} text={testimonial.text} />
                    ))}
                </div>
            </div>
            <div className="bg-blue-600 w-full text-white p-8">
                <div className="flex justify-between items-center">
                    {/* Left side text */}
                    <div className="max-w-lg">
                        <h1 className="text-3xl font-bold mb-4">Download JRFADDA App</h1>
                        <p className="text-lg mb-4">JRFAdda is perfect android app to crack NET and CSIR Exam. Hundreds of questions carefully selected for practice.</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Live & recorded classes available at ease</li>
                            <li>Dashboard for progress tracking</li>
                            <li>Lakhs of practice questions</li>
                        </ul>

                        <div className="flex gap-x-4">
                            <div className="flex cursor-pointer items-center">
                                <img
                                    className="w-44 h-auto"
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Download on Google Play"
                                />
                            </div>
                            <div className="flex cursor-pointer items-center">
                                <img
                                    className="w-44 h-auto"
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="Download on App Store"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side - App Screens */}
                    <div className="flex flex-col items-center">
                        {/* Phones with App content */}
                        <div className="flex space-x-4">
                            <div className="relative">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Android_robot.svg" alt="App Image" className="w-64 h-auto" />
                                {/* You can replace the img above with the actual images you want */}
                            </div>

                            <div className="relative">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Android_robot.svg" alt="App Image" className="w-64 h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-8 px-16">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <img src="/images/JRF-adda-logo.png" alt="Logo" className="h-12 object-contain bg-gray-100 fill-gray-100" />
                        <p className="text-md text-gray-600 max-w-md">
                            Lorem ipsum dolor sit amet consect elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consect elit sed
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="flex space-x-16">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Our Courses</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>UGC NET</li>
                                <li>UGC NET JRF Hindi</li>
                                <li>SET</li>
                                <li>Assistant Professor</li>
                                <li>Teaching Exam</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Useful Links</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>Contact</li>
                                <li>Privacy Policy</li>
                                <li>Terms Of Service</li>
                                <li>Site Map</li>
                                <li>Help Center</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Support Us</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>About us</li>
                                <li>Disclaimer</li>
                                <li>Press Releases</li>
                                <li>Privacy & Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 py-10">
                <h1 className="text-4xl font-semibold text-blue-600 mb-6">About JRFAdda</h1>
                <p className="text-lg text-gray-700 mb-6">
                    JRFadda is a premier online platform dedicated to empowering aspirants preparing for UGC NET and state eligibility exams. Our mission is to deliver
                    affordable, high-quality education and resources to help students achieve their academic and professional goals. With a comprehensive repository of study
                    materials, mock tests, previous year papers, and expert-guided courses, JRFadda has become a trusted companion for thousands of students across India.
                </p>

                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-6">
                    At JRFadda, we envision a future where quality education is accessible to everyone, regardless of their background. Our goal is to nurture the intellectual
                    growth of students, fostering a community of scholars who excel in their chosen fields.
                </p>

                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                    We aim to simplify the preparation journey for UGC NET and state exams by offering in-depth subject knowledge, personalized guidance, and the best study
                    materials. Through our affordable courses and expert mentoring, we strive to ensure that every aspirant has an equal opportunity to succeed.
                </p>

                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Why Choose JRFAdda</h2>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
                    <li>Expert-curated courses designed by top educators.</li>
                    <li>A vast collection of previous year papers, mock tests, and e-books.</li>
                    <li>Resources tailored for UGC NET aspirants and state eligibility exam candidates.</li>
                    <li>Accessible and economical learning solutions for students from all walks of life.</li>
                </ul>

                <p className="text-lg text-gray-700">
                    With a commitment to excellence and innovation, JRFAdda continues to set new benchmarks in education by bridging the gap between ambition and achievement.
                </p>
            </div>
        </div>
    );
};

export default HomePage;
