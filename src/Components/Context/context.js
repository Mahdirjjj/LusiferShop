import { createContext } from "react";

export const context = createContext({
    fullname: "",
    setFullname: () => {},
    email: "",
    setEmail: () => {},
    password: "",
    setPassword: () => {},
    rePassword: "",
    validator: null,
    setrePassword: () => {},
    loginForm: () => {},
    registerForm: () => {}
});
