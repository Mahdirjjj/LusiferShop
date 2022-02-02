import React from 'react'
import Slider from 'react-slick';

const Brands = () => {

    const settings = {
        infinite: false,
        speed: 500,
        arrows:false,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="brand-slider-section theme1 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Slider className="brand-init border-top py-35 slick-nav-brand" {...settings}>
                            <div className="slider-item">
                                <div className="single-brand">
                                    <a href="https://themeforest.net/user/hastech" className="brand-thumb">
                                        <img src="assets/img/brand/1.jpg" alt="brand-thumb-nail" />
                                    </a>
                                </div>
                            </div>

                            <div className="slider-item">
                                <div className="single-brand">
                                    <a href="https://themeforest.net/user/hastech" className="brand-thumb">
                                        <img src="assets/img/brand/2.jpg" alt="brand-thumb-nail" />
                                    </a>
                                </div>
                            </div>

                            <div className="slider-item">
                                <div className="single-brand">
                                    <a href="https://themeforest.net/user/hastech" className="brand-thumb">
                                        <img src="assets/img/brand/3.jpg" alt="brand-thumb-nail" />
                                    </a>
                                </div>
                            </div>

                            <div className="slider-item">
                                <div className="single-brand">
                                    <a href="https://themeforest.net/user/hastech" className="brand-thumb">
                                        <img src="assets/img/brand/4.jpg" alt="brand-thumb-nail" />
                                    </a>
                                </div>
                            </div>

                            <div className="slider-item">
                                <div className="single-brand">
                                    <a href="https://themeforest.net/user/hastech" className="brand-thumb">
                                        <img src="assets/img/brand/5.jpg" alt="brand-thumb-nail" />
                                    </a>
                                </div>
                            </div>

                            <div className="slider-item">
                                <div className="single-brand">
                                    <a href="https://themeforest.net/user/hastech" className="brand-thumb">
                                        <img src="assets/img/brand/2.jpg" alt="brand-thumb-nail" />
                                    </a>
                                </div>
                            </div>

                            <div className="slider-item">
                                <div className="single-brand">
                                    <a href="https://themeforest.net/user/hastech" className="brand-thumb">
                                        <img src="assets/img/brand/3.jpg" alt="brand-thumb-nail" />
                                    </a>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Brands;