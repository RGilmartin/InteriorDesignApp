/* eslint-disable react/react-in-jsx-scope */
import type { CSSProperties, FC, ReactNode } from "react";
import { useDrag } from "react-dnd";

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
                style={{ ...roomStyle, left, top }}
                data-testid="box"
            >
                {children}
            </div>
        );
    }
};
