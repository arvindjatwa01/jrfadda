import { useState } from "react";
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from "lucide-react"; // Import Lucide icons

const MentorsCarousel = ({ mentors }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next mentor
    const nextMentor = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mentors.length); // Wrap around to the first mentor
    };

    // Function to go to the previous mentor
    const prevMentor = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + mentors.length) % mentors.length // Wrap around to the last mentor
        );
    };

    return (
        <section className="py-12 px-4 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${`/images/category-bg.png`})` }}>
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-800">Expert Mentor</h2>
                <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
                    At JRFadda, our experienced mentors are here to provide personalized guidance and support to help you master the UGC NET and SET exams. Start your journey
                    to success today!
                </p>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    <div className="col-span-1 sm:col-span-2 md:col-span-4 flex justify-center">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/3">
                            <img src={mentors[currentIndex].image} alt={mentors[currentIndex].name} className="w-full object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">{mentors[currentIndex].name}</h3>
                                <p className="text-sm text-gray-600 font-semibold">{mentors[currentIndex].subject}</p>

                                {mentors[currentIndex].showReadMore && (
                                    <a href="#" className="text-blue-600 text-sm mt-2 inline-block">
                                        Read More &rarr;
                                    </a>
                                )}

                                {mentors[currentIndex].social && (
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
                </div>

                {/* Carousel Navigation Buttons */}
                <div className="absolute inset-0 flex justify-between items-center px-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700" onClick={prevMentor}>
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700" onClick={nextMentor}>
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MentorsCarousel;
