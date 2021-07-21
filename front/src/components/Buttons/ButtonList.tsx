import React from "react";
import {NavLink} from "react-router-dom";

export const ButtonList = () => {
    return (
        <div>
            <NavLink to={"/listpage"}>
                <button>
                    Список рассылки
                </button>
            </NavLink>
        </div>
    )
}