import React from "react";
import { Item } from "../constants";

type BoardSquareProps = {
    x: number;
    y: number;
    item: Item;
};

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    // const { x, y, children } = props;
    // const [enabled, setEnabled] = useState(true);
    // const [{ isOver, canDrop }, drop] = useDrop({
    //     accept: ItemTypes.PIC,
    //     canDrop: () => {
    //         return canMovePic(enabled);
    //     },
    //     drop: (it: DragObjectWithType) => movePic(x, y, it),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //         canDrop: !!monitor.canDrop()
    //     })
    // });

    return (
        <div>
            {/* <Square black={!enabled}>{children}</Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />} */}
        </div>
    );
};

export default BoardSquare;
