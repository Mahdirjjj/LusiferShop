export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case "INITPRODUCTS":
            return [...action.payload ]; //spread Operator
        default:
            return state;
    }
};

