/* eslint-disable react/react-in-jsx-scope */
import { CSSProperties, FC, ReactNode, useState } from "react";
import { useDrag } from "react-dnd";
import Modal from "react-bootstrap/Modal";

import { ItemTypes } from "./constants";

const roomStyle: CSSProperties = {
    position: "absolute",
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    cursor: "move"
};

const listStyle: CSSProperties = {
    position: "relative",
    height: "100px",
    width: "300px",
    backgroundColor: "#fdfdfd",
    color: "black",
    borderRadius: "5px",
    margin: "10px",
    display: "inline-block",
    textAlign: "center"
};

export interface BoxProps {
    id: unknown;
    left: number;
    top: number;
    isInList: boolean;
    itemName?: string;
    children?: ReactNode;
    image: string;
}

export const Furniture: FC<BoxProps> = ({
    id,
    left,
    top,
    isInList,
    itemName,
    children,
    image
}) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.PIC,
            item: { id, left, top, isInList, image },
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        }),
        [id, left, top]
    );

    const [rotation, setRotation] = useState<number>(0);
    const [showModal, setShowModal] = useState(false);

    const [width, setWidth] = useState<number>(6);
    const [length, setLength] = useState<number>(5);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    if (isDragging) {
        return <div ref={drag} />;
    }

    if (isInList) {
        return (
            <div
                className="box"
                ref={drag}
                style={{ ...listStyle }}
                data-testid="box"
            >
                <div style={{ width: "30%" }}>
                    <img src={image} height="50vh" />
                </div>
                <div style={{ width: "70%" }}>
                    <h3>{itemName}</h3>
                </div>
            </div>
        );
    } else {
        return (
            <div
                className="box"
                ref={drag}
                style={{
                    ...roomStyle,
                    left,
                    top,
                    rotate: rotation.toString() + "deg"
                }}
                data-testid="box"
            >
                <div onClick={handleShow}>
                    <img
                        src={image}
                        height={length * 14 + "px"}
                        width={width * 14 + "px"}
                    />
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                        }}
                    >
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Furniture Settings</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <label>
                                        Rotation:
                                        <input
                                            type="number"
                                            value={rotation}
                                            onChange={(n) => {
                                                setRotation(+n.target.value);
                                            }}
                                        ></input>
                                    </label>
                                    <label>
                                        Item Length (ft):
                                        <input
                                            style={{
                                                width: "50px",
                                                margin: "0px 20px 0px 5px"
                                            }}
                                            type="number"
                                            value={length}
                                            onChange={(e) =>
                                                setLength(+e.target.value)
                                            }
                                        ></input>
                                        Item Width (ft):
                                        <input
                                            style={{
                                                width: "50px",
                                                margin: "0px 20px 0px 5px"
                                            }}
                                            type="number"
                                            value={width}
                                            onChange={(e) =>
                                                setWidth(+e.target.value)
                                            }
                                        ></input>
                                    </label>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
};
