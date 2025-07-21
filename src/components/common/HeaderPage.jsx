import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { ABOUT_US_PAGE_URL, BLOG_PAGE_URL, FREE_MATERIAL_PAGE_URL, BOOK_PAGE_URL, HOME_PAGE_URL, OUR_COURSE_PAGE_URL, OUR_CENTERS_PAGE_URL } from "data/navigations";
import { Menu, X } from "lucide-react";

const HeaderPage = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <header className="top-0 left-0 h-16">
                <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to={HOME_PAGE_URL} className="hidden sm:block">
                            <img src="/images/header-logo.png" alt="logo image" className="w-60" />
                        </Link>
                        <div className="lg:hidden flex items-center" onClick={toggleMobileMenu}>
                            <Menu className="h-8 w-8" />
                        </div>
                        <Link to={HOME_PAGE_URL}>
                            <img src="/images/header-m-logo.png" alt="logo image" className="lg:hidden h-12" />
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center space-x-10 text-lg font-normal">
                        <NavLink to={HOME_PAGE_URL} className={({ isActive }) => `${isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
                            Home
                        </NavLink>
                        <NavLink to={ABOUT_US_PAGE_URL} className={({ isActive }) => `${isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
                            About Us
                        </NavLink>
                        <NavLink to={OUR_COURSE_PAGE_URL} className={({ isActive }) => `${isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
                            Our Course
                        </NavLink>
                        <NavLink to={FREE_MATERIAL_PAGE_URL} className={({ isActive }) => `${isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
                            Free Material
                        </NavLink>
                        <NavLink to={BOOK_PAGE_URL} className={({ isActive }) => `${isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
                            Book
                        </NavLink>
                        <NavLink to={BLOG_PAGE_URL} className={({ isActive }) => `${isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
                            Blog
                        </NavLink>
                        <NavLink to={OUR_CENTERS_PAGE_URL} className={({ isActive }) => `${isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
                            Our Centers
                        </NavLink>
                    </div>
                    <div className="flex items-center">
                        <NavLink to="/login" className="text-lg  px-6 py-2 font-normal rounded-full text-white bg-blue-500 hover:bg-blue-600">
                            Login/Register
                        </NavLink>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="fixed top-0 right-0 bg-white w-full h-full shadow-lg z-50">
                        <div className="flex justify-between p-4">
                            <Link to={HOME_PAGE_URL}>
                                <img src="/images/header-logo.png" alt="logo image" className="h-12" />
                            </Link>
                            <button onClick={toggleMobileMenu} className="bg-blue-300 h-10 w-10 rounded-full flex justify-center items-center">
                                <span className="border border-blue-600 rounded-full p-1 justify-center items-center ">
                                    <X className="h-5 w-5" />
                                </span>
                            </button>
                        </div>
                        <nav className="flex flex-col p-4 space-y-3">
                            <NavLink to={HOME_PAGE_URL} className="text-blue-500 border-b py-3">
                                Home
                            </NavLink>
                            <NavLink to={ABOUT_US_PAGE_URL} className="text-blue-500  border-b py-3">
                                About Us
                            </NavLink>
                            <NavLink to={OUR_COURSE_PAGE_URL} className="text-blue-500  border-b py-3">
                                Our Course
                            </NavLink>
                            <NavLink to={BOOK_PAGE_URL} className="text-blue-500  border-b py-3">
                                Book
                            </NavLink>
                            <NavLink to={FREE_MATERIAL_PAGE_URL} className="text-blue-500  border-b py-3">
                                Free Material
                            </NavLink>
                            <NavLink to={BLOG_PAGE_URL} className="text-blue-500  border-b py-3">
                                Blog
                            </NavLink>
                        </nav>
                        <div className="p-4">
                            <Link to="/contact-us">
                                <button className="w-full py-3 bg-blue-500 text-white rounded-full">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default HeaderPage;
