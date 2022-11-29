import { Item } from "./constants";

// List of items
const items: Item[] = [
    {
        position: [0, 0],
        height: 5,
        width: 1,
        image: [""]
    },
    {
        position: [0, 5],
        height: 5,
        width: 1,
        image: [""]
    },
    {
        position: [12, 0],
        height: 5,
        width: 1,
        image: [""]
    }
];

// Probably needs a function to check if item is in list and add to list if not

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const movePic = (toX: number, toY: number, nItem: any) => {
    // // nItem is an object that looks like: {type: *type defined by ItemType in constants.ts*, item: Item}
    // // Finding the index of the item passed in parameter in array of items
    // const tItemIndex = items.findIndex((i) => {
    //     return i.UID === nItem["item"].UID;
    // });
    // const it = nItem["item"];
    // // removing identical item from list
    // items.splice(tItemIndex, 1);
    // // adding the item back to list with new position coordinates
    // items.push({
    //     position: [toX, toY],
    //     UID: it.UID,
    //     color: it.color,
    //     height: it.height,
    //     width: it.width,
    //     image: it.image
    // } as Item);
    // emitChange();
};

// Currently only checks if a square is enabled
export const canMovePic = (enabled: boolean) => {
    // const [x, y] = picPosition[index];
    // const dx = toX - x;
    // const dy = toY - y;
    // return !(toX === x && toY === y);
    return enabled;
};
