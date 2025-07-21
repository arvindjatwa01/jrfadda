import { sliderSettings } from "data/constents";
import React from "react";
import Slider from "react-slick";

const bannerImages = ["/images/add-banner.jpg", "/images/add-banner.jpg", "/images/add-banner.jpg", "/images/add-banner.jpg"];

const BannerMaster = () => {
    return (
        <div>
            {/* <div className="max-w-screen-sm">
                <Slider {...{ ...sliderSettings, autoplay: false }}>
                    {bannerImages.map((item) => (
                        <div className="">
                            <img src={item} alt="JRFADDA Add Preview" className="w-full object-contain rounded-xl" />
                        </div>
                    ))}
                </Slider>
            </div> */}
            <div className="bg-gradient-to-b from-blue-100 to-white py-6 lg:py-12">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-8">
                    {/* Left Text Content */}
                    <div className="text-center lg:text-start">
                        <h1 className="text-3xl px-2 lg:px-0 lg:text-5xl font-bold text-gray-800">
                            For Every Student, Every Classroom. <br />
                            <span className="text-blue-600">With Your Help JRFADDA</span>
                        </h1>
                        <p className="mt-4 text-gray-600 px-3 lg:px-0">Role Play is the interactive way to practice your business and communication skills.</p>
                        <form className="mt-6 flex flex-col sm:flex-row px-4 space-y-4 lg:space-y-0 lg:px-0">
                            <div className="flex border rounded overflow-hidden w-full max-w-sm">
                                <span className="bg-gray-100 px-3 py-2 border-r">+91</span>
                                <input type="text" placeholder="Enter your mobile number" className="w-full px-3 py-2 outline-none" />
                            </div>
                            <div>
                                <button className="bg-black rounded-full lg:bg-blue-600 text-white px-5 py-2 lg:rounded hover:bg-blue-700 transition">Join for free</button>
                            </div>
                        </form>
                        <p className="hidden lg:block mt-3 text-sm font-semibold text-gray-500 max-w-md">
                            India's No.1 AI Based App for CSIR NET, GATE, IIT-JAM, CUET PG, PSC, and other MSc, PhD & Competitive Exams
                        </p>
                    </div>

                    <div className="relative hidden lg:block">
                        <img src="/images/app-banner.png" alt="JRFADDA App Preview" className="w-full rounded-xl" />
                    </div>
                    <div className="relative lg:hidden">
                        <img src="/images/online-conference-meeting.png" alt="JRFADDA App Preview" className="w-full rounded-xl" />
                    </div>
                </div>

                <div className="hidden lg:block text-center bg-[url('/images/sea-banner.png')] relative w-full h-96 bg-cover bg-no-repeat px-8">
                    <div className="grid md:grid-cols-3 gap-10 absolute top-5 translate-y-1/2">
                        <div className="flex flex-col items-center">
                            <img src="/images/educators-icon.png" alt="Educators" className="mx-auto w-28 h-28 mb-4" />
                            <h3 className="font-semibold text-3xl text-white">Skilled and Experienced Educators</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/top-result-icon.png" alt="Top Result" className="mx-auto w-28 h-28 mb-4" />
                            <h3 className="font-semibold text-3xl text-white">Top Result in India</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/students-icon.png" alt="Students" className="mx-auto w-28 h-28 mb-4" />
                            <h3 className="font-semibold text-3xl text-white">Trusted by 10 M+ Students</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerMaster;
