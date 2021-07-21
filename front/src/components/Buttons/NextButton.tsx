import React from "react";
import {NavLink} from "react-router-dom";
import style from "./buttons.module.css"
export const NextButton = () => {
    return (
        <div>
            <NavLink to={"/message"}>
                <button className={style.button}>
                    Далее
                </button>
            </NavLink>
        </div>
    )
}