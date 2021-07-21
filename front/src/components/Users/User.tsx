import React from "react";
import {UserType} from "../../store/usersReducer";
import style from "./users.module.css"


type UsersType = {
    user: UserType,
    button: boolean
}

export const User = (props: UsersType) => {
    return (
        <div className={style.userBlock}>
            <img className={style.userImg} alt={"avatar"} src={props.user.avatar}/>
            <div>{props.user.nickname}</div>
            <div>{props.user.country}</div>
            <div>{props.user.age}</div>
            {props.button && <button>Добавить к рассылке</button>}
        </div>
    )
}