import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './../../../Actions/products';

const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
        require("../../../Scripts/Range");

    }, [])

    const allproducts = useSelector(state => state.products)
    const paginatoion = useSelector(state => state.pages)
    console.log(paginatoion.startPage);

    
       
}

return (
    <div className="product-tab bg-white pt-40 pb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 mb-30 box-Filter">
                    <aside className="left-sidebar theme1">


                        <div className="search-filter">

                            <div className="check-box-inner mt-10">
                                <h4 className="title">فیلتر با</h4>
                                <h4 className="sub-title pt-10">دسته بندی ها</h4>
                                <div className="filter-check-box">
                                    <input type="checkbox" id="20820" />
                                    <label htmlFor="20820">کالای دیجیتال <span>(19)</span></label>
                                </div>
                                <div className="filter-check-box">
                                    <input type="checkbox" id="20821" />
                                    <label htmlFor="20821">مد و پوشاک <span>(32)</span></label>
                                </div>
                                <div className="filter-check-box">
                                    <input type="checkbox" id="20822" />
                                    <label htmlFor="20822">زیبایی و سلامت<span>(4)</span></label>
                                </div>
                            </div>

                            <div className="check-box-inner mt-10">
                                <h4 className="sub-title">بازده قیمت    </h4>
                                <div className="price-filter mt-10">
                                    <div className="price-slider-amount">
                                        <input type="text" id="amount" name="price" readOnly="" placeholder="Add Your Price" />
                                    </div>
                                    <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: "0%", width: "100%" }}></div><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "0%" }}></span><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "100%" }}></span></div>
                                </div>
                            </div>

                        </div>

                        <div className="product-widget mb-60 mt-30">
                            <h3 className="title">برچسب های محصول</h3>
                            <ul className="product-tag d-flex flex-wrap">
                                <li><a href="#">خريد كردن</a></li>
                                <li><a href="#">محصولات جدید</a></li>
                                <li><a href="#">تجهیزات جانبی</a></li>
                                <li><a href="#">فروش</a></li>
                            </ul>
                        </div>

                    </aside>
                </div>
                <div className="col-lg-9 mb-30">
                    <div className="grid-nav-wraper bg-lighten2 mb-30">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 mb-3 mb-md-0">
                                <nav className="shop-grid-nav">
                                    <ul className="nav nav-pills align-items-center" id="pills-tab" role="tablist">

                                        <li> <span className="total-products text-capitalize pr-4">محصولات</span></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-12 col-md-6 position-relative">
                                <div className="shop-grid-button d-flex align-items-center">
                                    <span className="sort-by">مرتب سازی براساس:</span>
                                    <button className="btn-dropdown rounded d-flex justify-content-between" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        فیلتر <span className="ion-android-arrow-dropdown"></span>
                                    </button>
                                    <div className="dropdown-menu shop-grid-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">جدید ‌ترین</a>
                                        <a className="dropdown-item" href="#"> ارزان ترین</a>
                                        <a className="dropdown-item" href="#"> گران ترین</a>
                                        <a className="dropdown-item" href="#"> پرفروش ترین</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content" id="pills-tabContent">

                        <div className="tab-pane show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row grid-view theme1">
                                {allproducts.map(p => {
                                    return (<div className="col-sm-6 col-lg-4 col-xl-3 mb-30" key={p.id}>
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
                                                                    <h3 className="title"><a href="shop.html">{p.productName}</a></h3>
                                                                    <div className="star-rating">
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star"></span>
                                                                        <span className="ion-ios-star de-selected"></span>
                                                                    </div>
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="product-price">
                                                                            <span className="onsale">{p.price} تومان</span>
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
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <nav className="pagination-section mt-30">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <a className="page-link" href="#"><i className="ion-chevron-right"></i></a>
                                    </li>
                                    
                                    <li className="page-item">
                                        <a className="page-link" href="#"><i className="ion-chevron-left"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
);


export default Products;