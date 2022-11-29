import update from "immutability-helper";
import React, { CSSProperties, useCallback, useState } from "react";
import { useDrop, XYCoord } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import BoardSquare from "./BoardSquare";
import "../board.css";
import { ItemTypes } from "../constants";
// import ItemComp from "../Item";
import { Furniture } from "../furniture";

// // Should eventually pass in the object to render instead of just x and y coordinates
// const renderPiece = (x: number, y: number, item: Item | undefined) => {
//     if (x === item?.position[0] && y === item?.position[1]) {
//         return <ItemComp item={item} />;
//     }
// };

// // Should pass in object to render
// const renderSquare = (i: number, j: number, items: Item[]) => {
//     const x = i;
//     const y = j;

//     //find if square should be rendering an item
//     const tItem = items.find((i) => i.position[0] === x && i.position[1] === y);

//     return (
//         <div
//             key={i}
//             style={{
//                 width: "50px",
//                 height: "50px",
//                 border: "1px solid black"
//             }}
//         >
//             <BoardSquare x={x} y={y} item={tItem as Item}>
//                 {renderPiece(x, y, tItem)}
//             </BoardSquare>
//         </div>
//     );
// };

const Board: React.FC = () => {
    const [furniture, setFurniture] = useState<{
        [key: string]: {
            top: number;
            left: number;
            image: string;
        };
    }>({
        0: {
            top: 20,
            left: 100,
            image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fc%2FR%2Ff%2FK%2Fh%2Fr%2Fcinema-chair-top-view-hi.png&f=1&nofb=1&ipt=9afd6ea0c875c63ed38f07c08fd14264ce7eb2cefcb36b7d0684f1b2102c9545&ipo=images"
        },
        1: {
            top: 180,
            left: 20,
            image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fc%2FR%2Ff%2FK%2Fh%2Fr%2Fcinema-chair-top-view-hi.png&f=1&nofb=1&ipt=9afd6ea0c875c63ed38f07c08fd14264ce7eb2cefcb36b7d0684f1b2102c9545&ipo=images"
        }
    });

    const moveFurniture = useCallback(
        (id: number, left: number, top: number) => {
            setFurniture(
                update(furniture, {
                    [id]: {
                        $merge: { left, top }
                    }
                })
            );
        },
        [furniture, setFurniture]
    );

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.PIC,
            drop(item: DragItem, monitor) {
                const delta =
                    monitor.getDifferenceFromInitialOffset() as XYCoord;
                const left = Math.round(item.left + delta.x);
                const top = Math.round(item.top + delta.y);
                moveFurniture(item.id, left, top);
                return undefined;
            }
        }),
        [moveFurniture]
    );

    const styles: CSSProperties = {
        width: "70vh",
        height: "70vh",
        border: "1px solid black",
        position: "relative"
    };

    return (
        <div ref={drop} style={styles}>
            {Object.keys(furniture).map((key) => {
                const { left, top, image } = furniture[key] as {
                    top: number;
                    left: number;
                    image: string;
                };
                return (
                    <Furniture key={key} id={key} left={left} top={top}>
                        <img src={image} height="50px" />
                    </Furniture>
                );
            })}
        </div>
    );
};

export interface DragItem {
    type: string;
    id: number;
    top: number;
    left: number;
}

export default Board;
