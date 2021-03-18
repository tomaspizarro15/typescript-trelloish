import React, { useState } from 'react'

interface CardInterface {
    id: string,
    label: string,
    key: string,
    onChange: any,
    dragStart: any,
    dragStop: any,
}

const Card = (props: CardInterface) => {
    return (
        <div
            draggable="true"
            key={props.key}
            id={props.id}
            className="flex_ccr card"
            onDragStart={props.dragStart}
            onDragEnd={props.dragStop}
            >
            <input
                className="board_label black"
                value={props.label}
                onChange={props.onChange}
                placeholder="dale bro ponele un nombre a la tarea..." />
            {/* <button className="card_delete">X</button> */}
        </div>
    )
}
export default Card;