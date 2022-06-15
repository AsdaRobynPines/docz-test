import React from "react";

interface IProps {
    colour: string,
    text: string,
    onClick: () => void
}

export const Button = ({
    colour,
    text,
    onClick
}: IProps) => {
    return (
        <div>
            <button onClick={() => onClick()} style={{backgroundColor: colour}}>
                {text}
            </button>
        </div>
    )
}