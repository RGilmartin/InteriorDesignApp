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
import Trashcan from "./components/images/trashcan.jpg";
import NightTable from "./components/images/nightTable.jpg";
import Rug from "./components/images/rug.jpg";
import Microwave from "./components/images/microwave.jpg";
import Lamp from "./components/images/lamp.jpg";
import Desk from "./components/images/desk.jpg";
import Bed from "./components/images/bed.jpg";
import LoveSeat from "./components/images/loveseat.jpg";
import Coffee from "./components/images/coffee-table.jpg";
import Stove from "./components/images/stove.jpg";
import TV from "./components/images/tv.jpg";
import Tub from "./components/images/tub.jpg";
import "./board.css";
import { brotliDecompress } from "zlib";

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
    const [object, setObject] = useState<{
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
            itemName: "Bath Room",
            image: Toilet
        },
        3: {
            top: 0,
            left: 0,
            isInList: true,
            itemName: "Bed Room",
            image: Bed
        }
    });

    const moveFurniture = useCallback(
        (id: number, left: number, top: number) => {
            setObject(
                update(object, {
                    [id]: {
                        $merge: { left, top }
                    }
                })
            );
        },
        [object, setObject]
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

    //Living Room Filter
    const setLivingRoom = useCallback(() => {
        setObject(
            update(object, {
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
                    },
                    4: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Rug",
                        image: Rug
                    },
                    5: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Love Seat",
                        image: LoveSeat
                    },
                    6: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Coffee Table",
                        image: Coffee
                    },
                    7: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "TV",
                        image: TV
                    }
                }
            })
        );
    }, [object, setObject]);

    //Kitchen Filter
    const setKitchen = useCallback(() => {
        setObject(
            update(object, {
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
                    },
                    4: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Trashcan",
                        image: Trashcan
                    },
                    5: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "MicroWave",
                        image: Microwave
                    },
                    6: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Stove",
                        image: Stove
                    }
                }
            })
        );
    }, [object, setObject]);

    //Bath Filter
    const setBath = useCallback(() => {
        setObject(
            update(object, {
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
                    },
                    4: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Bath Can",
                        image: Trashcan
                    },
                    5: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Bath Tub",
                        image: Tub
                    }
                }
            })
        );
    }, [object, setObject]);

    //Bath Filter
    const setBed = useCallback(() => {
        setObject(
            update(object, {
                $set: {
                    0: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Bed",
                        image: Bed
                    },
                    1: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Lamp",
                        image: Lamp
                    },
                    2: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Night Table",
                        image: NightTable
                    },
                    3: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Bedroom Rug",
                        image: Rug
                    },
                    4: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Desk",
                        image: Desk
                    },
                    5: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Bed Can",
                        image: Trashcan
                    },
                    6: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Desk Chair",
                        image: Chair
                    },
                    7: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Futon",
                        image: LoveSeat
                    }
                }
            })
        );
    }, [object, setObject]);

    //Small Filter
    const setSmall = useCallback(() => {
        setObject(
            update(object, {
                $set: {
                    0: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Chair",
                        image: Chair
                    },
                    1: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Sink",
                        image: Sink
                    },
                    2: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Small Can",
                        image: Trashcan
                    },
                    3: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Night Table",
                        image: NightTable
                    },
                    4: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Lamp",
                        image: Lamp
                    },
                    5: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Table",
                        image: Table
                    }
                }
            })
        );
    }, [object, setObject]);

    //Large Filter
    const setLarge = useCallback(() => {
        setObject(
            update(object, {
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
                        itemName: "Sofa",
                        image: Sofa
                    },
                    3: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Book Shelf",
                        image: BookShelf
                    },
                    4: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Counter",
                        image: Counter
                    },
                    5: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Shower",
                        image: Shower
                    },
                    6: {
                        top: 0,
                        left: 0,
                        isInList: true,
                        itemName: "Bed",
                        image: Bed
                    }
                }
            })
        );
    }, [object, setObject]);

    const styles: CSSProperties = {
        width: "100%",
        height: "100%",
        position: "relative",
        textAlign: "center"
    };
    return (
        <div ref={drop} style={styles}>
            <div id="filter-container">
                <h4>
                    Type:{" "}
                    <Button
                        className="space-button"
                        onClick={() => setLivingRoom()}
                    >
                        Living Room
                    </Button>
                    <Button
                        className="space-button"
                        onClick={() => setKitchen()}
                    >
                        Kitchen
                    </Button>
                    <Button className="space-button" onClick={() => setBath()}>
                        Bathroom
                    </Button>
                    <Button className="space-button" onClick={() => setBed()}>
                        Bed Room
                    </Button>
                </h4>
            </div>
            <div id="filter-container">
                <h4>
                    Size:{" "}
                    <Button className="space-button" onClick={() => setSmall()}>
                        Small
                    </Button>
                    <Button className="space-button" onClick={() => setLarge()}>
                        Large
                    </Button>
                </h4>
            </div>
            {Object.keys(object).map((key) => {
                const { left, top, image, itemName, isInList } = object[
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
