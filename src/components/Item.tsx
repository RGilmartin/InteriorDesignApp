/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, ReactDOM } from "react";
import { useDrag } from "react-dnd";

import type { Pieces } from "./PiecesInterface";

interface FurnitureItemProps {
    item: Pieces;
    removeFromRoomBoard?: (id: string) => void;
}

const Item = ({ item, removeFromRoomBoard }: FurnitureItemProps) => {
    const { id, itemName, left, top } = item;
    const [position, setPosition] = useState({ top: top, left: left });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const elem = document.getElementById(item.id)?.getBoundingClientRect();
        const t = elem ? elem.y : 0;
        const l = elem ? elem.x : 0;
        setPosition({ top: t, left: l });
    }, []);
    const styles: Record<string, unknown> = {
        position: id.includes("drag") ? "static" : "absolute",
        left,
        top,
        height: id.includes("drag") ? item.height / 2 : item.height,
        width: id.includes("drag") ? item.width / 2 : item.width,
        backgroundColor: "black",
        margin: 0
    };

    const showDimensionsAndIcon = isHovered && !id.includes("drag");

    return (
        <div
            id={item.id}
            style={styles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ width: "100%", height: "100%" }}>
                {showDimensionsAndIcon && (
                    <>
                        <p className="dimensions-label">
                            H: {item.height / 2} inches
                        </p>
                        <p className="dimensions-label">
                            W: {item.width / 2} inches
                        </p>
                    </>
                )}
                {showDimensionsAndIcon && (
                    <p
                        id="remove-button"
                        onClick={() =>
                            removeFromRoomBoard && removeFromRoomBoard(id)
                        }
                    >
                        Remove
                    </p>
                )}
            </div>
        </div>
    );
};

export default Item;
