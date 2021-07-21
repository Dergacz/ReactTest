import React from "react";
import {ButtonList} from "../Buttons/ButtonList";
import {UsersPropsType} from "./UsersContainer";
import style from "./users.module.css"


export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.total_records / props.records_per_page);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onPageChanged = (pageNumber: number) => {
        props.setPage(pageNumber);
        props.getUsers(pageNumber);
    }

    if (props.users.users.length === 0) {
        props.getUsers(props.page)
    }

    const addUser = (userId: number) => {
        props.setButton(true, userId)
    }
    const deleteUser = (userId: number) => {
        props.setButton(false, userId)
    }

    return (

        <div>
            {props.users.users.map(u => {
                return <div className={style.userBlock} key={u.id}>
                    <div>
                        <img className={style.userImg} alt={"avatar"} src={u.avatar}/>
                    </div>
                    <div className={style.nickname}>{u.nickname}</div>
                    <div>{u.country}</div>
                    <div>{u.age}</div>
                    {
                        !props.buttons.includes(u.id)
                            ? <button onClick={() => addUser(u.id)}>Добавить к рассылке</button>
                            : <button onClick={() => deleteUser(u.id)}>Убрать из рассылки</button>
                    }
                </div>
            })}
            <ButtonList/>
            {pages.map(p => {
                return <button
                    className={style.pages}
                    onClick={() => onPageChanged(p)}>{p}
                </button>
            })}
        </div>
    )
}