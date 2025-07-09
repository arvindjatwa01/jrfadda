import { Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";

const HeaderPage = () => {
    return (
        <>
            <header className="top-0 left-0 w-full h-16 bg-blue-600 text-white">
                <div className="max-w-screen-xl mx-auto py-4 flex justify-between items-center">
                    {/* Contact Info */}
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                            <i className="fas fa-phone-alt mr-2"></i>
                            +91-0123456789
                        </span>
                        <span className="flex items-center">
                            <i className="fas fa-envelope mr-2"></i>
                            example@gmail.com
                        </span>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="border-2 p-1.5 rounded-full text-white">
                            <Facebook className="w-4 h-4 font-bold" />
                        </a>
                        <a href="#" className="border-2 p-1.5 rounded-full text-white">
                            <Instagram className="w-4 h-4 font-bold" />
                        </a>
                        {/* <a href="#" className="text-white">
                            <Pinterest />
                        </a> */}
                        <a href="#" className="border-2 p-1.5 rounded-full text-white">
                            <Youtube className="w-4 h-4 font-bold" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderPage;
