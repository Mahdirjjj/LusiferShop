import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductSliderComponent = () => {

    const breakpoints = {
        // when window width is <= 499px
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        },
        600: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        },

        1000: {
            slidesPerView: 4,
            spaceBetweenSlides: 1000
        }
    }



    return (
        <Fragment>
            <div className="container-fluid bg-company2 p-0  mt-5">
                <div className="container row width-90 mx-auto">
                    <div className="col-md-2 col-12 slider-offer my-1">
                        <a href="shop.html" className="c-discount__title c-discount__title--fresh" title="پیشنهاد شگفت‌انگیز">
                            <img src="assets/img/11.png" alt="پیشنهاد شگفت‌انگیز " />
                            <div className="o-btn c-discount__btn btn "> مشاهده همه<i className="fa fa-chevron-left pr-2"></i></div>
                        </a>
                    </div>
                    <div className="col-md-10 col-12 my-1">

                        <Swiper
                            className="swiper-container"
                            modules={[Navigation, Pagination]}
                            breakpoints={breakpoints}
                            slidesPerView={1}
                            navigation
                            dir="rtl"


                        >
                            <div className="swiper-wrapper">

                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="product-list mb-30 px-2">
                                            <div className="card product-card">
                                                <div className="card-body p-0">
                                                    <div className="media flex-column">
                                                        <div className="product-thumbnail position-relative">
                                                            <span className="badge badge-danger top-right">جدید</span>
                                                            <a href="single-product.html">
                                                                <img className="first-img" src="assets/img/product/3.jpg"
                                                                    alt="thumbnail" />
                                                            </a>

                                                            <ul className="product-links d-flex justify-content-center">
                                                                <li>
                                                                    <a href="wishlist.html">
                                                                        <span data-toggle="tooltip" data-placement="bottom"
                                                                            title="افزودن به علاقه‌مندی" className="icon-heart"> </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html">
                                                                        <span data-toggle="tooltip" data-placement="bottom"
                                                                            title="مقاسیه" className="icon-shuffle"></span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-product.html">
                                                                        <span data-toggle="tooltip" data-placement="bottom"
                                                                            title="مشاهده" className="icon-magnifier"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                        <div className="media-body">
                                                            <div className="product-desc">
                                                                <h3 className="title"><a href="shop.html">
                                                                    لپ تاپ 16 اینچی اپل مدل MacBook Pro MVVM2 2019 همراه با تاچ
                                                                    بار
                                                    </a></h3>
                                                                <div className="star-rating">
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star de-selected"></span>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="product-price">4,000,000 تومان</h6>
                                                                    <button className="pro-btn" data-toggle="modal"
                                                                        data-target="#add-to-cart"><i
                                                                            className="fa fa-plus"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="product-list mb-30 px-2">
                                            <div className="card product-card">
                                                <div className="card-body p-0">
                                                    <div className="media flex-column">
                                                        <div className="product-thumbnail position-relative">
                                                            <span className="badge badge-danger top-right">جدید</span>
                                                            <a href="single-product.html">
                                                                <img className="first-img" src="assets/img/product/4.jpg"
                                                                    alt="thumbnail" />
                                                            </a>

                                                            <ul className="product-links d-flex justify-content-center">
                                                                <li>
                                                                    <a href="wishlist.html">
                                                                        <span data-toggle="tooltip" data-placement="bottom"
                                                                            title="افزودن به علاقه‌مندی" className="icon-heart"> </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html">
                                                                        <span data-toggle="tooltip" data-placement="bottom"
                                                                            title="مقاسیه" className="icon-shuffle"></span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-product.html">
                                                                        <span data-toggle="tooltip" data-placement="bottom"
                                                                            title="مشاهده" className="icon-magnifier"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                        <div className="media-body">
                                                            <div className="product-desc">
                                                                <h3 className="title"><a href="shop.html">
                                                                    لپ تاپ 16 اینچی اپل مدل MacBook Pro MVVM2 2019 همراه با تاچ
                                                                    بار
                                                    </a></h3>
                                                                <div className="star-rating">
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star de-selected"></span>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="product-price">4,000,000 تومان</h6>
                                                                    <button className="pro-btn" data-toggle="modal"
                                                                        data-target="#add-to-cart"><i
                                                                            className="fa fa-plus"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="product-list mb-30 px-2">
                                            <div className="card product-card">
                                                <div className="card-body p-0">
                                                    <div className="media flex-column">
                                                        <div className="product-thumbnail position-relative">
                                                            <span className="badge badge-danger top-right">جدید</span>
                                                            <a href="single-product.html">
                                                                <img className="first-img" src="assets/img/product/19.jpg"
                                                                    alt="thumbnail" />
                                                            </a>

                                                            <ul className="product-links d-flex justify-content-center">
                                                                <li>
                                                                    <a href="wishlist.html">
                                                                        <span data-toggle="tooltip" data-placement="bottom"
                                                                            title="افزودن به علاقه‌مندی" className="icon-heart"> </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html">
                                                                        <span data-toggle="tooltip" data-placement="bottom"
                                                                            title="مقاسیه" className="icon-shuffle"></span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-product.html">
                                                                        <span data-toggle="tooltip" data-placement="bottom"
                                                                            title="مشاهده" className="icon-magnifier"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                        <div className="media-body">
                                                            <div className="product-desc">
                                                                <h3 className="title"><a href="shop.html">
                                                                    لپ تاپ 16 اینچی اپل مدل MacBook Pro MVVM2 2019 همراه با تاچ
                                                                    بار
                                                    </a></h3>
                                                                <div className="star-rating">
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star de-selected"></span>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="product-price">4,000,000 تومان</h6>
                                                                    <button className="pro-btn" data-toggle="modal"
                                                                        data-target="#add-to-cart"><i
                                                                            className="fa fa-plus"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="product-list mb-30 px-2">
                                            <div className="card product-card">
                                                <div className="card-body p-0">
                                                    <div className="media flex-column">
                                                        <div className="product-thumbnail position-relative">
                                                            <span className="badge badge-danger top-right">جدید</span>
                                                            <a href="single-product.html">
                                                                <img className="first-img" src="assets/img/product/7.jpg"
                                                                    alt="thumbnail" />
                                                            </a>

                                                            <ul className="product-links d-flex justify-content-center">
                                                                <li>
                                                                    <a href="wishlist.html">
                                                                        <span data-toggle="tooltip" data-placement="bottom"
                                                                            title="افزودن به علاقه‌مندی" className="icon-heart"> </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html">
                                                                        <span data-toggle="tooltip" data-placement="bottom"
                                                                            title="مقاسیه" className="icon-shuffle"></span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-product.html">
                                                                        <span data-toggle="tooltip" data-placement="bottom"
                                                                            title="مشاهده" className="icon-magnifier"></span>
                                                                    </a>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                        <div className="media-body">
                                                            <div className="product-desc">
                                                                <h3 className="title"><a href="shop.html">
                                                                    لپ تاپ 16 اینچی اپل مدل MacBook Pro MVVM2 2019 همراه با تاچ
                                                                    بار
                                                    </a></h3>
                                                                <div className="star-rating">
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star"></span>
                                                                    <span className="ion-ios-star de-selected"></span>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="product-price">4,000,000 تومان</h6>
                                                                    <button className="pro-btn" data-toggle="modal"
                                                                        data-target="#add-to-cart"><i
                                                                            className="fa fa-plus"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>

                        </Swiper>

                    </div>


                </div>
            </div>


        </Fragment>
    );
}

export default ProductSliderComponent;