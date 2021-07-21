import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {usersReducer} from "./usersReducer";
import thunkMiddleware from "redux-thunk";

let RootReducers = combineReducers({
    userPage: usersReducer
})

export let store: Store = createStore(RootReducers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof RootReducers>