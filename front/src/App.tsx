import React from "react";
import style from "./app.module.css"
import buttonStyle from "./components/Buttons/buttons.module.css"
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {UsersList} from "./components/ListPage/UsersList";
import {Messages} from "./components/Messages/Messages";
import UsersContainer from "./components/Users/UsersContainer";
import {FinalPage} from "./components/FinalPage/FinalPage";

function App() {
    return (
        <BrowserRouter>

                <div className={style.app}>
                    <NavLink to={"/main"}>
                        <button className={buttonStyle.button}>На главную</button>
                    </NavLink>
                    <Route path={"/main"} render={() => <UsersContainer/>}/>
                    <Route path={"/listpage"} render={() => <UsersList/>}/>
                    <Route path={"/message"} render={() => <Messages/>}/>
                    <Route path={"/final"} render={() => <FinalPage/>}/>

            </div>
        </BrowserRouter>

    );
}

export default App;
