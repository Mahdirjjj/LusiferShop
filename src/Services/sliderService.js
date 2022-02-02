import httpService from "./httpService";
import config from "./config.json";


export const getSliders = () => {
    return httpService.get(`${config.localapi}/slider/getActiveSliders`);
};