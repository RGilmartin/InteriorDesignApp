import React, { CSSProperties } from "react";
import { Item } from "../constants";

type ItemOverViewProps = {
    item: Item;
};

const styles: CSSProperties = {
    display: "inline-block",
    margin: "5px",
    background: "#efefef",
    color: "black",
    width: "250px",
    height: "100px"
};

const ItemOverView: React.FC<ItemOverViewProps> = (props) => {
    const item = props.item;
    return (
        <div style={styles}>
            <img
                style={{ display: "inline-block", margin: "5px" }}
                src={item.image[0]}
                height="60px"
            />
            <h5 style={{ display: "inline-block", margin: "5px" }}>
                {item.name}
            </h5>
        </div>
    );
};

export default ItemOverView;
