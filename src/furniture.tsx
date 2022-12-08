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
}

export const Furniture: FC<BoxProps> = ({
    id,
    left,
    top,
    isInList,
    itemName,
    children
}) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.PIC,
            item: { id, left, top, isInList },
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        }),
        [id, left, top]
    );

    const [rotation, setRotation] = useState<number>(0);
    const [showModal, setShowModal] = useState(false);

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
                <div style={{ width: "30%" }}>{children}</div>
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
                    {children}
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
                                <p>Rotation</p>
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
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
};
