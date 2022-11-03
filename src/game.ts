import { Item } from "./constants";

const items: Item[] = [
    { position: [0, 0], UID: 0, color: "blue", height: 5, width: 1, image: "" },
    { position: [0, 5], UID: 1, color: "blue", height: 5, width: 1, image: "" },
    { position: [12, 0], UID: 2, color: "blue", height: 5, width: 1, image: "" }
];

let observer: ((arg0: Item[]) => void) | null = null;

const emitChange = () => {
    observer && observer(items);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const observe = (o: any) => {
    if (observer) {
        throw new Error("Multiple observers not implemented.");
    }

    observer = o;
    emitChange();
};

export const movePic = (toX: number, toY: number, nItem: Item) => {
    console.log(nItem.UID);
    const ind = items.findIndex((i) => i.UID === nItem.UID);
    if (ind !== -1) {
        const it = items.at(ind) as Item;
        it.position = [toX, toY];
    }
    emitChange();
};

// Checks to make sure that the item is not putting it on itself
export const canMovePic = () => {
    // const [x, y] = picPosition[index];
    // const dx = toX - x;
    // const dy = toY - y;
    // return !(toX === x && toY === y);
    return true;
};
