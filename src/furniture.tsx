/* eslint-disable react/react-in-jsx-scope */
import type { CSSProperties, FC, ReactNode } from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "./constants";

const style: CSSProperties = {
    position: "absolute",
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    cursor: "move"
};

export interface BoxProps {
    id: unknown;
    left: number;
    top: number;
    children?: ReactNode;
}

export const Furniture: FC<BoxProps> = ({ id, left, top, children }) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.PIC,
            item: { id, left, top },
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        }),
        [id, left, top]
    );

    if (isDragging) {
        return <div ref={drag} />;
    }
    return (
        <div
            className="box"
            ref={drag}
            style={{ ...style, left, top }}
            data-testid="box"
        >
            {children}
        </div>
    );
};
