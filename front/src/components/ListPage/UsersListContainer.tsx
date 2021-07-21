import React from "react";
import {UsersList} from "./UsersList";
import {UserType} from "../../store/usersReducer";

class UsersListContainer extends React.Component<any, any> {
    render() {
        return (
            <div>

            </div>
        )
    }
}

type MapStateToPropsType = {
    filterUsers: UserType[]
    buttons: number[]
}

