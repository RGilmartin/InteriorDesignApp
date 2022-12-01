import React, { CSSProperties } from "react";
import { Item } from "../constants";

type ItemOverViewProps = {
    item: Item;
};

// const styles: CSSProperties = {
//     display: "inline"
// };

const ItemOverView: React.FC<ItemOverViewProps> = (props) => {
    const item = props.item;
    return (
        // <div style={styles}>
        //     <img src={item.image[0]} height="20px" />
        //     <h4>{item.name}</h4>
        // </div>
        <h1></h1>
    );
};

export default ItemOverView;
