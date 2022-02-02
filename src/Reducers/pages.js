export const PagesReducer = (state = {}, action) => {
    switch (action.type) {
        case "INITPAGES":
            return {...action.payload }; //spread Operator
        default:
            return state;
    }
}