import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { CirclePicker } from "react-color";
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
            <div>
                <br></br>
                <Button onClick={flipVisibilityFurniture} className="button-o">
                    Furniture
                </Button>
                {furniture && (
                    <div>
                        <Button>
                            <img
                                src={require(".//images/sofa.jpg")}
                                alt="Sofa"
                                width="175"
                                height="175"
                            ></img>
                        </Button>
                        <Button>
                            <img
                                src={require(".//images/chair.jpg")}
                                alt="Chair"
                                width="175"
                                height="175"
                            ></img>
                        </Button>
                        <Button>
                            <img
                                src={require(".//images/table.jpg")}
                                alt="Table"
                                width="175"
                                height="175"
                            ></img>
                        </Button>
                        <Button>
                            <img
                                src={require(".//images/bookshelf.jpg")}
                                alt="Book Shelf"
                                width="175"
                                height="175"
                            ></img>
                        </Button>
                    </div>
                )}
            </div>
            <div>
                <Button onClick={flipVisibilityKitchen}>Kitchen</Button>
                {kitchen && (
                    <div>
                        <Button>
                            <img
                                src={require(".//images/counter.jpg")}
                                alt="Counter"
                                width="155"
                                height="155"
                            ></img>
                        </Button>
                        <Button>
                            <img
                                src={require(".//images/island.jpg")}
                                alt="Island"
                                width="175"
                                height="200"
                            ></img>
                        </Button>
                        <Button>
                            <img
                                src={require(".//images/fridge.jpg")}
                                alt="Fridge"
                                width="175"
                                height="165"
                            ></img>
                        </Button>
                        <Button>
                            <img
                                src={require(".//images/sink.jpg")}
                                alt="Sink"
                                width="160"
                                height="160"
                            ></img>
                        </Button>
                    </div>
                )}
            </div>
            <div>
                <Button onClick={flipVisibilityBath}>Bathroom</Button>
                {bath && (
                    <div>
                        <Button>
                            <img
                                src={require(".//images/bathsink.jpg")}
                                alt="Bath Sink"
                                width="175"
                                height="175"
                            ></img>
                        </Button>
                        <Button>
                            <img
                                src={require(".//images/toilet.jpg")}
                                alt="Toilet"
                                width="175"
                                height="150"
                            ></img>
                        </Button>
                        <Button>
                            <img
                                src={require(".//images/shower.jpg")}
                                alt="Shower"
                                width="175"
                                height="175"
                            ></img>
                        </Button>
                        <Button>
                            <img
                                src={require(".//images/cabinet.jpg")}
                                alt="Cabinet"
                                width="175"
                                height="155"
                            ></img>
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
}

export default ColorButtons;
