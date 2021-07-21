import React from "react";

type TextareaPropsType = {
    name: string
    placeholder: string
}

export const Textarea = (props: TextareaPropsType) => {
    return (
        <div>
            <textarea
                name={props.name}
                placeholder={props.placeholder}
                />
        </div>
    )
}