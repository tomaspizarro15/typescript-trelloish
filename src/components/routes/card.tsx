import React, { useState } from 'react'

interface CardInterface {
    id : string, 
    label : string, 
    key : string,
    onChange : any,
}

const Card = (props : CardInterface) => {
    return(
        <div draggable="true" key={props.key} id={props.id} className="flex_ccr card">
                <input className="board_label black" value={props.label} onChange={props.onChange}/>
                <button className="card_delete">X</button>
        </div>
    )
}
export default Card; 