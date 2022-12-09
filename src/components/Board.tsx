/* eslint-disable @typescript-eslint/no-explicit-any */
import update from "immutability-helper";
import React, { CSSProperties, useCallback, useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { useDrop, XYCoord } from "react-dnd";
import uuid from "react-uuid";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import BoardSquare from "./BoardSquare";
import "../board.css";
import { ItemTypes } from "../constants";
// import ItemComp from "../Item";
import { Furniture } from "../furniture";
import Sofa from "./images/sofa.jpg";
import { SavedRoom } from "./savedroom";

const Board: React.FC = () => {
    const [furniture, setFurniture] = useState<{
        [key: string]: {
            top: number;
            left: number;
            image: string;
            isInList: boolean;
        };
    }>({});

    //Add Furniture
    const AddFurniture = useCallback(
        (item: DragItem) => {
            console.log("hello");
            const newFurnObj = {
                ...furniture,
                [uuid().toString()]: {
                    top: item.top,
                    left: item.left,
                    isInList: false,
                    image: item.image
                }
            };
            setFurniture(update(furniture, { $set: newFurnObj }));
        },
        [furniture, setFurniture]
    );

    /*    const removeFurniture = useCallback(() => {
        const newFurnObj = { furniture };
        console.log(Object.keys(newFurnObj));
    }, [furniture, setFurniture]);
*/
    const removeFurniture = useCallback(() => {
        setFurniture(update(furniture, { $set: {} }));
    }, [furniture, setFurniture]);

    //Saving a Room
    const [savedRooms, setSavedRooms] = useState<SavedRoom[]>([]);
    const createNewRoom = useCallback(() => {
        const newSavedRoom: SavedRoom = {
            id: savedRooms.length + 1,
            furniture: { ...furniture }
        };
        const newSavedRooms = [...savedRooms, newSavedRoom];
        setSavedRooms(newSavedRooms);
        setFurniture(update(furniture, { $set: {} }));
    }, [furniture, setFurniture]);

    const switchRoom = (key: number) => {
        const selected = savedRooms[key - 1];
        setFurniture(selected.furniture);
    };

    //Moving Furniture
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
        border: "1px solid black",
        position: "relative"
    };

    const [width, setWidth] = useState<number>(10);
    const [length, setLength] = useState<number>(10);

    return (
        <div>
            <div style={{ margin: "10px" }}>
                <form>
                    <label>
                        Room Length (ft):
                        <input
                            style={{
                                width: "50px",
                                margin: "0px 20px 0px 5px"
                            }}
                            type="number"
                            value={length}
                            onChange={(e) => setLength(+e.target.value)}
                        ></input>
                        Room Width (ft):
                        <input
                            style={{
                                width: "50px",
                                margin: "0px 20px 0px 5px"
                            }}
                            type="number"
                            value={width}
                            onChange={(e) => setWidth(+e.target.value)}
                        ></input>
                    </label>
                </form>
                <div id="clear-add-room">
                    <Button
                        className="space-button"
                        onClick={() => removeFurniture()}
                    >
                        Clear Room
                    </Button>
                    <Button
                        className="clear-add-button"
                        onClick={() => createNewRoom()}
                    >
                        Add Room
                    </Button>
                </div>
                <Col>
                    <div id="choose-room">
                        {savedRooms.map((currentRoom) => (
                            <Button
                                className="space-button"
                                key={`room${currentRoom.id}`}
                                onClick={() => switchRoom(currentRoom.id)}
                            >
                                Room {currentRoom.id}
                            </Button>
                        ))}
                    </div>
                </Col>
            </div>
            <div
                ref={drop}
                style={{
                    ...styles,
                    width: 5 * width + "vh",
                    height: 5 * length + "vh"
                }}
            >
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
                            image={image}
                        ></Furniture>
                    );
                })}
            </div>
        </div>
    );
};

export interface DragItem {
    type: string;
    id: number;
    top: number;
    left: number;
    isInList: boolean;
    itemName: string;
    image: string;
}

export default Board;
