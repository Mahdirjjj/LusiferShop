import React from 'react'

const CategoryBanner = () => {
    return (

        <div className="common-banner bg-white pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="banner-thumb">
                            <div className="zoom-in d-block overflow-hidden position-relative">
                                <img src="assets/img/banner/4.jpg" alt="banner-thumb-naile" />
                                <a href="shop.html"
                                    className="text-uppercase btn theme--btn1 btn--lg banner-btn position-absolute categoryName">لوازم
                                    آرایشی
                            بهداشتی</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="banner-thumb">
                            <div className="zoom-in d-block overflow-hidden position-relative">
                                <img src="assets/img/banner/5.jpg" alt="banner-thumb-naile" />
                                <a href="shop.html"
                                    className="text-uppercase btn theme--btn1 btn--lg banner-btn position-absolute categoryName">کالای
                            دیجیتال</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-30">
                        <div className="banner-thumb">
                            <div className="zoom-in d-block overflow-hidden position-relative mb-30">
                                <img src="assets/img/banner/6.jpg" alt="banner-thumb-naile" />
                                <a href="shop.html"
                                    className="text-uppercase btn theme--btn1 btn--lg banner-btn position-absolute categoryName">نوشیدنی</a>
                            </div>
                            <div className="zoom-in d-block overflow-hidden position-relative">
                                <img src="assets/img/banner/7.jpg" alt="banner-thumb-naile" />
                                <a href="shop.html"
                                    className="text-uppercase btn theme--btn1 btn--lg banner-btn position-absolute categoryName">محصولات
                            لبنی</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryBanner;