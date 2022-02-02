import {getSliders} from "../Services/sliderService"

export const getAllSliders = () => {
    return async (dispatch) => {
        const { data } = await getSliders();
        // console.log(data.data);
        await dispatch({ type: "INIT", payload: data.data });
    };
};