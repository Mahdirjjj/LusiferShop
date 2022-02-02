import { getProducts } from './../Services/productService';


export const getAllProducts = () => {
    return async (dispatch) => {
        const { data } = await getProducts();
        const { startPage, endPage } = data.data;
        
        console.log(data.data.products);
        await dispatch({ type: "INITPRODUCTS", payload: data.data.products });
        await dispatch({ type: "INITPAGES", payload: { startPage, endPage } });

    };
};
