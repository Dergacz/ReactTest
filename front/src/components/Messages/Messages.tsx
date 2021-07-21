import React from "react";
import {Textarea} from "./Textarea";
import {AddMessageButton} from "../Buttons/AddMessageButton";

export const Messages = () => {
    return (
        <div>
            <form>
                <Textarea name={"name"} placeholder={"Name"}/>
                <Textarea name={"email"} placeholder={"Email"}/>
                <Textarea name={"country"} placeholder={"Country"}/>
                <Textarea name={"age"} placeholder={"Age"}/>
                <Textarea name={"country"} placeholder={"Country"}/>
                <AddMessageButton/>
            </form>
        </div>
    )
}