import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

// const token = localStorage.getItem("token");

// if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axios.interceptors.response.use(null, (error) => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        console.log(error);
        toast.error("مشکلی از سمت سرور پیش آمده است.", {
            position: "top-right",
            closeOnClick: true,
        });
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
