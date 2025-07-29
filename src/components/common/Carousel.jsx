import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";

const teamMembers = [
    {
        id: 1,
        name: "Aditi Ma'am",
        title: "Computer Science (JRF)",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        backgroundColor: "from-yellow-200 to-yellow-300",
        hasReadMore: true,
        socialLinks: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
        id: 2,
        name: "Aayushi Ma'am",
        title: "Computer Science (JRF)",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        backgroundColor: "from-blue-200 to-blue-300",
        socialLinks: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
        id: 3,
        name: "Priyanka Ma'am",
        title: "Computer Science (JRF)",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        backgroundColor: "from-orange-200 to-orange-300",
        socialLinks: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
        id: 4,
        name: "Juhi Ma'am",
        title: "Computer Science (JRF)",
        image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        backgroundColor: "from-yellow-300 to-yellow-400",
        socialLinks: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
        id: 5,
        name: "Sneha Ma'am",
        title: "Mathematics (JRF)",
        image: "https://images.pexels.com/photos/1181606/pexels-photo-1181606.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        backgroundColor: "from-green-200 to-green-300",
        hasReadMore: true,
        socialLinks: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
        id: 6,
        name: "Rahul Sir",
        title: "Physics (JRF)",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        backgroundColor: "from-purple-200 to-purple-300",
        socialLinks: { facebook: "#", instagram: "#", twitter: "#" },
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const carouselRef = useRef(null);

    // Get items per view based on screen size
    const getItemsPerView = () => {
        if (typeof window === "undefined") return 4;
        if (window.innerWidth < 640) return 1; // mobile
        if (window.innerWidth < 1024) return 2; // tablet/small screens
        return 4; // large screens
    };

    const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(getItemsPerView());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, teamMembers.length - itemsPerView);

    // Auto-play functionality with infinite scroll
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex >= maxIndex) {
                    return 0; // Reset to first item when reaching the end
                }
                return prevIndex + 1;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, maxIndex]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex)); // Loop back to max index
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0)); // Loop back to start
    };

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="relative">
                {/* Carousel Container */}
                <div ref={carouselRef} className="overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                            width: `${(teamMembers.length / itemsPerView) * 100}%`,
                        }}
                    >
                        {teamMembers.map((member) => (
                            <div key={member.id} className="flex-shrink-0 px-3" style={{ width: `${100 / teamMembers.length}%` }}>
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                                    {/* Profile Image with Gradient Background */}
                                    <div className={`relative h-64 bg-gradient-to-br ${member.backgroundColor} flex items-center justify-center`}>
                                        <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{member.title}</p>

                                        {/* Read More Link */}
                                        {member.hasReadMore && (
                                            <a
                                                href="#"
                                                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mb-4 transition-colors duration-200"
                                            >
                                                Read More
                                                <ChevronRight className="w-4 h-4 ml-1" />
                                            </a>
                                        )}

                                        {/* Social Links */}
                                        <div className="flex space-x-3 pt-2">
                                            {member.socialLinks.facebook && (
                                                <a
                                                    href={member.socialLinks.facebook}
                                                    className="w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors duration-200"
                                                >
                                                    <Facebook className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                                                </a>
                                            )}
                                            {member.socialLinks.instagram && (
                                                <a
                                                    href={member.socialLinks.instagram}
                                                    className="w-8 h-8 bg-gray-100 hover:bg-pink-100 rounded-full flex items-center justify-center transition-colors duration-200"
                                                >
                                                    <Instagram className="w-4 h-4 text-gray-600 hover:text-pink-600" />
                                                </a>
                                            )}
                                            {member.socialLinks.twitter && (
                                                <a
                                                    href={member.socialLinks.twitter}
                                                    className="w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors duration-200"
                                                >
                                                    <Twitter className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-8 space-x-4">
                    <button
                        onClick={goToPrevious}
                        disabled={currentIndex === 0}
                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={goToNext}
                        disabled={currentIndex >= maxIndex}
                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsAutoPlaying(false);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                currentIndex === index ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
