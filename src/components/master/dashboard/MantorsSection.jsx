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

const MantorsSection = () => {
    return (
        <>
            <section className="py-12 px-4 w-full bg-[url(/images/mentor/expert-bg.jpg)] bg-cover bg-no-repeat">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold mb-2">Expert Mentor</h2>
                        <p className="text-lg text-[#2d2929] max-w-4xl mx-auto">
                            At JRFadda, our experienced mentors are here to provide personalized guidance and support to help you master the UGC NET and SET exams. Start your
                            journey to success today!
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto">
                        <Slider {...sliderScrollSettings}>
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
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MantorsSection;
