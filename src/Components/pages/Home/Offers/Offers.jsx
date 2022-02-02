import React, { Fragment } from 'react'
import Slider from 'react-slick';


const Offers = () => {

    const settings = {
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
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
            <section className="theme1 pb-80">
                <div className="container radius__div py-4 bg-white">
                    <div className="row">
                        <div className="col-12 col-lg-5 col-xl-4 mb-5 mb-lg-0">
                            <div className="card product-card no-shadow theme-border">
                                <Slider className="product-ctry-init slick-nav-sync" adaptiveHeight slidesToShow={1} rows={1} initialSlide={0} slidesToScroll={1} infinite={false}>
                                    <div className="slider-item">
                                        <div className="card-body pt-4 px-4 pb-5 position-relative">
                                            <div className="hot-deal d-flex align-items-center justify-content-between">
                                                <h4 className="title text-dark text-capitalize">پیشنهاد داغ</h4><span
                                                    className="badge badge-success position-static cb6">%40</span>
                                            </div>

                                            <div className="countdown-sync-init">
                                                <div className="countdown-item">
                                                    <div className="product-thumb">
                                                        <img src="assets/img/slider/thumb/1.jpg" alt="product-thumb" />
                                                        <ul className="product-links d-flex justify-content-center">
                                                            <li>
                                                                <a href="wishlist.html">
                                                                    <span data-toggle="tooltip" data-placement="bottom"
                                                                        data-original-title="افزودن به علاقه‌مندی"
                                                                        className="icon-heart"></span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="compare.html">
                                                                    <span data-toggle="tooltip" data-placement="bottom"
                                                                        data-original-title="مقاسیه" className="icon-shuffle">

                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="single-product.html">
                                                                    <span data-toggle="tooltip" data-placement="bottom"
                                                                        data-original-title="مشاهده" className="icon-magnifier">
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>


                                            </div>


                                        </div>
                                        <div className="product-desc text-center p-0">
                                            <h3 className="title pt-3"><a href="shop.html">گوشی موبایل a50 2017 64 گیگ</a></h3>
                                            <div className="star-rating">
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star"></span>
                                            </div>
                                            <div className="text-center position-relative">
                                                <h6 className="product-price"><del className="del">6,200,000 تومان</del> <br /><span
                                                    className="onsale pt-3">3,000,000 تومان</span></h6>
                                                <button className="pro-btn pro-btn-right" data-toggle="modal"
                                                    data-target="#add-to-cart"><i className="fa fa-plus"></i></button>
                                            </div>
                                            <div className="availability mt-15">
                                                <p>دسترسی:<span className="in-stock pr-2">30 موجود در انبار</span></p>
                                            </div>
                                        </div>
                                        <div className="clockdiv d-md-flex justify-content-center align-items-center">

                                        </div>

                                    </div>




                                </Slider>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 col-xl-8">

                            <div className="section-title text-center mb-30">
                                <h2 className="title text-dark text-capitalize">فروش ویژه</h2>
                                <p className="text mt-10">محصولات پرفروش با تخفیف ویژه</p>
                            </div>
                            <hr/>
                            <Slider className="product-ctry-init slick-nav-sync" {...settings}>
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
                                                            <h3 className="title"><a href="shop.html">مانیتور ال جی
                    مدل 24MK430H-B سایز 23.5 </a></h3>
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
                                                            <h3 className="title"><a href="shop.html">دوربین Eos 80D
                    EF S به همراه لنز 18-135 میلی متر f/3.5-5.6 IS USM</a></h3>
                                                            <div className="star-rating">
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star de-selected"></span>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between">
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
                                                            <h3 className="title"><a href="shop.html">مانیتور ایسوس
                    مدل VP228HE سایز 21.5 اینچ</a></h3>
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
                                                            <h3 className="title"><a href="shop.html">دوربین دیجیتال
                    کانن مدل EOS 2000D به همراه لنز 18-55 میلی متر DC III</a>
                                                            </h3>
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
                                                            <h3 className="title"><a href="shop.html">مانیتور ایکس
                    ویژن مدل XK2410H سایز 23.8 اینچ</a></h3>
                                                            <div className="star-rating">
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star de-selected"></span>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between">
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
                                                            <h3 className="title"><a href="shop.html">شارژر دیواری
                    ترانیو مدل P11-1 به همراه کابل تبدیل لایتنینگ</a></h3>
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
                                                            <h3 className="title"><a href="shop.html">مانیتور ایکس
                    ویژن مدل XK2410H سایز 23.8 اینچ</a></h3>
                                                            <div className="star-rating">
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star de-selected"></span>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between">
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
                                                            <h3 className="title"><a href="shop.html">شارژر دیواری
                    ترانیو مدل P11-1 به همراه کابل تبدیل لایتنینگ</a></h3>
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
                                                            <h3 className="title"><a href="shop.html"> مودم روتر بی
                    سیم ADSL2 Plus و VDSL2 دی لینک مدل DSL-224 NEW</a></h3>
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
                                                            <h3 className="title"><a href="shop.html">شارژر دیواری
                    ترانیو مدل P11-1 به همراه کابل تبدیل لایتنینگ</a></h3>
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
                                                            <h3 className="title"><a href="shop.html"> مودم روتر بی
                    سیم ADSL2 Plus و VDSL2 دی لینک مدل DSL-224 NEW</a></h3>
                                                            <div className="star-rating">
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star"></span>
                                                                <span className="ion-ios-star de-selected"></span>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between">
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
                                                            <h3 className="title"><a href="shop.html">شارژر دیواری
                    ترانیو مدل P11-1 به همراه کابل تبدیل لایتنینگ</a></h3>
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
                            </Slider>
                        </div>
                    </div>

                </div>
            </section >
        </Fragment >
    );
}

export default Offers;