import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import coffeeReducer from "./coffee/CoffeeReducer";
import userReducer from "./user/UserReducer";

export const rootReducer = combineReducers({
    cake: cakeReducer,
    coffee: coffeeReducer,
    user: userReducer
});