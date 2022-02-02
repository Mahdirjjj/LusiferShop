import React, { Fragment } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import config from "../../../../Services/config.json";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';


const SwiperComponent = ({ sliders }) => {

    console.log(sliders);

    return (
        <Fragment>

            <div className="container row mx-auto mb-4 mt-2  width-97">

                <div className="col-lg-8 slider-introIndex2 px-md-3 p-0 pt-1">
                    <Swiper
                        className="swiper-container"
                        autoplay={{ delay: 3000 }}
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        loop
                        pagination={{ clickable: true }}
                        dir="rtl"

                    >

                        {sliders.map(s => {
                            return (
                                <SwiperSlide key={s.id}>
                                    <div className="swiper-wrapper">


                                        <div className="swiper-slide" >
                                            <Link to="shop.html" className="h-100">
                                                <img src={`${config.localapi}/images/sliders/origin/${s.imageName}`} className="img-fluid img-intro w-100 img-slider-big" />
                                            </Link>
                                        </div>



                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>



                <div className="col-lg-4 p-0 mt-4 mt-lg-0 pt-1">
                    <div className="col-12 banner-introIndedx2 ">
                        <Swiper className="swiper-container"
                            autoplay={{ delay: 7000 }}
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            loop
                            pagination={{ clickable: true }}
                            dir="rtl">
                            <div className="swiper-wrapper">

                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="shop.html">
                                            <img src="assets/img/slider-swiper/7.gif"
                                                className="img-fluid img-intro w-100 img-slider-big" />
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="shop.html">
                                            <img src="assets/img/slider-swiper/c1b4674fa67f216c5113bd9f6c12ea8e9464d8b1_1621838109.jpg"
                                                className="img-fluid img-intro w-100 img-slider-big" />
                                        </a>
                                    </div>
                                </SwiperSlide>



                            </div>


                        </Swiper>
                    </div>
                    <div className="col-12 img-header banner-introIndedx2 pt-3">
                        <Swiper className="swiper-container"
                            autoplay={{ delay: 5000 }}
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            loop
                            pagination={{ clickable: true }}
                            dir="rtl">
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="shop.html">
                                            <img src="assets/img/slider-swiper/7.gif"
                                                className="img-fluid img-intro w-100 img-slider-big" />
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="shop.html">
                                            <img src="assets/img/slider-swiper/c1b4674fa67f216c5113bd9f6c12ea8e9464d8b1_1621838109.jpg"
                                                className="img-fluid img-intro w-100 img-slider-big" />
                                        </a>
                                    </div>
                                </SwiperSlide>


                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>

        </Fragment >
    );
}

export default SwiperComponent;