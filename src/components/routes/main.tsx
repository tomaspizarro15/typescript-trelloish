import React, { useState } from 'react';
import Card from './card';
import './main.css'


const Boards = (props: Object) => {

    interface Event<T> {
        EventTarget: EventTarget & T
    }
    const [boards, setBoards] = useState([{ id: "mamau", key: "0", label: "tu tablero", cards: [{ key: "0", id: "0", label: "tu carta" }], newCard: "" }])
    const [input, setInput] = useState("");
    const [cardLabel, setCardLabel] = useState("nueva carta");
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

    const changeInputCard = (e: React.FormEvent<HTMLInputElement>, index: number) => {
        const newBoards = [...boards];
        newBoards[index].newCard = e.currentTarget.value;
        setBoards([...newBoards])
    }
    const createCard = (e: KeyboardEventInit, i: number) => {
        const newBoards = [...boards];
        if (e.keyCode === 13) {
            newBoards[i].cards.push({ id: i.toString(), key: i.toString(), label: newBoards[i].newCard })
            newBoards[i].newCard = "";
            setBoards([...newBoards])
        }
    }

    return (
        <div className="main_container">
            <h1>Welcome to Trillo</h1>
            <input
                value={input}
                onChange={(e) => { changeInputValue(e) }}
                className="board_label short black"
                onKeyUp={(e) => { newBoardInput(e) }}
                placeholder="clear nuevo tablero"
            />
            <div className="flex_ccr board_list">
                {boards.map((el, i) => {
                    return (
                        <li className="flex_ctc board" key={el.key} >
                            <input className="board_label" value={el.label}></input>
                            <ul className="card_list">
                                <div className="flex_ccc card">
                                    <input
                                        className="board_label_active"
                                        placeholder="create card"
                                        onChange={(e) => { changeInputCard(e, i) }}
                                        value={el.newCard}
                                        onKeyUp={(e) => { createCard(e, i) }} />
                                </div>
                                {el.cards.map((card, i) => {
                                    return (
                                        <Card
                                            key={card.key}
                                            id={card.id}
                                            label={card.label}
                                            onChange={(e: any) => changeInputCard(e, i)}
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