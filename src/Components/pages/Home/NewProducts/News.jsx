import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";



const NewProducts = () => {

    const settings = {
        infinite: false,
        speed: 500,
        arrows:false,
        slidesToShow: 5,
        slidesToScroll: 5,
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
        <Fragment>
            <section className="product-tab pt-50 pb-80">
                <div className="container bg-white py-3 radius__div">
                    <div className="product-tab-nav mb-25">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="section-title text-center mb-30">
                                    <h2 className="title text-dark text-capitalize">محصولات</h2>
                                    <p className="text mt-10">برترین محصولات را از ما بخواهید</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <nav className="product-tab-menu theme1">
                                    <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                                                role="tab" aria-controls="pills-home" aria-selected="true">پرفروش ترین </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                                                role="tab" aria-controls="pills-profile" aria-selected="false">جدید ترین</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
                                                role="tab" aria-controls="pills-contact" aria-selected="false">تخفیف ویژه</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-12">
                            <div className="tab-content" id="pills-tabContent">

                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab">
                                    <Slider className="product-slider-init theme1 slick-nav"  {...settings}>

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/1.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                        لپ تاپ 16 اینچی MacBook Pro MVVM2 2019 همراه با تاچ
                                                                        بار
                                                            </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-success top-left">10% تخفیف</span>
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/6.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><Link to="/product/id">مانیتور
                                                                    مخصوص بازی ایسوس مدل TUF GAMING VG27VQ سایز 27
                                                                اینچ</Link></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">
                                                                            <span className="onsale">3,000,000 تومان</span>
                                                                        </h6>
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/2.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                        گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو
                                                                        سیم‌...
                                                            </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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
                                            <div className="product-list">
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
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                بازی قابل حمل پی وی پی استیشن مدل 3000</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
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
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                        کاور طرح موزیک کد 1146 مناسب برای گوشی موبایل
                                                                        سامس...
                                                            </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">5,520,000 تومان</h6>
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/8.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                    بازی مایکروسافت مدل XBOX SERIES X ظرفیت 1
                                                                ترابایت</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/4.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/12.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                        کاور طرح موزیک کد 1146 مناسب برای گوشی موبایل
                                                                        سامس...
                                                            </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">
                                                                            <span className="onsale">3,000,000 تومان</span>
                                                                        </h6>
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/9.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                    بازی مایکروسافت مدل XBOX SERIES X ظرفیت 1
                                                                ترابایت</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/5.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/12.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کتاب‌خوان آمازون مدل
                                                                Kindle Paperwhite نسل دهم - ظرفیت 32 </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/12.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/5.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                    بازی مایکروسافت مدل XBOX SERIES X ظرفیت 1
                                                                ترابایت</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/10.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/8.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کتاب‌خوان آمازون مدل
                                                                Kindle Paperwhite نسل دهم - ظرفیت 32 </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">
                                                                            <span className="onsale">3,000,000 تومان</span>
                                                                        </h6>
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/11.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/5.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                    بازی مایکروسافت مدل XBOX SERIES X ظرفیت 1
                                                                ترابایت</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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


                                    </Slider>
                                </div>

                                <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab">
                                    <Slider className="product-slider-init theme1 slick-nav"  {...settings}>

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/1.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                        لپ تاپ 16 اینچی MacBook Pro MVVM2 2019 همراه با تاچ
                                                                        بار
                                                            </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-success top-left">10% تخفیف</span>
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/6.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">مانیتور
                                                                    مخصوص بازی ایسوس مدل TUF GAMING VG27VQ سایز 27
                                                                اینچ</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">
                                                                            <span className="onsale">3,000,000 تومان</span>
                                                                        </h6>
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/2.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                        گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو
                                                                        سیم‌...
                                                            </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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
                                            <div className="product-list">
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
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                بازی قابل حمل پی وی پی استیشن مدل 3000</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
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
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                        کاور طرح موزیک کد 1146 مناسب برای گوشی موبایل
                                                                        سامس...
                                                            </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">5,520,000 تومان</h6>
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/8.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                    بازی مایکروسافت مدل XBOX SERIES X ظرفیت 1
                                                                ترابایت</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/4.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/12.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                        کاور طرح موزیک کد 1146 مناسب برای گوشی موبایل
                                                                        سامس...
                                                            </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">
                                                                            <span className="onsale">3,000,000 تومان</span>
                                                                        </h6>
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/9.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                    بازی مایکروسافت مدل XBOX SERIES X ظرفیت 1
                                                                ترابایت</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/5.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/12.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کتاب‌خوان آمازون مدل
                                                                Kindle Paperwhite نسل دهم - ظرفیت 32 </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/12.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/5.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                    بازی مایکروسافت مدل XBOX SERIES X ظرفیت 1
                                                                ترابایت</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/10.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/8.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کتاب‌خوان آمازون مدل
                                                                Kindle Paperwhite نسل دهم - ظرفیت 32 </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">
                                                                            <span className="onsale">3,000,000 تومان</span>
                                                                        </h6>
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/11.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/5.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                    بازی مایکروسافت مدل XBOX SERIES X ظرفیت 1
                                                                ترابایت</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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
                                    </Slider>
                                </div>

                                <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                                    aria-labelledby="pills-profile-tab">
                                    <Slider className="product-slider-init theme1 slick-nav"  {...settings}>

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/1.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                        لپ تاپ 16 اینچی MacBook Pro MVVM2 2019 همراه با تاچ
                                                                        بار
                                                            </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-success top-left">10% تخفیف</span>
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/6.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">مانیتور
                                                                    مخصوص بازی ایسوس مدل TUF GAMING VG27VQ سایز 27
                                                                اینچ</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">
                                                                            <span className="onsale">3,000,000 تومان</span>
                                                                        </h6>
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/2.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                        گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو
                                                                        سیم‌...
                                                            </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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
                                            <div className="product-list">
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
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                بازی قابل حمل پی وی پی استیشن مدل 3000</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
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
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                        کاور طرح موزیک کد 1146 مناسب برای گوشی موبایل
                                                                        سامس...
                                                            </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">5,520,000 تومان</h6>
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/8.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                    بازی مایکروسافت مدل XBOX SERIES X ظرفیت 1
                                                                ترابایت</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/4.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/12.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                        کاور طرح موزیک کد 1146 مناسب برای گوشی موبایل
                                                                        سامس...
                                                            </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">
                                                                            <span className="onsale">3,000,000 تومان</span>
                                                                        </h6>
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/9.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                    بازی مایکروسافت مدل XBOX SERIES X ظرفیت 1
                                                                ترابایت</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/5.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/12.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کتاب‌خوان آمازون مدل
                                                                Kindle Paperwhite نسل دهم - ظرفیت 32 </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/12.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/5.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                    بازی مایکروسافت مدل XBOX SERIES X ظرفیت 1
                                                                ترابایت</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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

                                        <div className="slider-item">
                                            <div className="product-list mb-30">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/10.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/8.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کتاب‌خوان آمازون مدل
                                                                Kindle Paperwhite نسل دهم - ظرفیت 32 </a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">
                                                                            <span className="onsale">3,000,000 تومان</span>
                                                                        </h6>
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
                                            <div className="product-list">
                                                <div className="card product-card">
                                                    <div className="card-body p-0">
                                                        <div className="media flex-column">
                                                            <div className="product-thumbnail position-relative">
                                                                <span className="badge badge-danger top-right">جدید</span>
                                                                <a href="single-product.html">
                                                                    <img className="first-img" src="assets/img/product/11.jpg"
                                                                        alt="thumbnail" />
                                                                    <img className="second-img" src="assets/img/product/5.jpg"
                                                                        alt="thumbnail" />
                                                                </a>

                                                                <ul className="product-links d-flex justify-content-center">
                                                                    <li>
                                                                        <a href="wishlist.html">
                                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                                title="افزودن به علاقه‌مندی" className="icon-heart">
                                                                            </span>
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
                                                                    <h3 className="title"><a href="shop.html">کنسول
                                                                    بازی مایکروسافت مدل XBOX SERIES X ظرفیت 1
                                                                ترابایت</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
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
                                    </Slider>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default NewProducts;