/* eslint-disable @typescript-eslint/no-explicit-any */
import update from "immutability-helper";
import React, { CSSProperties, useCallback, useState } from "react";
import { useDrop, XYCoord } from "react-dnd";
import uuid from "react-uuid";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import BoardSquare from "./BoardSquare";
import "../board.css";
import { ItemTypes } from "../constants";
// import ItemComp from "../Item";
import { Furniture } from "../furniture";

const Board: React.FC = () => {
    const [id, setId] = useState<number>(5);

    const [furniture, setFurniture] = useState<{
        [key: string]: {
            top: number;
            left: number;
            image: string;
            isInList: boolean;
        };
    }>({
        "0": {
            top: 20,
            left: 100,
            isInList: false,
            image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fc%2FR%2Ff%2FK%2Fh%2Fr%2Fcinema-chair-top-view-hi.png&f=1&nofb=1&ipt=9afd6ea0c875c63ed38f07c08fd14264ce7eb2cefcb36b7d0684f1b2102c9545&ipo=images"
        },
        "1": {
            top: 180,
            left: 20,
            isInList: false,
            image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fc%2FR%2Ff%2FK%2Fh%2Fr%2Fcinema-chair-top-view-hi.png&f=1&nofb=1&ipt=9afd6ea0c875c63ed38f07c08fd14264ce7eb2cefcb36b7d0684f1b2102c9545&ipo=images"
        }
    });

    const AddFurniture = useCallback(
        (item: DragItem) => {
            const newFurnObj = {
                ...furniture,
                [uuid().toString()]: {
                    top: item.top,
                    left: item.left,
                    isInList: false,
                    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fc%2FR%2Ff%2FK%2Fh%2Fr%2Fcinema-chair-top-view-hi.png&f=1&nofb=1&ipt=9afd6ea0c875c63ed38f07c08fd14264ce7eb2cefcb36b7d0684f1b2102c9545&ipo=images"
                }
            };
            setFurniture(update(furniture, { $set: newFurnObj }));
        },
        [furniture, setFurniture]
    );

    const removeFurniture = useCallback(() => {
        const newFurnObj = furniture;
        console.log(Object.keys(newFurnObj));
    }, [furniture, setFurniture]);

    const moveFurniture = useCallback(
        (id: number, left: number, top: number) => {
            setFurniture(
                update(furniture as any, {
                    [id]: {
                        $merge: { id, left, top }
                    }
                })
            );
        },
        [furniture, setFurniture]
    );

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.PIC,
            drop(item: DragItem, monitor: any) {
                const isInList = item.isInList;
                console.log(item);
                if (isInList) {
                    // adds furniture;
                    AddFurniture(item);
                } else {
                    const delta =
                        monitor.getDifferenceFromInitialOffset() as XYCoord;
                    const left = Math.round(item.left + delta.x);
                    const top = Math.round(item.top + delta.y);
                    moveFurniture(item.id, left, top);
                }
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
                const { left, top, image, isInList } = furniture[key] as {
                    top: number;
                    left: number;
                    image: string;
                    isInList: boolean;
                };
                return (
                    <Furniture
                        key={key}
                        id={key}
                        left={left}
                        top={top}
                        isInList={isInList}
                    >
                        <div onDoubleClick={removeFurniture}>
                            <img src={image} height="50px" />
                        </div>
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
    isInList: boolean;
}

export default Board;
