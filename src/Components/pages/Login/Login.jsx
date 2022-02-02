import React, { useContext, useRef } from 'react'
import { jquery } from 'jquery'
import { context } from './../../Context/context';


const Login = () => {

    const toggleForm = (e) => {
        const container = document.querySelector('.LoginRegister');
        container.classList.toggle('active');
    };


    const registerContext = useContext(context);

    const {
        fullname,
        setFullname,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setconfirmPassword,
        registerForm,
        loginForm

    } = registerContext;



    return (

        <section className="Login">
            <div className="container LoginRegister">
                <div className="user signinBx">
                    <div className="imgBx"><img src="/assets/img/login/graphic2.svg" alt="" /></div>
                    <div className="formBx">
                        <form className="form-inline" onSubmit={(e) => loginForm(e)}>
                            <h2>ورود</h2>
                            <div>
                                <input type="email" name="email" placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" name="password" placeholder="کلمه عبور" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <input className="submit" type="submit" name="loginSubmit" value="وارد شدن" />
                            </div>
                            <div>
                                <p className="signup">آیا حساب کاربری ندارید؟ </p>
                                <p className="sign-in text-center" onClick={toggleForm}>ثبت نام</p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="user signupBx">
                    <div className="formBx">
                        <form className="form-inline" onSubmit={(e) => registerForm(e)}>
                            <h2>حساب ایجاد کنید</h2>
                            <input type="text" name="fullname" placeholder="نام کاربری" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                            <input type="email" name="email" placeholder="آدرس ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" name="password" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="password" name="confirmpassword" placeholder="تأیید رمز عبور" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
                            <input className="submit" type="submit" name="registerSubmit" value="ثبت نام" />
                            <div>
                                <p className="signup"> قبلاً حساب دارید؟  </p>
                                <p className="sign-in text-center" onClick={toggleForm}>ورود</p>
                            </div>
                        </form>
                    </div>
                    <div className="imgBx"><img src="/assets/img/login/graphic3.svg" alt="" /></div>
                </div>
            </div>
        </section>
    );
}

export default Login;