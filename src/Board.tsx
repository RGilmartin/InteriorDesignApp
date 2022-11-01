import React from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import "../src/board.css";

const renderPiece = (x: number, y: number, [picX, picY]: [number, number]) => {
    if (x === picX && y === picY) {
        return <Pic />;
    }
};

const renderSquare = (i: number, j: number, picPosition: [number, number]) => {
    const x = i;
    const y = j;

    return (
        <div
            key={i}
            style={{
                width: "50px",
                height: "50px",
                border: "1px solid black"
            }}
        >
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, picPosition)}
            </BoardSquare>
        </div>
    );
};

type BoardProps = {
    picPosition: [number, number];
};

const Board: React.FC<BoardProps> = (props) => {
    const { picPosition } = props;
    const squares = [];
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            squares.push(renderSquare(i, j, picPosition));
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
