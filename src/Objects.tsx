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
const Objects = [
    {
        object: "Sofa",
        id: 1,
        height: 5,
        width: 10,
        color: "black",
        type: "chair",
        image: "images/sofa.jpg"
    },
    {
        object: "Chair",
        id: 2,
        height: 5,
        width: 5,
        color: "blue",
        type: "chair",
        image: "images/chair.jpg"
    }
];
function ColorButtons() {
    // const [color, setColor] = useState("#2550a7");
    const [kitchen, setKitchen] = useState<boolean>(false);
    const [furniture, setFurniture] = useState<boolean>(false);
    const [bath, setBath] = useState<boolean>(false);
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
            itemName: "chair 1",
            image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fc%2FR%2Ff%2FK%2Fh%2Fr%2Fcinema-chair-top-view-hi.png&f=1&nofb=1&ipt=9afd6ea0c875c63ed38f07c08fd14264ce7eb2cefcb36b7d0684f1b2102c9545&ipo=images"
        },
        1: {
            top: 0,
            left: 0,
            isInList: true,
            itemName: "chair 2",
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
            drop(item: DragItem, monitor: any) {
                return undefined;
            }
        }),
        [moveFurniture]
    );

    const styles: CSSProperties = {
        width: "100%",
        height: "100%",
        position: "relative",
        textAlign: "center"
    };
    return (
        <div ref={drop} style={styles}>
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
                );
            })}
        </div>
    );
};

export default ColorButtons;
