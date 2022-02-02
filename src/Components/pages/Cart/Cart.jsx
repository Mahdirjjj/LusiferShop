import React, { Fragment } from 'react'

const Cart = () => {
    return (
        <Fragment>
            <nav class="breadcrumb-section theme1 bg-lighten2 pt-110 pb-50">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title text-center mb-15">
                                <h2 class="title text-dark text-capitalize">سبد‌خرید</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>


            <section class="whish-list-section theme1 pb-80">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h3 class="title mb-30 pb-25 text-capitalize">کالای افزوده شده به سبد خرید</h3>
                            <div class="table-responsive table-Cart">
                                <table class="table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th class="text-center" scope="col">تصویر محصول</th>
                                            <th class="text-center" scope="col">نام محصول</th>

                                            <th class="text-center" scope="col">تعداد</th>
                                            <th class="text-center" scope="col">قیمت</th>
                                            <th class="text-center" scope="col">حذف</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="text-center" scope="row">
                                                <img src="assets/img/product/2.jpg" alt="img" />
                                            </th>
                                            <td class="text-center">
                                                <span class="whish-title">گوشی موبایل سامسونگ A50 128G</span>
                                            </td>

                                            <td class="text-center">
                                                <div class="product-count style">
                                                    <div class="count d-flex justify-content-center">
                                                        <input type="number" min="1" max="10" step="1" value="1" />
                                                        <div class="button-group">
                                                            <button class="count-btn increment"><i
                                                                class="fas fa-chevron-up"></i></button>
                                                            <button class="count-btn decrement"><i
                                                                class="fas fa-chevron-down"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">
                                                <span class="whish-list-price">
                                                    4.300.000 تومان
                                    </span></td>

                                            <td class="text-center">
                                                <a href="#"> <span class="trash"><i class="fas fa-trash-alt"></i> </span></a>
                                            </td>

                                        </tr>
                                        <tr>
                                            <th class="text-center" scope="row">
                                                <img src="assets/img/product/4.jpg" alt="img" />
                                            </th>
                                            <td class="text-center">
                                                <span class="whish-title">اپل واچ 2016 Pro</span>
                                            </td>

                                            <td class="text-center">
                                                <div class="product-count style">
                                                    <div class="count d-flex justify-content-center">
                                                        <input type="number" min="1" max="10" step="1" value="1" />
                                                        <div class="button-group">
                                                            <button class="count-btn increment"><i
                                                                class="fas fa-chevron-up"></i></button>
                                                            <button class="count-btn decrement"><i
                                                                class="fas fa-chevron-down"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">
                                                <span class="whish-list-price">
                                                    13.100.000 تومان
                                    </span>
                                            </td>

                                            <td class="text-center">
                                                <a href="#"> <span class="trash"><i class="fas fa-trash-alt"></i> </span></a>
                                            </td>

                                        </tr>
                                        <tr>
                                            <th class="text-center" scope="row">
                                                <img src="assets/img/product/6.jpg" alt="img" />

                                            </th>
                                            <td class="text-center">
                                                <span class="whish-title">لپ تاپ hp 2017 core i7    </span>
                                            </td>

                                            <td class="text-center">
                                                <div class="product-count style">
                                                    <div class="count d-flex justify-content-center">
                                                        <input type="number" min="1" max="10" step="1" value="1" />
                                                        <div class="button-group">
                                                            <button class="count-btn increment"><i
                                                                class="fas fa-chevron-up"></i></button>
                                                            <button class="count-btn decrement"><i
                                                                class="fas fa-chevron-down"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">
                                                <span class="whish-list-price">
                                                    24.900.000 تومان
                                    </span></td>

                                            <td class="text-center">
                                                <a href="#"> <span class="trash"><i class="fas fa-trash-alt"></i> </span></a>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>

                                <div class="col-12 col-md-6 col-lg-4 my-4 mx-auto text-center">
                                    <button type="button" class="btn btn-success continuePay w-100 py-3"> ادامه مراحل پرداخت</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
}

export default Cart;