/* eslint-disable no-extra-parens */
import React from "react";

import Furniture from "./Item";

import type { Pieces } from "./PiecesInterface";

import { pieces } from "./Pieces";

const FurnitureList = () => {
    return (
        <div id="furniture-list">
            {pieces.map((f: Pieces) => (
                <div key={f.itemName}>
                    <p className="furniture-label">{f.itemName}</p>
                    <Furniture item={f} />
                </div>
            ))}
        </div>
    );
};

export default FurnitureList;
