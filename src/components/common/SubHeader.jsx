import React from "react";

const SubHeader = () => {
    return (
        <>
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src="/images/JRF-adda-logo.png" alt="JRFAdda Logo" className="h-10 w-auto" />
                        {/* <span className="text-2xl font-bold text-blue-800">JRFAdda</span> */}
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8 text-lg">
                        <a href="#" className="text-blue-600 font-medium">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            About Us
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            What We Do
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Event
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Gallery
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Blog
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            Contact Us
                        </a>
                    </div>

                    {/* Read More Button */}
                    <div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-blue-700 transition">Read More</button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default SubHeader;
