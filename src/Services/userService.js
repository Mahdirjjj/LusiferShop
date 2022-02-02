import http from "./httpService";

import config from "./config.json";

export const registerUser = user => {
    return http.post(
        `${config.localapi}/account/register`,
        JSON.stringify(user)
    );
};

export const loginUser = user => {
    return http.post(`${config.localapi}/account/login`, JSON.stringify(user));
};


export const ActiveUser = userId => {
    return http.get(`${config.localapi}/account${userId}`);
};