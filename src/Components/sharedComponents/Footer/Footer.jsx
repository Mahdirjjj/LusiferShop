import React, { Fragment } from 'react'

const Footer = () => {
    return (
        <Fragment>
            <footer className=" theme1 position-relative bg-white">

                <div className="footer-bottom pt-80 pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mb-30">
                                <div className="footer-widget mx-w-400">
                                    <div className="footer-logo mb-35">
                                        <a href="index.html">
                                            <img src="/assets/img/logo/logo-dark.jpg" alt="footer logo" />
                                        </a>
                                    </div>

                                    <div className="address-widget mb-30">
                                        <div className="media">
                                            <span className="address-icon mr-3">
                                                <img src="/assets/img/icon/phone.png" alt="phone" />
                                            </span>
                                            <div className="media-body">
                                                <p className="help-text text-uppercase">به کمک نیاز دارید؟</p>
                                                <h4 className="title text-dark"><a href="tel:+1(123)8889999">(+011) 345 678</a></h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="social-network">
                                        <ul className="d-flex">
                                            <li><a href="https://www.facebook.com/" target="_blank"><span
                                                className="icon-social-facebook"></span></a></li>
                                            <li><a href="https://twitter.com/" target="_blank"><span
                                                className="icon-social-twitter"></span></a></li>
                                            <li><a href="https://www.youtube.com/" target="_blank"><span
                                                className="icon-social-youtube"></span></a></li>
                                            <li><a href="https://www.instagram.com/" target="_blank"><span
                                                className="icon-social-instagram"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-2 mb-30">
                                <div className="footer-widget">
                                    <div className="border-bottom cbb1 mb-25">
                                        <div className="section-title pb-20">
                                            <h2 className="title text-dark text-uppercase">خدمات مشتریان</h2>
                                        </div>
                                    </div>

                                    <ul className="footer-menu">
                                        <li><a href="#">پاسخ به پرسش‌های متداول</a></li>
                                        <li><a href="#">رویه‌های بازگرداندن کالا</a></li>
                                        <li><a href="#">شرایط استفاده</a></li>
                                        <li><a href="#">حریم خصوصی</a></li>
                                        <li><a href="#">درباره ما</a></li>
                                        <li><a href="#">تماس با ما</a></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-2 mb-30">
                                <div className="footer-widget">
                                    <div className="border-bottom cbb1 mb-25">
                                        <div className="section-title pb-20">
                                            <h2 className="title text-dark text-uppercase">راهنمای خرید</h2>
                                        </div>
                                    </div>

                                    <ul className="footer-menu">
                                        <li><a href="#">نحوه ثبت سفارش </a></li>
                                        <li><a href="#"> رویه ارسال سفارش </a></li>

                                        <li><a href="#">شیوه‌های پرداخت</a></li>

                                        <li><a href="#">همکاری با فروشگاه </a></li>

                                        <li><a href="#">پیوستن به باشگاه مشتریان</a></li>

                                        <li><a href="#">شرایط پرداخت اقسادی</a></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-30">
                                <div className="footer-widget">
                                    <div className="border-bottom cbb1 mb-25">
                                        <div className="section-title pb-20">
                                            <h2 className="title text-dark text-uppercase">با ما همراه باشید</h2>
                                        </div>
                                    </div>
                                    <p className="text mb-20">برای ارتباط با ما و برقراری ارتباط لطفا آدرس ایمیل خود را وارد کنید.
                  </p>
                                    <div className="nletter-form mb-35">
                                        <form className="form-inline position-relative" action="#" target="_blank" method="post">
                                            <input className="form-control" type="text" placeholder="پست الکترونیک" />
                                            <button className="btn nletter-btn text-capitalize" type="submit">
                                                ثبت نام</button>
                                        </form>
                                    </div>

                                    <div className="store d-flex">
                                        <a href="https://www.apple.com/" className="d-inline-block mr-3"><img
                                            src="/assets/img/icon/apple.png" alt="apple icon" /> </a>
                                        <a href="https://play.google.com/store/" className="d-inline-block"><img
                                            src="/assets/img/icon/play.png" alt="apple icon" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        </Fragment>
    );
}

export default Footer;