import React from 'react'
import Slider from 'react-slick';

const SimilarProducts = () => {

    const settings = {
        infinite: false,
        speed: 500,
        arrows: false,
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
        <section class="theme3 bg-white pb-80">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title text-center mb-30">
                            <h2 class="title text-dark text-capitalize">محصولات مشابه</h2>
                            <p class="text mt-10">محصولات مرتبط با محصول شما
                </p>
                        </div>
                    </div>
                    <div class="col-12">
                        <Slider class="product-slider-init slick-nav" {...settings}>
                            <div class="slider-item">
                                <div class="card product-card">
                                    <div class="card-body p-0">
                                        <div class="media flex-column">
                                            <div class="product-thumbnail position-relative">
                                                <span class="badge badge-danger top-right">جدید</span>
                                                <a href="single-product.html">
                                                    <img class="first-img" src="/assets/img/new-products/1.jpg"
                                                        alt="thumbnail" />
                                                    <img class="second-img" src="/assets/img/new-products/1.1.jpg"
                                                        alt="thumbnail" />
                                                </a>

                                                <ul class="product-links d-flex justify-content-center">
                                                    <li>
                                                        <a href="wishlist.html">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="add to wishlist" class="icon-heart"> </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#compare">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="Add to compare" class="icon-shuffle"></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#quick-view">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="Quick view" class="icon-magnifier"></span>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div class="media-body">
                                                <div class="product-desc">
                                                    <h3 class="title"><a href="shop-grid-4-column.html" tabindex="0">
                                                        کاور طرح موزیک کد 1146 مناسب برای گوشی موبایل
                                                        سامس...
                                            </a></h3>
                                                    <div class="star-rating">
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star de-selected"></span>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="product-price">5,520,000 تومان</h6>
                                                        <button class="pro-btn" data-toggle="modal" data-target="#add-to-cart" tabindex="0"><i class="fa fa-cart-plus"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="slider-item">
                                <div class="card product-card">
                                    <div class="card-body p-0">
                                        <div class="media flex-column">
                                            <div class="product-thumbnail position-relative">
                                                <span class="badge badge-danger top-right">جدید</span>
                                                <a href="single-product.html">
                                                    <img class="first-img" src="/assets/img/new-products/2.jpg"
                                                        alt="thumbnail" />
                                                </a>

                                                <ul class="product-links d-flex justify-content-center">
                                                    <li>
                                                        <a href="wishlist.html">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="add to wishlist" class="icon-heart"> </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#compare">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="Add to compare" class="icon-shuffle"></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#quick-view">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="Quick view" class="icon-magnifier"></span>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div class="media-body">
                                                <div class="product-desc">
                                                    <h3 class="title"><a href="shop-grid-4-column.html" tabindex="0">
                                                        کاور طرح موزیک کد 1146 مناسب برای گوشی موبایل
                                                        سامس...
                                            </a></h3>
                                                    <div class="star-rating">
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star de-selected"></span>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="product-price">5,520,000 تومان</h6>
                                                        <button class="pro-btn" data-toggle="modal" data-target="#add-to-cart" tabindex="0"><i class="fa fa-cart-plus"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="slider-item">
                                <div class="card product-card">
                                    <div class="card-body p-0">
                                        <div class="media flex-column">
                                            <div class="product-thumbnail position-relative">
                                                <span class="badge badge-success top-left"> % 10 تخفیف</span>
                                                <span class="badge badge-danger top-right">جدید</span>
                                                <a href="single-product.html">
                                                    <img class="first-img" src="/assets/img/new-products/3.jpg"
                                                        alt="thumbnail" />
                                                </a>

                                                <ul class="product-links d-flex justify-content-center">
                                                    <li>
                                                        <a href="wishlist.html">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="add to wishlist" class="icon-heart"> </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#compare">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="Add to compare" class="icon-shuffle"></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#quick-view">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="Quick view" class="icon-magnifier"></span>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div class="media-body">
                                                <div class="product-desc">
                                                    <h3 class="title"><a href="shop-grid-4-column.html" tabindex="0">
                                                        کاور طرح موزیک کد 1146 مناسب برای گوشی موبایل
                                                        سامس...
                                            </a></h3>
                                                    <div class="star-rating">
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star de-selected"></span>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="product-price">5,520,000 تومان</h6>
                                                        <button class="pro-btn" data-toggle="modal" data-target="#add-to-cart" tabindex="0"><i class="fa fa-cart-plus"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="slider-item">
                                <div class="card product-card">
                                    <div class="card-body p-0">
                                        <div class="media flex-column">
                                            <div class="product-thumbnail position-relative">
                                                <span class="badge badge-danger top-right">جدید</span>
                                                <a href="single-product.html">
                                                    <img class="first-img" src="/assets/img/new-products/4.jpg"
                                                        alt="thumbnail" />
                                                    <img class="second-img" src="/assets/img/new-products/4.1.jpg"
                                                        alt="thumbnail" />
                                                </a>

                                                <ul class="product-links d-flex justify-content-center">
                                                    <li>
                                                        <a href="wishlist.html">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="add to wishlist" class="icon-heart"> </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#compare">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="Add to compare" class="icon-shuffle"></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#quick-view">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="Quick view" class="icon-magnifier"></span>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div class="media-body">
                                                <div class="product-desc">
                                                    <h3 class="title"><a href="shop-grid-4-column.html" tabindex="0">
                                                        کاور طرح موزیک کد 1146 مناسب برای گوشی موبایل
                                                        سامس...
                                            </a></h3>
                                                    <div class="star-rating">
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star de-selected"></span>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="product-price">5,520,000 تومان</h6>
                                                        <button class="pro-btn" data-toggle="modal" data-target="#add-to-cart" tabindex="0"><i class="fa fa-cart-plus"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="slider-item">
                                <div class="card product-card">
                                    <div class="card-body p-0">
                                        <div class="media flex-column">
                                            <div class="product-thumbnail position-relative">
                                                <span class="badge badge-danger top-right">جدید</span>
                                                <a href="single-product.html">
                                                    <img class="first-img" src="/assets/img/new-products/5.jpg"
                                                        alt="thumbnail" />
                                                </a>

                                                <ul class="product-links d-flex justify-content-center">
                                                    <li>
                                                        <a href="wishlist.html">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="add to wishlist" class="icon-heart"> </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#compare">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="Add to compare" class="icon-shuffle"></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#quick-view">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="Quick view" class="icon-magnifier"></span>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div class="media-body">
                                                <div class="product-desc">
                                                    <h3 class="title"><a href="shop-grid-4-column.html" tabindex="0">
                                                        کاور طرح موزیک کد 1146 مناسب برای گوشی موبایل
                                                        سامس...
                                            </a></h3>
                                                    <div class="star-rating">
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star de-selected"></span>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="product-price">5,520,000 تومان</h6>
                                                        <button class="pro-btn" data-toggle="modal" data-target="#add-to-cart" tabindex="0"><i class="fa fa-cart-plus"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="slider-item">
                                <div class="card product-card">
                                    <div class="card-body p-0">
                                        <div class="media flex-column">
                                            <div class="product-thumbnail position-relative">
                                                <span class="badge badge-danger top-right">جدید</span>
                                                <a href="single-product.html">
                                                    <img class="first-img" src="/assets/img/new-products/6.jpg"
                                                        alt="thumbnail" />
                                                </a>

                                                <ul class="product-links d-flex justify-content-center">
                                                    <li>
                                                        <a href="wishlist.html">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="add to wishlist" class="icon-heart"> </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#compare">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="Add to compare" class="icon-shuffle"></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="modal" data-target="#quick-view">
                                                            <span data-toggle="tooltip" data-placement="bottom"
                                                                title="Quick view" class="icon-magnifier"></span>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div class="media-body">
                                                <div class="product-desc">
                                                    <h3 class="title"><a href="shop-grid-4-column.html" tabindex="0">
                                                        کاور طرح موزیک کد 1146 مناسب برای گوشی موبایل
                                                        سامس...
                                            </a></h3>
                                                    <div class="star-rating">
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star de-selected"></span>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="product-price">5,520,000 تومان</h6>
                                                        <button class="pro-btn" data-toggle="modal" data-target="#add-to-cart" tabindex="0"><i class="fa fa-cart-plus"></i></button>
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
        </section>

    );
}

export default SimilarProducts;