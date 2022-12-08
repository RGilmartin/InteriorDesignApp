/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { CSSProperties, useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import update from "immutability-helper";
import { CirclePicker } from "react-color";
import { useDrop, XYCoord } from "react-dnd";
import { DragItem } from "./components/Board";
import { ItemTypes } from "./constants";
import { Furniture } from "./furniture";
import Sofa from "./components/images/sofa.jpg";
import Chair from "./components/images/chair.jpg";
import BookShelf from "./components/images/bookshelf.jpg";
import Table from "./components/images/table.jpg";
import Island from "./components/images/island.jpg";
import Fridge from "./components/images/fridge.jpg";
import Counter from "./components/images/counter.jpg";
import Cabinet from "./components/images/cabinet.jpg";
import Toilet from "./components/images/toilet.jpg";
import BathSink from "./components/images/bathsink.jpg";
import Shower from "./components/images/shower.jpg";
import Sink from "./components/images/sink.jpg";

function ColorButtons() {
    // const [color, setColor] = useState("#2550a7");
    // const [height, setHeight] = useState("5");
    // const [width, setWidth] = useState("5");

    // const FURNITURE: string[] = ["sofa", "chair", "table", "bookshelf"];
    // const [image, setImage] = useState<string>(FURNITURE[0]);
    // const url = "../images-${image}.jpg";

    // function flipVisibilityKitchen(): void {
    //     setKitchen(!kitchen);
    // }
    // function flipVisibilityFurniture(): void {
    //     setFurniture(!furniture);
    // }
    // function flipVisibilityBath(): void {
    //     setBath(!bath);
    // }
    return (
        <>
            <ItemList></ItemList>
        </>
    );
}

const ItemList: React.FC = () => {
    const [furniture, setFurniture] = useState<{
        [key: string]: {
            top: number;
            left: number;
            image: string;
            isInList: boolean;
            itemName?: string;
        };
    }>({
        0: {
            top: 0,
            left: 0,
            isInList: true,
            itemName: "Living Room",
            image: Sofa
        },
        1: {
            top: 0,
            left: 0,
            isInList: true,
            itemName: "Kitchen",
            image: Fridge
        },
        2: {
            top: 0,
            left: 0,
            isInList: true,
            itemName: "BathRoom",
            image: Toilet
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
            drop(item: DragItem, monitor: any) {
                return undefined;
            }
        }),
        [moveFurniture]
    );

    const setLivingRoom = useCallback(() => {
        setFurniture(
            update(furniture, {
                $set: {
                    0: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Sofa",
                        image: Sofa
                    },
                    1: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Chair",
                        image: Chair
                    },
                    2: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "BookShelf",
                        image: BookShelf
                    },
                    3: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Table",
                        image: Table
                    }
                }
            })
        );
    }, [furniture, setFurniture]);

    const setKitchen = useCallback(() => {
        setFurniture(
            update(furniture, {
                $set: {
                    0: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Island",
                        image: Island
                    },
                    1: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Fridge",
                        image: Fridge
                    },
                    2: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Counter",
                        image: Counter
                    },
                    3: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Sink",
                        image: Sink
                    }
                }
            })
        );
    }, [furniture, setFurniture]);

    const setBath = useCallback(() => {
        setFurniture(
            update(furniture, {
                $set: {
                    0: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Shower",
                        image: Shower
                    },
                    1: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Toilet",
                        image: Toilet
                    },
                    2: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Bath Sink",
                        image: BathSink
                    },
                    3: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Cabinet",
                        image: Cabinet
                    }
                }
            })
        );
    }, [furniture, setFurniture]);

    const styles: CSSProperties = {
        width: "100%",
        height: "100%",
        position: "relative",
        textAlign: "center"
    };
    return (
        <div ref={drop} style={styles}>
            <h4>
                Type:{" "}
                <Button onClick={() => setLivingRoom()}>Living Room</Button>
                <Button onClick={() => setKitchen()}>Kitchen</Button>
                <Button onClick={() => setBath()}>Bathroom</Button>
            </h4>
            {Object.keys(furniture).map((key) => {
                const { left, top, image, itemName, isInList } = furniture[
                    key
                ] as {
                    top: number;
                    left: number;
                    image: string;
                    isInList: boolean;
                    itemName?: string;
                };
                return (
                    <>
                        <Furniture
                            key={key}
                            id={key}
                            left={left}
                            top={top}
                            isInList={isInList}
                            itemName={itemName}
                        >
                            <img src={image} height="50px" />
                        </Furniture>
                    </>
                );
            })}
        </div>
    );
};

export default ColorButtons;
