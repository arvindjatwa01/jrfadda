import Slider from "react-slick";

const Carousel = ({ children, customSettings }) => {
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
        ...customSettings,
    };
    return (
        <>
            <Slider {...sliderScrollSettings}>{children}</Slider>
        </>
    );
};

export default Carousel;
