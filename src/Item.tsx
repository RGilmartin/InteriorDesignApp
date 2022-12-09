import React, { Fragment } from "react";
import { Item } from "./constants";

type ItemProps = { item: Item };

const ItemComp: React.FC<ItemProps> = () => {
    // const { item } = props;
    // const [{ isDragging }, drag] = useDrag({
    //     item: { type: ItemTypes.PIC, item: item },
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging
    //     })
    // });

    return (
        <Fragment>
            {/* <div
                ref={drag}
                style={{
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 50,
                    fontWeight: "bold",
                    cursor: "move"
                }}
            >
                <img
                    src={require("./bosun_tally.jpg")}
                    width="50px"
                    height="50px"
                />
            </div> */}
        </Fragment>
    );
};

export default ItemComp;
