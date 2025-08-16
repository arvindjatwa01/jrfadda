import React from "react";

import {
    BellRing,
    ChevronDown,
    ChevronRight,
    CornerUpRight,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    MoveRight,
    Phone,
    Trophy,
    Twitter,
    User,
    Youtube,
} from "lucide-react";

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

const results = [
    { name: "Devdutta Majhi", city: "Jaipur", airScore: 550, imageSrc: "/images/students/student1.jpg" },
    { name: "Amit Sharma", city: "Delhi", airScore: 480, imageSrc: "/images/students/student1.jpg" },
    { name: "Neha Singh", city: "Mumbai", airScore: 600, imageSrc: "/images/students/student1.jpg" },
    { name: "Ravi Kumar", city: "Kolkata", airScore: 500, imageSrc: "/images/students/student1.jpg" },
    { name: "Devdutta Majhi", city: "Jaipur", airScore: 550, imageSrc: "/images/students/student1.jpg" },
];

// Feature cards data without absolute positioning
const featureCards = [
    { text: "One stop solution for UPSC CSE preparation" },
    { text: "HD Live Sessions" },
    { text: "Free Study Material" },
    { text: "Chat section for students to connect" },
];

const mentors = [
    {
        name: "Aditi Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/aditi.jpg",
    },
    {
        name: "Aayushi Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/aayushi.png",
    },
    {
        name: "Priyanka Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/priyanka.jpg",
    },
    {
        name: "Juhi Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/juhi.png",
    },
    {
        name: "Juhi Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/juhi.png",
    },
    {
        name: "Juhi Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/juhi.png",
    },
    {
        name: "Juhi Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/juhi.png",
    },
];

// Footer links data
const courseLinks = ["UGC NET", "UGC NET JRF Hindi", "SET", "Assistant Professor", "Teaching Exam"];

const usefulLinks = ["Contact", "Privacy Policy", "Terms Of Service", "Site Map", "Help Center"];

const supportLinks = ["About Us", "Sisclaimer", "Press Releases", "Privacy & Policy", "Help Center"];

const HomePage = () => {
    return (
        <div className="">
            <BannerMaster />
            <section className="py-12 w-full bg-orange-50">
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold">
                            UGC NET 2025 <span className="text-blue-500">Result</span>
                        </h2>
                        <p className="text-lg text-gray-500 font-medium max-w-4xl mx-auto leading-tight">
                            At JRFadda, our experienced Result are here to provide personalized{" "}
                            <span className="hidden lg:block">guidance and support to help you master the UGC NET and SET exams. Start your journey to success today!</span>
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto py-12 rounded-2xl z-50">
                        <Carousel customSettings={{ slidesToShow: 5 }}>
                            {results.map((result, index) => (
                                <div key={index} className="relative px-4">
                                    <div
                                        className="flex flex-col h-80 lg:h-64 border-2 border-[#126cb6] rounded-2xl shadow-md bg-white bg-cover bg-center"
                                        style={{ backgroundImage: `url(${result.imageSrc})`, backgroundSize: "cover", backgroundPosition: "center" }}
                                    >
                                        <div className="w-[59px] h-[60px] bg-[url(/images/red-basic-shape.png)] fill-yellow-500 bg-cover flex flex-col items-center justify-center absolute bottom-8 right-6">
                                            <span className="font-bold text-sm text-black">{result.airScore}</span>
                                            <span className="font-bold text-[15px] text-black">AIR</span>
                                        </div>
                                        <div className="flex-grow"></div>
                                        <div className="bg-[#126cb6] rounded-b-md p-2 text-center w-full">
                                            <h4 className="font-bold text-white text-[17px]">{result.name}</h4>
                                            <p className="text-[#f3e7e7] text-sm">{result.city}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="text-center mt-6">
                        <p className="text-xl font-medium">All students featured are part of our full-year paid counes</p>
                    </div>
                    <div className="absolute top-14 right-6 lg:right-14 z-0">
                        <Trophy className="w-10 h-10 md:w-20 md:h-20 text-yellow-400 transform -rotate-12" />
                    </div>
                </div>
            </section>
            <section className="px-4 py-12 bg-blue-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center">
                        <h2 className="text-xl lg:text-3xl max-w-[43rem] mx-auto lg:font-bold text-center mb-10">
                            Select Your <span className="text-blue-500">Course, Secure</span> Your <span className="text-blue-500">UGC NET </span>
                            Success Today!
                        </h2>
                    </div>
                </div>
                <div className="container max-w-screen-xl mx-auto">
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
                                <button className={`text-white ${item.buttonColor} px-5 py-2 w-fit rounded-full font-medium hover:opacity-90 transition`}>
                                    Explore Category
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12 px-4 w-full bg-orange-50 lg:bg-[url(/images/mentor/expert-bg.jpg)]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold mb-2">
                            Expert <span className="text-blue-500">Mentor</span>
                        </h2>
                        <div className="flex justify-center items-center">
                            <span className="border-2 border-blue-500 w-20"></span>
                            <span className="bg-blue-500 w-4 h-4 rounded-full"></span>
                            <span className="border-2 border-blue-500 w-20"></span>
                        </div>
                        <p className="hidden lg:block text-lg text-[#2d2929] max-w-4xl mx-auto leading-tight">
                            At JRFadda, our experienced mentors are here to provide personalized guidance and support to help you master the UGC NET and SET exams. Start your
                            journey to success today!
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto">
                        <Carousel>
                            {mentors.map((mentor, index) => (
                                <div key={index} className="px-4">
                                    <div className="rounded-xl bg-card text-card-foreground shadow border border-[#eaecf0] overflow-hidden" key={index}>
                                        <div className="h-[230px] overflow-hidden">
                                            <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800">{mentor.name}</h3>
                                            <p className="text-sm text-gray-600 font-semibold">{mentor.subject}</p>
                                            <div className="flex justify-end mt-4">
                                                <div className="flex font-semibold items-center gap-x-2 text-[#126cb6] cursor-pointer hover:text-green-600 hover:font-bold">
                                                    <span>Read More</span>
                                                    <span>&gt;&gt;</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className="py-12 w-full">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="border bg-card text-card-foreground rounded-3xl shadow-xl overflow-hidden bg-gradient-to-b from-blue-100 py-10 lg:py-0">
                        <div className="pt-0 p-10">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="flex-1">
                                    <h2 className="text-4xl font-bold text-[#126cb6] mb-4">Crack UPSC with our Expert Guidance</h2>
                                    <h3 className="text-2xl font-bold mb-4">Get a Callback by our UPSC Expert!</h3>
                                    <p className="mb-4">
                                        By continuing, you agree to the <span className="font-bold text-[#126cb6]">terms and conditions.</span>
                                    </p>

                                    <div className="relative max-w-md mb-6">
                                        <div className="flex items-center border border-[#c2bbbb] rounded-lg overflow-hidden bg-white">
                                            <div className="flex items-center px-3 border-r">
                                                <img className="w-6 h-6" alt="Country flag" src="/images/india.png" />
                                                <span className="mx-2 text-sm font-medium">+91</span>
                                                <ChevronDown className="w-3 h-3" />
                                            </div>
                                            <input
                                                type="tel"
                                                className="flex h-9 w-full rounded-md border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1 border-0 focus-visible:ring-0"
                                                placeholder="Enter your mobile number"
                                            />
                                        </div>
                                    </div>
                                    <button className="bg-[#126cb6] hover:bg-[#0e5a9e] rounded-xl px-6 py-3 text-white">Get Free Mentorship</button>
                                </div>

                                <div className="flex-1">
                                    <img src="/images/student-thumbnail.png" className="w-full lg:h-[400px] object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 w-full bg-[url(/images/classroom.png)] bg-cover">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-xl lg:text-3xl font-bold text-center mb-10 max-w-3xl mx-auto">
                        Explore Our <span className="text-red-600">YouTube Channels</span> for Expert Learning Resources
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        <div className="hidden lg:block flex-1">
                            <img className="w-full max-w-lg mx-auto transform scale-x-[-1]" alt="YouTube Channels" src="/images/yt-channel.png" />
                        </div>

                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                            <div className="border bg-card text-card-foreground bg-[#fff7ef] border-[#b1b7bb] rounded-3xl shadow-lg">
                                <div className="p-6 flex flex-col items-center">
                                    <img className="w-20 h-20 object-contain" alt="JRFAdda" src="/images/jrf-logo.png" />
                                    <h3 className="text-xl font-bold text-center my-4">JRFAdda</h3>
                                    <button className="bg-[#126cb6] hover:bg-[#0e5a9e] text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                                        <span>230K subscribers</span>
                                        <BellRing className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="border bg-card text-card-foreground bg-[#e8ffe4] border-[#b1b7bb] rounded-3xl shadow-lg md:mt-0">
                                <div className="p-6 flex flex-col items-center">
                                    <img className="w-20 h-20 object-contain" alt="JRFAdda Hindi Medium" src="/images/jrf-logo.png" />
                                    <h3 className="text-xl font-bold text-center my-4">JRFAdda Hindi Medium</h3>
                                    <button className="bg-[#126cb6] hover:bg-[#0e5a9e] text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                                        <span>230K subscribers</span>
                                        <BellRing className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="border bg-card text-card-foreground bg-[#e0f6fe] border-[#b1b7bb] rounded-3xl shadow-lg col-span-1 md:col-span-2 max-w-sm mx-auto">
                                <div className="p-6 flex flex-col items-center">
                                    <img className="w-24 h-24 object-contain" alt="Commerce Spotlight" src="/images/jrf-logo.png" />
                                    <h3 className="text-xl font-bold text-center my-4">Commerce Spotlight by JRFAdda</h3>
                                    <button className="bg-[#126cb6] hover:bg-[#0e5a9e] text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                                        <span>230K subscribers</span>
                                        <BellRing className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:hidden flex-1">
                            <img className="w-full max-w-lg mx-auto transform scale-x-[-1]" alt="YouTube Channels" src="/images/yt-channel.png" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 px-4 bg-orange-50">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Our Customer <span className="text-blue-500">Feedback</span>
                    </h2>
                    <p className="text-gray-700 mt-2 text-lg max-w-2xl mx-auto">Don't take our word for it. Trust our customers</p>
                </div>
                <div className="max-w-7xl mx-auto">
                    <Carousel>
                        {testimonials.map((testimonial, index) => (
                            <div className="px-3 max-w-fit" key={index}>
                                {/* Added mb-4 for spacing */}
                                <div className="flex-shrink-0 p-4 border rounded-lg shadow-md bg-white">
                                    <div className="flex justify-between space-x-4">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 object-cover" />
                                        <div>
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
                                    <div className="mt-2">
                                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                        <p className="text-sm font-normal text-gray-500">{testimonial.feedback}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
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
                                    <MoveRight className="w-4 h-4 mr-2" /> Submit
                                </button>
                            </form>
                        </div>
                        <div className="bg-blue-700 text-white p-8 md:px-8 md:py-20 flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-3xl font-bold mb-2">Contact Now</h2>
                                <p className="text-sm mb-6">Contact our help desk for assistance</p>

                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-center gap-3">
                                        <Phone className="w-6 h-6" />
                                        <div className="flex flex-col space-y-0">
                                            <span className="text-base">Phone Number</span>
                                            <span className="text-base font-semibold">+91-1234567890</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Mail className="w-6 h-6" />
                                        <div className="flex flex-col space-y-0">
                                            <span className="text-base">Email</span>
                                            <span className="text-base font-semibold">example@gmail.com</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <MapPin className="w-6 h-6" />
                                        <div className="flex flex-col space-y-0">
                                            <span className="text-base">Address</span>
                                            <span className="text-base font-semibold">Rajasthan, India</span>
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
            <section className="py-12 w-full">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-4xl font-bold text-center text-blue-500">Offline Center</h2>
                    <div className="flex justify-center items-center">
                        <span className="border-2 border-blue-500 w-20"></span>
                        <span className="bg-blue-500 w-4 h-4 rounded-full"></span>
                        <span className="border-2 border-blue-500 w-20"></span>
                    </div>
                    <div className="max-w-7xl mx-auto py-10">
                        <div className="border bg-blue-50 text-card-foreground rounded-3xl shadow-xl">
                            <div className="p-10">
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex-1">
                                        <img
                                            src="/images/office-center.png"
                                            alt="JRFADDA storefront illuminated at night with hanging decorative lights and branding including 'JRFADDA' and 'Our Team'"
                                            className="w-full h-auto rounded-lg object-cover"
                                        />
                                        {/* <div className="w-full h-[400px] bg-[url(/images/office-center.png)] bg-contain bg-no-repeat bg-center"></div> */}
                                    </div>
                                    <div className="flex-1 space-y-8 px-10">
                                        <div>
                                            <h3 className="text-3xl font-bold text-[#126cb6] mb-4">JRFADDA JAIPUR</h3>
                                            <p className="text-base lg:text-xl leading-tight">
                                                <a
                                                    href="https://www.google.com/search?sca_esv=7bf8a2f3baef1f90&amp;rlz=1C1FHFK_enIN1163IN1163&amp;sxsrf=AE3TifNvTVesl5v5EppI5szhJLDpaU_N2w:1752233705310&amp;q=jrf+adda+address&amp;ludocid=13862608358281283687&amp;sa=X&amp;ved=2ahUKEwiy88Wc27SOAxXKyTgGHfUtHPEQ6BN6BAgoEAI"
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    className="underline"
                                                >
                                                    Address
                                                </a>
                                                : 3rd Floor 23, 24, Gopalpura Bypass Rd, near Triveni Flyover 25, Vishveshvariya Nagar, Arjun Nagar, Jaipur, Rajasthan 302018
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <button className="px-2 lg:px-4 py-2 bg-[#126cb6] hover:bg-[#0e5a9e] text-white rounded-full flex items-center gap-2">
                                                <span className="font-bold">Directions</span>
                                                <CornerUpRight className="w-3 h-3 lg:w-4 lg:h-4" />
                                                {/* <div className="w-3 h-3 bg-[url(/mask-group-4.png)] bg-contain"></div> */}
                                            </button>

                                            <a href="tel:+911234567890" className="inline-flex items-center text-nowrap" aria-label="Call JRFADDA Jaipur phone number">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-7 h-7 lg:w-10 lg:h-10 bg-[#126cb6] text-white rounded-full flex items-center justify-center">
                                                        <Phone className="w-3 h-3 lg:w-5 lg:h-5 " />
                                                    </div>
                                                    <span className="text-base lg:text-2xl font-medium">+91 12345 67890</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="rounded-lg overflow-hidden aspect-[2] shadow-md">
                                            <a href=""></a>
                                            <img src="/images/address-map.png" alt="" className="w-full h-full border-0 object-cover"  />
                                            {/* <iframe
                                                title="Google Map showing location of JRFADDA Jaipur at Gopalpura Bypass Rd in Jaipur, Rajasthan"
                                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAWJRq40ao0OgwMGU5hwzeYvupHGYBkvoU&q=3rd+Floor+23,+24,+Gopalpura+Bypass+Rd,+near+Triveni+Flyover+25,+Vishveshvariya+Nagar,+Arjun+Nagar,+Jaipur,+Rajasthan+302018"
                                                className="w-full h-full border-0"
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 w-full bg-[url(/images/classroom.png)] bg-cover">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex flex-col gap-6 max-w-xl">
                                <h2 className="text-4xl font-bold text-black">
                                    Download <span className="text-blue-500">India's Best Learning App</span>
                                </h2>
                                <p className="text-lg">We're available on Android devices and platforms. Study from anywhere at your convenience.</p>

                                <div className="relative w-full max-w-md">
                                    <div className="flex items-center border border-[#c2bbbb] rounded-lg overflow-hidden bg-white">
                                        <div className="flex items-center px-3 border-r">
                                            <img className="w-6 h-6" alt="Country flag" src="/images/india.png" />
                                            <span className="mx-2 text-sm font-medium">+91</span>
                                            <ChevronDown className="w-3 h-3" />
                                        </div>
                                        <input
                                            type="tel"
                                            className="flex h-9 w-full rounded-md border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1 border-0 focus-visible:ring-0"
                                            placeholder="Enter your mobile number"
                                        />
                                        <button className="py-2 h-full px-6 rounded-none bg-[#126cb6] text-white hover:bg-[#0e5a9e]">Get Started</button>
                                    </div>
                                </div>

                                <p className="text-xs">India's No. 1 AI Based App For CSIR NET, GATE, IIT-JAM, CUET PG, PSC, and Other MSc, PhD &amp; Competitive Exams</p>
                                <div className="space-y-1">
                                    <img alt="App stores" src="/images/play-store.png" className="rounded-lg w-36" />
                                    <img alt="App stores" src="/images/app.png" className="rounded-lg w-36" />
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <div className="relative w-full lg:h-[450px]">
                                    <div className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2 w-[350px] lg:w-[500px] h-56 bg-[#d2e3ff] rounded-[254.5px/111.85px]"></div>
                                    <img className="lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 w-[578px]" alt="App showcase" src="/images/app-deshtop.png " />
                                    <img className="hidden lg:block absolute bottom-0 right-0 w-[285px]" alt="Mobile device" src="/images/mobile-deshtop-1.png" />
                                    <img className="hidden lg:block absolute bottom-0 left-0 w-[285px]" alt="Mobile device" src="/images/mobile-deshtop-2.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="w-full">
                <div className="bg-white py-10">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div>
                                    <img src="/images/jrf-text-logo.png" className="h-10" />
                                    <p className="text-[#666666]">
                                        JRFadda is a premier online platform dedicated to empowering aspirants preparing for UGC NET and state eligibility exams. Our mission
                                        is to deliver affordable, high-quality education and resources to help students achieve their academic and professional goals.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-4">Our Courses</h3>
                                    <ul className="space-y-2">
                                        {courseLinks.map((link, index) => (
                                            <li key={index} className="flex items-center gap-2 text-[#666666]">
                                                <ChevronRight className="w-4 h-4" />
                                                <span>{link}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-4">Useful Links</h3>
                                    <ul className="space-y-2">
                                        {usefulLinks.map((link, index) => (
                                            <li key={index} className="flex items-center gap-2 text-[#666666]">
                                                <ChevronRight className="w-4 h-4" />
                                                <span>{link}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-4">Support Us</h3>
                                    <ul className="space-y-2">
                                        {supportLinks.map((link, index) => (
                                            <li key={index} className="flex items-center gap-2 text-[#666666]">
                                                <ChevronRight className="w-4 h-4" />
                                                <span>{link}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#ecf5ff] py-8">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-extrabold mb-2">About JRFAdda</h3>
                                    <p className="text-[#666666] leading-relaxed">
                                        JRFadda is a premier online platform dedicated to empowering aspirants preparing for UGC NET and state eligibility exams. Our mission
                                        is to deliver affordable, high-quality education and resources to help students achieve their academic and professional goals. With a
                                        comprehensive repository of study materials, mock tests, previous year papers, and expert-guided courses, JRFadda has become a trusted
                                        companion for thousands of students across India.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-extrabold mb-2">Our Vision</h3>
                                    <p className="text-[#666666] leading-relaxed">
                                        At JRFadda, we envision a future where quality education is accessible to everyone, regardless of their background. Our goal is to
                                        nurture the intellectual growth of students, fostering a community of scholars who excel in their chosen fields
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-extrabold mb-2">Our Mission</h3>
                                    <p className="text-[#666666] leading-relaxed">
                                        We aim to simplify the preparation journey for UGC NET and state exams by offering in-depth subject knowledge, personalized guidance,
                                        and the best study materials. Through our affordable courses and expert mentoring, we strive to ensure that every aspirant has an equal
                                        opportunity to succeed.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-extrabold mb-2">Why Choose JRFAdda</h3>
                                    <p className="text-[#666666] leading-relaxed">
                                        JRFAdda stands out as an one-stop solution for UGC NET and state exam preparation, offering:
                                    </p>
                                    <ul className="list-disc pl-5 text-[#666666] leading-relaxed">
                                        <li>Expert-curated courses designed by top educators.</li>
                                        <li>A vast collection of previous year papers, mock tests, and e-books.</li>
                                        <li>Resources tailored for UGC NET aspirants and state eligibility exam candidates.</li>
                                        <li>Accessible and economical learning solutions for students from all walks of life.</li>
                                    </ul>
                                </div>

                                <p className="text-[#666666] font-bold leading-relaxed">
                                    With a commitment to excellence and innovation, JRFadda continues to set new benchmarks in education by bridging the gap between ambition
                                    and achievement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#126cb6] py-6">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <p className="text-white">&copy; Copyright {new Date().getFullYear()} OTSAdda Privated Limited. All Rights Reserved.</p>

                                <div className="flex items-center gap-4">
                                    <span className="text-white">Follow us:</span>
                                    <div className="flex gap-4">
                                        <a href="#" className="text-white border-2 border-white rounded-full p-1 hover:text-gray-400">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="text-white border-2 border-white rounded-full p-1 hover:text-gray-400">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="text-white border-2 border-white rounded-full p-1 hover:text-gray-400">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="text-white border-2 border-white rounded-full p-1 hover:text-gray-400">
                                            <Youtube className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
