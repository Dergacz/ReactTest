import React from "react";
import {NextButton} from "../Buttons/NextButton";
import style from "../Users/users.module.css";
import {UserType} from "../../store/usersReducer";

type UsersListPropsType = {
    filterUsers: UserType[]
    buttons: number[]
}

export const UsersList = () => {

    return (
        <div>
            {/*{props.buttons.length !== 0*/}
            {/*&& props.filterUsers.filter(f => {*/}
            {/*    return f.id === props.buttons[f.id]*/}
            {/*    }) ? props.filterUsers.map(m => {*/}
            {/*   return <div key={m.id}>*/}
            {/*       <div>*/}
            {/*           <img className={style.userImg} alt={"avatar"} src={m.avatar}/>*/}
            {/*       </div>*/}
            {/*       <div className={style.nickname}>{m.nickname}</div>*/}
            {/*       <div>{m.country}</div>*/}
            {/*       <div>{m.age}</div>*/}
            {/*    </div>*/}
            {/*})*/}
            {/*    : []*/}
            {/*}*/}
            <NextButton/>
        </div>
    )
}