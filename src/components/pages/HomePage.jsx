import React from "react";

import { BellRing, ChevronRight, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter, User, Youtube } from "lucide-react";

import Carousel from "components/common/Carousel";
import BannerMaster from "components/master/banner/BannerMaster";
import MantorsSection from "components/master/dashboard/MantorsSection";

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
    {
        name: "Rakesh Sharma",
        image: "/images/mentor/priyanka.jpg", // Replace with actual image path or URL
        feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat dui...",
    },
];

// Feature cards data without absolute positioning
const featureCards = [
    { text: "One stop solution for UPSC CSE preparation" },
    { text: "HD Live Sessions" },
    { text: "Free Study Material" },
    { text: "Chat section for students to connect" },
];

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
                        <div className="border-2 border-[#126CB6] rounded-xl shadow-md relative" key={index}>
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
                <MantorsSection />
            </div>

            <div>
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
            <div className="max-w-7xl mx-auto p-6 bg-white">
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
                <div className="max-w-7xl mx-auto bg-blue-50 py-16 px-4 md:px-8">
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

            <section className="py-12 px-4">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800">Our Customer Feedback</h2>
                </div>
                <div className="max-w-7xl mx-auto">
                    <Carousel>
                        {testimonials.map((testimonial, index) => (
                            <div className="px-3 max-w-fit" key={index}>
                                {/* Added mb-4 for spacing */}
                                <div className="flex-shrink-0 p-4 border rounded-lg shadow-md bg-white">
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
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                        />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">{testimonial.feedback}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>

            <section className="py-12 px-4 bg-cover bg-no-repeat">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Download India's Best Learning App</h2>
                    <p className="text-gray-700 font-semibold text-base max-w-2xl mx-auto">
                        We're available on Android devices and platforms. Study from anywhere at your convenience.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mx-auto gap-8">
                    {/* Feature cards */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-10 w-full md:w-1/2">
                        {featureCards.map((card, index) => (
                            <div key={index} className="bg-[#126cb6] text-white rounded-2xl p-2 lg:p-4 w-[200px] md:w-[350px] lg:w-[400px] shadow-lg">
                                <p className="font-bold text-sm lg:text-xl text-center">{card.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Image Section */}
                    <div className="flex-shrink-0 w-full md:w-1/2">
                        <img className="w-3/4 h-auto lg:h-full object-cover rounded-lg" alt="Mobile app preview" src="/images/app-info.png" />
                    </div>
                </div>
            </section>
            <div>
                <div className="bg-blue-700 text-white py-10 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                        <div>
                            <div className="flex items-center space-x-2 mb-4 text-white">
                                <img src="/images/jrf-text-logo.png" className="h-6 filter invert brightness-0" />
                            </div>
                            <p className="text-gray-200">
                                JRFAdda is a premier online platform dedicated to empowering aspirants preparing for UGC NET and state eligibility exams. Our mission is to
                                deliver affordable, high-quality education and resources to help students achieve their academic and professional goals.
                            </p>
                        </div>

                        {/* Our Courses */}
                        <div>
                            <h3 className="text-white text-base font-bold mb-3">Our Courses</h3>
                            <ul className="space-y-2 text-gray-200">
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span> UGC NET</span>
                                </li>
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span> UGC NET JRF Hindi</span>
                                </li>
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>SET</span>
                                </li>
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>Assistant Professor</span>
                                </li>
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>Teaching Exam</span>
                                </li>
                            </ul>
                        </div>

                        {/* Useful Links */}
                        <div>
                            <h3 className="text-white text-base font-bold mb-3">Useful Links</h3>
                            <ul className="space-y-2 text-gray-200">
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>Contact</span>
                                </li>
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>Privacy Policy</span>
                                </li>
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>Terms Of Service</span>
                                </li>
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>Site Map</span>
                                </li>
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>Help Center</span>
                                </li>
                            </ul>
                        </div>

                        {/* Support Us */}
                        <div>
                            <h3 className="text-white text-base font-bold mb-3">Support Us</h3>
                            <ul className="space-y-2 text-gray-200">
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>About Us</span>
                                </li>
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>Disclaimer</span>
                                </li>
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>Press Releases</span>
                                </li>
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>Privacy & Policy</span>
                                </li>
                                <li className="flex items-center gap-x-1 cursor-pointer hover:font-semibold">
                                    <ChevronRight className="w-4 h-4" />
                                    <span>Help Center</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 text-white py-8 px-4">
                    <div className="container mx-auto max-w-7xl">
                        <section className="mb-8">
                            <h2 className="text-3xl font-bold mb-4">About JRFAdda</h2>
                            <p className="text-lg">
                                JRFadda is a premier online platform dedicated to empowering aspirants preparing for UGC NET and state eligibility exams. Our mission is to
                                deliver affordable, high-quality education and resources to help students achieve their academic and professional goals. With a comprehensive
                                repository of study materials, mock tests, previous year papers, and expert-guided courses, JRFadda has become a trusted companion for
                                thousands of students across India.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-lg">
                                At JRFadda, we envision a future where quality education is accessible to everyone, regardless of their background. Our goal is to nurture the
                                intellectual growth of students, fostering a community of scholars who excel in their chosen fields.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-lg">
                                We aim to simplify the preparation journey for UGC NET and state exams by offering in-depth subject knowledge, personalized guidance, and the
                                best study materials. Through our affordable courses and expert mentoring, we strive to ensure that every aspirant has an equal opportunity to
                                succeed.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4">Why Choose JRFAdda</h2>
                            <ul className="list-disc pl-6 text-lg">
                                <li>Expert-curated courses designed by top educators.</li>
                                <li>A vast collection of previous year papers, mock tests, and e-books.</li>
                                <li>Resources tailored for UGC NET aspirants and state eligibility exams.</li>
                                <li>Accessible and economical learning solutions for students from all walks of life.</li>
                            </ul>
                            <p className="mt-4 text-lg">
                                With a commitment to excellence and innovation, JRFadda continues to set new benchmarks in education by bridging the gap between ambition and
                                achievement.
                            </p>
                        </section>
                    </div>
                </div>
                <div className="bg-black text-white py-6">
                    <footer className="max-w-7xl mx-auto">
                        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                            {/* Copyright Text */}
                            <p className="text-sm text-center sm:text-left">&copy; copyright {new Date().getFullYear()} OTSAdda Private Limited. All Rights Reserved.</p>

                            {/* Social Media Icons */}
                            <div className="flex space-x-4 mt-4 sm:mt-0">
                                <a href="#" className="text-white hover:text-gray-400">
                                    <Facebook size={24} />
                                </a>
                                <a href="#" className="text-white hover:text-gray-400">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="text-white hover:text-gray-400">
                                    <Twitter size={24} />
                                </a>
                                {/* <a href="#" className="text-white hover:text-gray-400">
                                <Pinterest size={24} />
                            </a> */}
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
