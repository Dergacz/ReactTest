import React from "react";
import {Users} from "./Users";
import {
    getUsersThunk,
    setButton,
    setCurrentPage,
    setTotalRecords,
    setUsers,
    UsersInitialStateType,
    UserType
} from "../../store/usersReducer";
import {AppStateType} from "../../store/reduxStore";
import {connect} from "react-redux";
import {compose} from "redux";

class UsersContainer extends React.Component<UsersPropsType, UsersPropsType> {

    render() {
        return (
            <div>
                <Users
                    users={this.props.users}
                    page={this.props.page}
                    records_per_page={this.props.records_per_page}
                    total_records={this.props.total_records}
                    setUsers={this.props.setUsers}
                    getUsers={this.props.getUsers}
                    setPage={this.props.setPage}
                    setTotalRecords={this.props.setTotalRecords}
                    buttons={this.props.buttons}
                    setButton={this.props.setButton}
                />
            </div>
        )
    }
}

type MapStateToPropsType = {
    users: UsersInitialStateType
    buttons: number[]
    page: number
    records_per_page: number
    total_records: number
}

type MapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void
    getUsers: (page: number) => void
    setPage: (page: number) => void
    setTotalRecords: (total_records: number) => void
    setButton: (button: boolean, userId: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.userPage,
        page: state.userPage.page,
        total_records: state.userPage.total_records,
        records_per_page: state.userPage.records_per_page,
        buttons: state.userPage.buttons
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    setUsers,
    setPage: setCurrentPage,
    setTotalRecords,
    getUsers: getUsersThunk,
    setButton
}))
(UsersContainer)