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
    const [color, setColor] = useState("#2550a7");
    const [kitchen, setKitchen] = useState<boolean>(false);
    const [furniture, setFurniture] = useState<boolean>(false);
    const [bath, setBath] = useState<boolean>(false);
    const [height, setHeight] = useState("5");
    const [width, setWidth] = useState("5");

    const FURNITURE: string[] = ["sofa", "chair", "table", "bookshelf"];
    const [image, setImage] = useState<string>(FURNITURE[0]);
    const url = "../images-${image}.jpg";

    function flipVisibilityKitchen(): void {
        setKitchen(!kitchen);
    }
    function flipVisibilityFurniture(): void {
        setFurniture(!furniture);
    }
    function flipVisibilityBath(): void {
        setBath(!bath);
    }
    return (
        <>
            <div
                style={{
                    backgroundColor: color,
                    height: "300px",
                    width: "415px",
                    float: "right",
                    transition: "ease all 500ms"
                }}
            >
                <select
                    value={width}
                    onChange={(e) => {
                        setWidth(e.target.value);
                    }}
                >
                    <option value="5">Width: 5</option>
                    <option value="10">Width: 10</option>
                    <option value="15">Width: 15</option>
                </select>
                <select
                    value={height}
                    onChange={(e) => {
                        setHeight(e.target.value);
                    }}
                >
                    <option value="5">Height: 5</option>
                    <option value="10">Height: 10</option>
                    <option value="15">Height: 15</option>
                </select>
                <p>
                    Dimensions: {width} x {height}
                </p>
                <div
                    style={{
                        display: "center",
                        transition: "ease all 500ms"
                    }}
                >
                    <img
                        src={require(".//images/sofa.jpg")}
                        alt="Sofa"
                        width="175"
                        height="175"
                    ></img>
                </div>
            </div>
            <CirclePicker
                color={color}
                onChangeComplete={(color) => {
                    setColor(color.hex);
                }}
                className="center"
            />
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
        };
    }>({
        0: {
            top: 20,
            left: 100,
            isInList: true,
            image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fc%2FR%2Ff%2FK%2Fh%2Fr%2Fcinema-chair-top-view-hi.png&f=1&nofb=1&ipt=9afd6ea0c875c63ed38f07c08fd14264ce7eb2cefcb36b7d0684f1b2102c9545&ipo=images"
        },
        1: {
            top: 180,
            left: 20,
            isInList: true,
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
            drop(item: DragItem, monitor: any) {
                return undefined;
            }
        }),
        [moveFurniture]
    );

    const styles: CSSProperties = {
        width: "30vh",
        height: "50vh",
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
                        <img src={image} height="50px" />
                    </Furniture>
                );
            })}
        </div>
    );
};

export default ColorButtons;
