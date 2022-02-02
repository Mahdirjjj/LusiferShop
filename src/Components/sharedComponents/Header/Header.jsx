import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

const Header = () => {

    const user = useSelector(state => state.user)
    console.log(user);

    return (
        <Fragment>

            <div className="offcanvas-overlay"></div>


            <div id="offcanvas-mobile-menu" className="offcanvas theme1 offcanvas-mobile-menu">
                <div className="inner">
                    <div className="border-bottom mb-4 pb-4 text-right">
                        <button className="offcanvas-close">×</button>
                    </div>
                    <div className="offcanvas-head mb-4">
                        <nav className="offcanvas-top-nav">
                            <ul className="d-flex justify-content-center align-items-center">
                                <li className="mx-4"><a href="compare.html"><i className="ion-ios-loop-strong"></i> مقاسیه
                        <span>(0)</span>
                                </a></li>
                                <li className="mx-4">
                                    <a href="wishlist.html"> <i className="ion-android-favorite-outline"></i> علاقه‌مندی
                        <span>(0)</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <nav className="offcanvas-menu">
                        <ul>
                            <li><a href="index.html" className="pl-0">صفحه‌ اصلی </a></li>
                            <li><a href="index.html" className="pl-0">حساب کاربری </a></li>
                            <li><a href="index.html" className="pl-0">ثبت نام/ورود </a></li>
                            <li><a href="shop.html">لیست محصولات <i className="ion-ios-arrow-down"></i></a>
                                <ul className="offcanvas-submenu">
                                    <li>
                                        <a href="#"><span className="menu-text">لوازم الکترونیکی</span></a>
                                        <ul className="offcanvas-submenu">
                                            <li><a href="#">لپ تاپ </a></li>
                                            <li><a href="#">گوشی و موبایل</a></li>
                                            <li><a href="#">تلوبزیون</a></li>
                                            <li><a href="#">یخچال</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#"><span className="menu-text">سوپرمارکت</span></a>
                                        <ul className="offcanvas-submenu">
                                            <li><a href="#">نوشیدنی</a></li>
                                            <li><a href="#">محصولات پروتئینی</a></li>
                                            <li><a href="#">محصولات لبنی</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#"><span className="menu-text">مد و پوشاک</span></a>
                                        <ul className="offcanvas-submenu">
                                            <li><a href="#">لباس مردانه</a></li>
                                            <li><a href="#">لباس زنانه</a></li>
                                            <li><a href="#">لباس بچگانه</a></li>
                                            <li><a href="#">لباس نوزادی</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#"><span className="menu-text">دیگر صفحات</span></a>
                                        <ul className="offcanvas-submenu">
                                            <li><a href="shop-grid-right-sidebar.html">محصولات</a></li>
                                            <li><a href="cart.html">سبد خرید</a></li>
                                            <li><a href="login.html">ورود و ثبت نام</a></li>
                                            <li><a href="compare.html">مقایسه محصول</a></li>
                                            <li><a href="myaccount.html"> حساب کاربری</a></li>
                                            <li><a href="checkout.html"> پرداخت خرید</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="blog.html">وبلاگ</a></li>
                            <li><a href="about-us.html">درباره ما</a></li>
                            <li><a href="contact.html">تماس با ما</a></li>
                        </ul>
                    </nav>
                    <div className="offcanvas-social py-30">
                        <ul>
                            <li>
                                <a href="#"><i className="icon-social-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icon-social-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icon-social-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icon-social-google"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icon-social-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div id="offcanvas-wishlist" className="offcanvas offcanvas-wishlist theme1">
                <div className="inner">
                    <div className="head d-flex flex-wrap justify-content-between">
                        <span className="title"> علاقه مندی‌ها</span>
                        <button className="offcanvas-close">×</button>
                    </div>
                    <ul className="minicart-product-list">
                        <li>
                            <a href="single-product.html" className="image"><img src="/assets/img/product/4.jpg"
                                alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">محصول شماره 1</a>
                                <span className="quantity-price">1 x <span className="amount">3,500,000 تومان</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="/assets/img/product/5.jpg"
                                alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">محصول شماره 2</a>
                                <span className="quantity-price">1 x <span className="amount">4,500,000 تومان</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="/assets/img/product/6.jpg"
                                alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">محصول شماره 3</a>
                                <span className="quantity-price">1 x <span className="amount">9,000,000 تومان</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                    </ul>
                    <a href="wishlist.html"
                        className="btn theme--btn-default btn--lg d-block d-sm-inline-block rounded-5 mt-30">لیست علاقه مندی‌ها</a>
                </div>
            </div>



            <div id="offcanvas-cart" className="offcanvas offcanvas-cart theme1">
                <div className="inner">
                    <div className="head d-flex flex-wrap justify-content-between">
                        <span className="title">سبد خربد</span>
                        <button className="offcanvas-close">×</button>
                    </div>
                    <ul className="minicart-product-list">
                        <li>
                            <a href="single-product.html" className="image"><img src="/assets/img/product/1.jpg"
                                alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">محصول شماره 1</a>
                                <span className="quantity-price">1 x <span className="amount">12,500,000 تومان</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="/assets/img/product/2.jpg"
                                alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">محصول شماره 2</a>
                                <span className="quantity-price">1 x <span className="amount">3,200,000 تومان</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="/assets/img/product/3.jpg"
                                alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">محصول شماره 3</a>
                                <span className="quantity-price">1 x <span className="amount">4,900,000 تومان</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                    </ul>
                    <div className="sub-total d-flex flex-wrap justify-content-between">
                        <strong>مجموع :</strong>
                        <span className="amount">18,500,000 تومان</span>
                    </div>
                    <a href="cart.html"
                        className="btn theme--btn-default btn--lg d-block d-sm-inline-block rounded-5 m-sm-2">مشاهده سبد خرید</a>
                    <a href="checkout.html"
                        className="btn theme-btn--dark1 btn--lg d-block d-sm-inline-block mt-4 mt-sm-0 rounded-5"> مرحله پرداخت</a>
                    <p className="minicart-message">! ارسال رایگان با مجموع سفارشات بیش از 100 هزار تومان</p>
                </div>
            </div>




            <header>

                <div className="header-top theme1 bg-dark py-15">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-7 order-last order-md-first py-1">
                                <div className="static-info text-center text-md-left">
                                    <p className="text-white"> به فروشگاه اینترنتی <span className="theme-color">لوسیفر</span> خوش
                      آمدید.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="header-middle py-20">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-6 col-lg-2 order-first">
                                <div className="logo text-center text-sm-left mb-30 mb-sm-0">
                                    <a href="index.html"><img src="/assets/img/logo/logo-dark.jpg" alt="logo" /></a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-5 col-xl-4">

                                <div className="mobile__Res d-flex align-items-center justify-content-center justify-content-sm-end">
                                    <div className="media static-media ml-50 d-none d-lg-flex">
                                        <img className="mr-3 align-self-center" src="/assets/img/icon/1.png" alt="icon" />
                                        <div className="media-body">
                                            <div className="phone">
                                                <span className="text-muted">تماس با ما:</span>
                                            </div>
                                            <div className="phone">
                                                <a href="tel:(+123)4567890" className="text-dark">(+123)4567890</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cart-block-links theme1">
                                        <ul className="d-flex">
                                            <li className='Icon__res'>
                                                <a href="compare.html">
                                                    <span className="position-relative">
                                                        <i className="icon-shuffle font-weight-bold"></i>
                                                        <span className="badge cbdg1">1</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className='Icon__res'>
                                                <a className="offcanvas-toggle" href="#offcanvas-wishlist">
                                                    <span className="position-relative">
                                                        <i className="icon-heart font-weight-bold"></i>
                                                        <span className="badge cbdg1">3</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="mr-0 cart-block position-relative">
                                                <a className="offcanvas-toggle" href="#offcanvas-cart">
                                                    <span className="position-relative">
                                                        <i className="icon-bag font-weight-bold"></i>
                                                        <span className="badge cbdg1">3</span>
                                                    </span>

                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="mobile-menu-toggle theme1 d-lg-none">
                                        <a href="#offcanvas-mobile-menu" className="offcanvas-toggle fa fa-bars">

                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-6 order-lg-first">
                                <div className="search-form pt-15 pt-lg-0">
                                    <form className="form-inline position-relative">
                                        <input className="form-control theme1-border" type="search"
                                            placeholder="دنبال چی میگردی...؟" />
                                        <button className="btn search-btn theme-bg btn-rounded" type="submit"><i
                                            className="icon-magnifier font-weight-bold"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <nav id="sticky" className="header-bottom theme1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-10  d-flex flex-wrap align-items-center position-relative">
                                <ul className="main-menu d-flex">
                                    <li className="active ml-0">
                                        <a href="index.html" className="pl-0">صفحه‌ اصلی </a>

                                    </li>
                                    <li className="position-static">
                                        <Link to="/Products">لیست محصولات <i className="ion-ios-arrow-down"></i></Link>
                                        <ul className="mega-menu row">
                                            <li className="col-3">
                                                <ul>
                                                    <li className="mega-menu-title"><a href="#">کالای دیجیتال</a></li>
                                                    <li><a href="#">گوشی موبایل</a></li>
                                                    <li><a href="#">لوازم برقی خانگی</a></li>
                                                    <li><a href="#">لوازم جانبی لپ تاپ</a></li>
                                                    <li><a href="#">دوربین دیجیتال</a></li>
                                                </ul>
                                            </li>
                                            <li className="col-3">
                                                <ul>
                                                    <li className="mega-menu-title"><a href="#">سوپرمارکت</a></li>
                                                    <li><a href="#">نوشیدنی</a></li>
                                                    <li><a href="#">محصولات پروتئینی</a>
                                                    </li>
                                                    <li><a href="#">محصولات لبنی</a>
                                                    </li>
                                                    <li><a href="#">آجیل و خشکبار</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-3">
                                                <ul>
                                                    <li className="mega-menu-title"><a href="#">مد و پوشاک</a></li>
                                                    <li><a href="#">لباس مردانه</a></li>
                                                    <li><a href="#">لباس زنانه</a></li>
                                                    <li><a href="#">لباس بچگانه</a></li>
                                                    <li><a href="#">لباس نوزاد</a></li>
                                                </ul>
                                            </li>
                                            <li className="col-3">
                                                <ul>
                                                    <li className="mega-menu-title"><a href="#">زیبای و سلامت</a></li>
                                                    <li><a href="#">لوازم آرایشی </a></li>
                                                    <li><a href="#">لوازم بهداشتی</a></li>
                                                    <li><a href="#">ابزار سلامت و طبی</a></li>
                                                    <li><a href="#">عطر و ادکلن </a></li>
                                                </ul>
                                            </li>
                                            <li className="col-6 mt-4">
                                                <a href="single-product.html" className="zoom-in overflow-hidden"><img
                                                    src="/assets/img/mega-menu/1.jpg" alt="img" /></a>
                                            </li>
                                            <li className="col-6 mt-4">
                                                <a href="single-product.html" className="zoom-in overflow-hidden"><img
                                                    src="/assets/img/mega-menu/2.jpg" alt="img" /></a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="#">صفحات <i className="ion-ios-arrow-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href="shop.html">محصولات</a></li>
                                            <li><a href="cart.html">سبد خرید</a></li>
                                            <li><a href="login.html">ورود و ثبت نام</a></li>
                                            <li><a href="compare.html">مقایسه محصول</a></li>
                                            <li><a href="myaccount.html">حساب کاربری</a></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="blog.html">وبلاگ </a>

                                    </li>
                                    <li><a href="about-us.html">درباره ما</a></li>
                                    <li><a href="contact.html">تماس با ما</a></li>
                                </ul>

                            </div>

                            <div className="col-lg-2  d-flex flex-wrap align-items-center position-relative">
                                <ul className="main-menu d-flex">
                                    {!isEmpty(user) ? (<li className="ml-0 ">
                                        <Link to="/userpanel" className="pl-0 d-flex align-items-center"><i className="fa fa-user ml-2"></i>پنل کاربری</Link>
                                    </li>) : (<li className="ml-0">
                                        <Link to="/login" className="pl-0 d-flex align-items-center"><i className="fa fa-sign-in-alt ml-2"></i>ورود/ثبت نام</Link>
                                    </li>)}

                                </ul>

                            </div>

                        </div>
                    </div>
                </nav>


            </header>

        </Fragment>
    );
}

export default Header;