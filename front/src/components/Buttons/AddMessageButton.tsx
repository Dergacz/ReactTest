import React from "react";
import { NavLink } from "react-router-dom";
import style from "./buttons.module.css"

export const AddMessageButton = () => {
    return (
       <div>
           <NavLink to={"/final"}>
               <button className={style.button}>
                   Отправить сообщение
               </button>
           </NavLink>
       </div>
    )
}