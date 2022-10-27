import React from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";

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
            style={{ width: "10vh", height: "10vh", border: "1px solid black" }}
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
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            squares.push(renderSquare(i, j, picPosition));
        }
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                {squares}
            </div>
        </DndProvider>
    );
};

export default Board;
