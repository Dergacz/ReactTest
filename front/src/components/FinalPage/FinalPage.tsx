import React from "react";
import {NavLink} from "react-router-dom";

export const FinalPage = () => {
    return (
        <NavLink to={"/main"}>
            <button>Назад</button>
        </NavLink>
    )

}