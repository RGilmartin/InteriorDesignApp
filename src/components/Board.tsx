import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import "../board.css";
import { Item } from "../constants";
import ItemComp from "../Item";

// Should eventually pass in the object to render instead of just x and y coordinates
const renderPiece = (x: number, y: number, item: Item | undefined) => {
    if (x === item?.position[0] && y === item?.position[1]) {
        return <ItemComp item={item} />;
    }
};

// Should pass in object to render
const renderSquare = (i: number, j: number, items: Item[]) => {
    const x = i;
    const y = j;

    //find if square should be rendering an item
    const tItem = items.find((i) => i.position[0] === x && i.position[1] === y);

    return (
        <div
            key={i}
            style={{
                width: "50px",
                height: "50px",
                border: "1px solid black"
            }}
        >
            <BoardSquare x={x} y={y} item={tItem as Item}>
                {renderPiece(x, y, tItem)}
            </BoardSquare>
        </div>
    );
};

type BoardProps = {
    items: Item[];
};

const Board: React.FC<BoardProps> = (props) => {
    const { items } = props;
    const squares = [];
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            squares.push(renderSquare(i, j, items));
        }
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                className="board"
                style={{
                    width: "100%",
                    height: "100%"
                }}
            >
                {squares}
            </div>
        </DndProvider>
    );
};

export default Board;
