import React from "react";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const FooterPage = () => {
    return (
        <footer className="bg-black text-white px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <p>© Copyright {new Date().getFullYear()} OTSAdda Private Limited. All Rights Reserved.</p>
                <div className="flex items-center space-x-4">
                    <p>Follow us: </p>
                    <a href="#" className="border-2 border-white rounded-full p-1.5 hover:text-gray-400">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="border-2 border-white rounded-full p-1.5 hover:text-gray-400">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="border-2 border-white rounded-full p-1.5 hover:text-gray-400">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="border-2 border-white rounded-full p-1.5 hover:text-gray-400">
                        <Youtube className="w-5 h-5" />
                    </a>
                    {/* <a href="#" className="hover:text-gray-400">
                        <Pinterest size={24} />
                    </a> */}
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;
