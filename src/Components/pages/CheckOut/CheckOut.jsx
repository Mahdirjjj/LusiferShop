import React, { Fragment } from 'react'

const CheckOut = () => {
    return (
        <Fragment>

            <nav class="breadcrumb-section theme1 bg-lighten2 pt-110 pb-50">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title text-center mb-15">
                                <h2 class="title text-dark text-capitalize">پرداخت</h2>
                            </div>
                        </div>
                        <div class="col-12">
                            <ol class="breadcrumb bg-transparent m-0 p-0 align-items-center justify-content-center">
                                <li class="breadcrumb-item"><a href="index.html">خانه</a></li>
                                <li class="breadcrumb-item active" aria-current="page">پرداخت</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </nav>


            <section class="check-out-section pb-50">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mb-30">
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                                1_   اطلاعات شخصی
                                </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                        data-parent="#accordion">
                                        <div class="card-body">
                                            <form action="./assets/php/mail.php" class="personal-information">
                                                <div class="order-asguest mt-2 mb-4">
                                                    <a href="#">به عنوان میهمان سفارش دهید</a> <span class="separator"></span>
                                                    <a class="gray" href="login.html">ورود</a>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-md-3 col-form-label">
                                                        عنوان اجتماعی
                                        </label>
                                                    <div class="col-md-6 ">
                                                        <div class="d-flex flex-wrap">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                                                <label class="form-check-label" for="flexCheckDefault1">
                                                                    مرد
                                                    </label>
                                                            </div>
                                                            <div class="form-check pr-5">
                                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                                                <label class="form-check-label" for="flexCheckDefault2">
                                                                    زن
                                                    </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label for="firstname" class="col-md-3 col-form-label">نام
                                            </label>
                                                    <div class="col-md-6">
                                                        <input type="text" id="firstname" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="lastname" class="col-md-3 col-form-label">نام خانوادگی</label>
                                                    <div class="col-md-6">
                                                        <input type="text" id="lastname" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="email" class="col-md-3 col-form-label">ایمیل</label>
                                                    <div class="col-md-6">
                                                        <input type="email" id="email" class="form-control" />
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label for="Password" class="col-md-3 col-form-label">رمز عبور</label>
                                                    <div class="col-md-6">
                                                        <div class="input-group mb-2 ">
                                                            <input type="password" class="form-control" id="Password" />
                                                            <div class="input-group-prepend">
                                                                <button type="button"
                                                                    class="input-group-text theme-btn--dark1 btn--md show-password">نمایش</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3"><label><span class="optional">
                                                        اختیاری
                                                </span></label></div>
                                                </div>

                                                <div class="form-group row">
                                                    <label for="birthdate" class="col-md-3 col-form-label">تاریخ تولد</label>
                                                    <div class="col-md-6">
                                                        <input type="text" class="form-control" id="birthdate"
                                                            placeholder="روز/ماه/سال" />
                                                    </div>
                                                    <div class="col-md-3"><label><span class="optional">
                                                        اختیاری
                                                </span></label></div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-md-3"></div>
                                                    <div class="col-md-6">
                                                        <div class="check-box-inner pt-0">
                                                            <div class="filter-check-box">
                                                                <input type="checkbox" id="20820" />
                                                                <label for="20820">پیشنهادات خود را از شرکای ما دریافت کنید</label>
                                                            </div>
                                                            <div class="filter-check-box">
                                                                <input type="checkbox" id="20821" />
                                                                <label for="20821">برای دریافت خبرنامه ما ثبت نام کنید</label>
                                                                <p>اولین نفر باشید که آگاه می شوید. ثبت نام برای
                                                                خبرنامه
                                                        امروز !</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="sign-btn text-right">
                                                            <a href="#" class="btn theme-btn--dark1 btn--md">ادامه هید</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                                2_آدرس
                                </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            <div class="checkout-inner border-0">
                                                <div class="checkout-address p-0">
                                                    <p>
                                                        آدرس انتخاب شده هر دو به عنوان آدرس شخصی شما استفاده خواهد شد (برای
                                                        فاکتور) و به عنوان آدرس تحویل شما.
                                        </p>
                                                </div>
                                                <div class="check-out-content">
                                                    <form id="contact-form" class="p-0" action="assets/php/mail.php" method="post">
                                                        <div class="form-group row">
                                                            <label class="col-md-3" for="firstName2">نام </label>
                                                            <div class="col-md-6">
                                                                <input class="form-control" id="firstName2" name="firstname"
                                                                    type="text" required="" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3" for="lastName2">نام خانوادگی</label>
                                                            <div class="col-md-6">
                                                                <input class="form-control" id="lastName2" name="lastname"
                                                                    type="text" required="" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3" for="company">شرکت</label>
                                                            <div class="col-md-6">
                                                                <input class="form-control" id="company" name="company" type="text"
                                                                    required="" />
                                                            </div>
                                                            <div class="col-md-3">
                                                                <span class="optional">
                                                                    اختیاری
                                                    </span>
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3" for="address1">نشانی</label>
                                                            <div class="col-md-6">
                                                                <input class="form-control" id="address1" name="address1"
                                                                    type="text" required="" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3" for="address2">آدرس جایگزین</label>
                                                            <div class="col-md-6">
                                                                <input class="form-control" id="address2" name="address2"
                                                                    type="text" required="" />
                                                            </div>
                                                            <div class="col-md-3"> <span class="optional">
                                                                اختیاری
                                                    </span> </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3" for="city">شهر</label>
                                                            <div class="col-md-6">
                                                                <input class="form-control" id="city" name="city" type="text"
                                                                    required="" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3">دولت</label>
                                                            <div class="col-md-6">
                                                                <select class="form-control">
                                                                    <option> - لطفا انتخاب کنید -</option>
                                                                    <option value="1">AA</option>
                                                                    <option value="2">AE</option>
                                                                    <option value="3">AP</option>
                                                                    <option value="4">Alabama</option>
                                                                    <option value="5">Alaska</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3" for="zip">کد پستی</label>
                                                            <div class="col-md-6">
                                                                <input class="form-control" id="zip" name="postcode" type="text"
                                                                    required="" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3">کشور</label>
                                                            <div class="col-md-6">
                                                                <select class="form-control">
                                                                    <option>-- لطفا انتخاب کنید --</option>
                                                                    <option>ایران</option>
                                                                    <option>کانادا</option>
                                                                    <option>دبی</option>
                                                                    <option>آمریکا</option>
                                                                    <option>انگلیس</option>
                                                                    <option>فرانسه</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3" for="phone">تلفن</label>
                                                            <div class="col-md-6">
                                                                <input class="form-control" id="phone" type="text" required="" />
                                                            </div>
                                                            <div class="col-md-3">
                                                                <span class="optional">
                                                                    اختیاری
                                                    </span>
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <div class="col-md-9 col-md-offset-3">
                                                                <div class="filter-check-box mb-0">
                                                                    <input type="checkbox" id="20824" required="" />
                                                                    <label class="checkout" for="20824">ذخیره اطلاعات</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group row mb-0">
                                                            <div class="col-12 text-right">
                                                                <button type="submit"
                                                                    class="btn theme-btn--dark1 btn--md">ادامه</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse"
                                                data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                3_روش حمل و نقل
                                </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                        data-parent="#accordion">
                                        <div class="card-body">
                                            <div class="delivery-options-list">
                                                <form>
                                                    <div class="delivery-option">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <div class="row align-items-center">
                                                                    <div class="col-sm-1">
                                                                        <div class="custom-radio-modify">
                                                                            <div class="custom-radio">
                                                                                <input type="radio" name="radio-group" />

                                                                                <label id="pull-up" for="test3"> </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-sm-11 delivery-option-2">
                                                                        <div class="row align-items-center">
                                                                            <div class="col-sm-5 col-12">
                                                                                <div class="row align-items-center">
                                                                                    <div class="col-3">
                                                                                        <img src="assets/img/icon/10.jpg"
                                                                                            alt="My carrier" />
                                                                                    </div>
                                                                                    <div class="col-9">
                                                                                        <span class="carrier-name">ارسال با پست پیشتاز</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-sm-4 col-12">
                                                                                <span class="carrier-delay">زمان تحویل 20 تیر 1400</span>
                                                                            </div>
                                                                            <div class="col-sm-3 col-12">
                                                                                <span class="carrier-price">20,000 تومان هزینه ارسال</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="order-options">
                                                        <div id="delivery" class="text-right">
                                                            <label class="text-left d-block">اگر می خواهید در مورد سفارش خود نظر دهید ، لطفا آن را در قسمت زیر بنویسید.</label>
                                                            <textarea class="form-control mt-2 mb-4"></textarea>
                                                            <button type="submit" class="btn theme-btn--dark1 btn--md">
                                                                ادامه
                                                </button>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingFour">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse"
                                                data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <span>4</span> پرداخت
                                </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div class="card-body pt-0">
                                            <div class="custom-radio mb-4">
                                                <input class="form-check-input" type="checkbox" value="" id="" />
                                                <label for="test5">پرداخت با چک</label>
                                            </div>
                                            <div class="custom-radio mb-4">
                                                <input class="form-check-input" type="checkbox" value="" id="" />
                                                <label for="test6">پرداخت از طریق درگاه بانکی</label>
                                            </div>
                                            <div class="custom-radio mb-4">
                                                <input class="form-check-input" type="checkbox" value="" id="" />
                                                <label for="test7">پرداخت نقدی در هنگام تحویل</label>
                                            </div>
                                            <div class="filter-check-box mb-4">
                                                <input type="checkbox" id="20828" required="" />
                                                <label class="checkout" for="20828">شرایط را قبول دارم</label>
                                            </div>

                                            <button class="btn theme-btn--dark1 btn--md text-capitalize">
                                                اکنون سفارش دهید
                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-30">
                            <ul class="list-group cart-summary rounded-0">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <ul class="items">
                                        <li> 1 مورد</li>
                                        <li>هزینه ارسال </li>
                                    </ul>
                                    <ul class="amount">
                                        <li>1,430,000 تومان</li>
                                        <li>12,000 تومان</li>
                                    </ul>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <ul class="items">
                                        <li>جمع کل (بدون مالیات)</li>
                                        <li>مالیات</li>
                                    </ul>
                                    <ul class="amount">
                                        <li>1455,000 تومان</li>
                                        <li> 0 تومان</li>
                                    </ul>
                                </li>
                                <li class="list-group-item text-center">
                                    <button class="btn theme-btn--dark1 btn--md">ادامه برای پرداخت</button>
                                </li>
                            </ul>

                            <div class="delivery-info mt-20">
                                <ul>
                                    <li>
                                        <img src="assets/img/icon/10.png" alt="icon" /> گارنتی اصالت کالا
                        </li>
                                    <li>
                                        <img src="assets/img/icon/11.png" alt="icon" /> ارسال کالا
                        </li>
                                    <li class="mb-0">
                                        <img src="assets/img/icon/12.png" alt="icon" /> قابلیت مرجوعی کالا در صورت عدم رضایت
                        </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
}

export default CheckOut;