import { BUY_COFFEE } from "./CoffeeTypes";

const initialState = {
    numOfCoffee : 5
}

const coffeeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_COFFEE:
            return {
                ...state,
                numOfCoffee: state.numOfCoffee - 1
            }
        default:
            return state;
    }
}

export default coffeeReducer;