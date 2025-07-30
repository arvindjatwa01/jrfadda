import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import Slider from "react-slick";

const sliderScrollSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2, // Show 2 slides on tablets
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1, // Show 1 slide on mobile
                slidesToScroll: 1,
            },
        },
    ],
};

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
    {
        name: "Juhi Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/juhi.png",
        social: true,
    },
    {
        name: "Juhi Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/juhi.png",
        social: true,
    },
    {
        name: "Juhi Ma'am",
        subject: "Computer Science (JRF)",
        image: "/images/mentor/juhi.png",
        social: true,
    },
];

const MantorsSection = () => {
    return (
        <>
            <section className="py-12 px-4 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${`/images/category-bg.png`})` }}>
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800">Expert Mentor</h2>
                    <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
                        At JRFadda, our experienced mentors are here to provide personalized guidance and support to help you master the UGC NET and SET exams. Start your
                        journey to success today!
                    </p>
                </div>
                <div className="max-w-7xl mx-auto">
                    <Slider {...sliderScrollSettings}>
                        {mentors.map((mentor, index) => (
                            <div key={index} className="px-4 max-w-fit">
                                <div className="h-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
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
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
            {/* <div className="lg:max-w-7xl lg:mx-auto px-4">
                <Slider {...sliderScrollSettings}>
                    {mentors.map((mentor, index) => (
                        <div key={index} className="px-2">
                            <div className="h-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={mentor.image} alt={mentor.name} className="w-full h-auto object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{mentor.name}</h3>
                                    <p className="text-sm text-gray-600 font-semibold">{mentor.subject}</p>

                                    {mentor.showReadMore && (
                                        <a href="#" className="text-blue-600 text-sm mt-2 inline-block">
                                            Read More →
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
                        </div>
                    ))}
                </Slider>
            </div> */}
        </>
    );
};

export default MantorsSection;
