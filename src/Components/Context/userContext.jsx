import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { context } from "./context";
import { withRouter } from "react-router";
import { loginUser, registerUser } from './../../Services/userService';
import { errorMessage, successMessage, infoMessage } from './../../Utils/Messages';
import { useCookies } from "react-cookie";
import { addUser } from './../../Actions/user';
import { decodeToken } from './../../Utils/Token';


const UserContext = ({ children, history }) => {

    useEffect(() => {
        return () => {
            resetStates();
        }
    }, [])


    const [fullname, setFullname] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const [cookies, setCookie, removeCookie] = useCookies(['myShop-cookie']);

    const [, forceUpdate] = useState();

    const dispatch = useDispatch();

    const resetStates = () => {
        setFullname("");
        setEmail("");
        setPassword("");
        setconfirmPassword("");
    };

    const loginForm = async event => {
        event.preventDefault();
        const user = { email, password };

        try {

            // dispatch(showLoading());
            const { data } = await loginUser(user);
            console.log(data.status);
            if (data.status == "Error") {
                errorMessage(data.data.message);

            }
            if (data.status == "Success") {
                successMessage("ورود با موفقیت انحام شد")
                localStorage.setItem("token", data.data.token);
                // setCookie("myShop-cookie", data.data.token, { expires: data.data.expireTime * 60 });
                dispatch(addUser(data));

                // dispatch(hideLoading());
                history.replace("/");
                // resetStates();
                console.log(data);
            }
        } catch (ex) {
            console.log(ex);
            // dispatch(hideLoading());
            errorMessage("مشکلی از سمت سرور پیش آمده است");
        }
    };

    const registerForm = async event => {
        event.preventDefault();
        const user = {
            fullname,
            email,
            password,
            confirmPassword
        };


        try {
            // dispatch(showLoading());
            const { status } = await registerUser(user);
            if (status == 200) {
                successMessage("ثبت نام انجام شد ایمیل فعالسازی ارسال شد");
                // dispatch(hideLoading());
                history.push("/");
                console.log(user);

            }
        } catch (ex) {
            if (password !== confirmPassword) {
                infoMessage("رمزهای عبور مغایرت دارند")
            }

            else {
                errorMessage("مشکلی در ثبت نام پیش آمده است");
                console.log(ex);
            }
        }
    };

    return (
        <context.Provider
            value={{
                fullname,
                setFullname,
                email,
                setEmail,
                password,
                setPassword,
                confirmPassword,
                setconfirmPassword,
                loginForm,
                registerForm
            }}
        >
            {children}
        </context.Provider>
    );
};

export default withRouter(UserContext);
