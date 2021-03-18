import React, { useState } from 'react';
import Card from './card';
import './main.css'


const Boards = (props: Object) => {

    interface Event<T> {
        EventTarget: EventTarget & T
    }
    const [boards, setBoards] = useState([{ id: "mamau", key: "0", label: "tu tablero", cards: [{ key: Math.random().toString(), id: Math.random().toString(), label: "tu carta" }], newCard: "" }])
    const [input, setInput] = useState("");
    const [cardLabel, setCardLabel] = useState("nueva carta");


    // Creacion / Modificacion de tablas!

    const changeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }
    const newBoardInput = (e: KeyboardEventInit) => {
        const id: string = Math.random().toString();
        if (e.keyCode === 13) {
            setBoards([...boards, { id: id, key: id, label: input, cards: [], newCard: "" }])
            setInput("")
        }
    }
    const changeInputBoard = (e: React.FormEvent<HTMLInputElement>, index: number) => {
        const newBoards = [...boards];
        newBoards[index].label = e.currentTarget.value;
        setBoards([...newBoards])
    }
    const changeInputCard = (e: React.FormEvent<HTMLInputElement>, index: number) => {
        const newBoards = [...boards];
        newBoards[index].newCard = e.currentTarget.value;
        setBoards([...newBoards])
    }
    const createCard = (e: KeyboardEventInit, i: number) => {
        const newBoards = [...boards];
        if (e.keyCode === 13) {
            newBoards[i].cards.push({ id: Math.random().toString(), key: Math.random.toString(), label: newBoards[i].newCard })
            newBoards[i].newCard = "";
            setBoards([...newBoards])
        }
    }
    const changeCardLabel = (e: React.FormEvent<HTMLInputElement>, boardIndex: number, cardIndex: number) => {
        const newBoards = [...boards];
        newBoards[boardIndex].cards[cardIndex].label = e.currentTarget.value;
        setBoards([...newBoards])
    }

    //Drag and Drop funcionalidad.

    const dragStart = (e: any) => {
        const tg = e.target;
        e.dataTransfer.setData('id', tg.id)
        tg.style.display = "block"
        setTimeout(() => {
            tg.style.display = "none"
        }, 0)
    }
    const dragStop = (e: any) => {
        e.stopPropagation();
    }
    const dragOver = (e: any) => {
        e.preventDefault();
        console.log("Dragging over meee!")
    }
    const dropOn = (e: any) => {
        e.preventDefault();
        const newCardId = e.dataTransfer.getData('id')
        const newCard: any = document.getElementById(newCardId)
        newCard.style.display = 'block';
        e.target.appendChild(document.getElementById(newCardId))
    }


    return (
        <div className="main_container">
            <h1>Welcome to Trillo</h1>
            <input
                value={input}
                onChange={(e) => { changeInputValue(e) }}
                className="new_board__label"
                onKeyUp={(e) => { newBoardInput(e) }}
                placeholder="clear nuevo tablero"
            />
            <div className="flex_ccr board_list">
                {boards.map((el, i) => {
                    return (
                        <li className="flex_ctc board" key={el.key} >
                            <input className="board_label" value={el.label} onChange={(e) => { changeInputBoard(e, i) }}></input>
                            <ul className="card_list" onDrop={(e) => { dropOn(e) }} onDragOver={(e) => { dragOver(e) }}>
                                <div className="flex_ccc card" onDrop={() => { return false }}>
                                    <input
                                        className="board_label_active"
                                        placeholder="nueva tarea..."
                                        onChange={(e) => { changeInputCard(e, i) }}
                                        value={el.newCard}
                                        onKeyUp={(e) => { createCard(e, i) }} />
                                </div>
                                {el.cards.map((card, j) => {
                                    return (
                                        <Card
                                            key={card.key}
                                            id={card.id}
                                            label={card.label}
                                            onChange={(e: any) => { changeCardLabel(e, i, j) }}
                                            dragStart={(e: any) => { dragStart(e) }}
                                            dragStop={(e: any) => { dragStop(e) }}
                                        />
                                    )
                                })}
                            </ul>
                        </li>
                    )
                }, [])}
            </div>
        </div>
    )
}
export default Boards;