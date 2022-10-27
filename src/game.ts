let picPosition = [0, 0];
let observer: ((arg0: number[]) => void) | null = null;

const emitChange = () => {
    observer && observer(picPosition);
};

export const observe = (o: any) => {
    if (observer) {
        throw new Error("Multiple observers not implemented.");
    }

    observer = o;
    emitChange();
};

export const movePic = (toX: number, toY: number) => {
    picPosition = [toX, toY];
    emitChange();
};

// Checks to make sure that the item is not putting it on itself
export const canMovePic = (toX: number, toY: number) => {
    const [x, y] = picPosition;
    const dx = toX - x;
    const dy = toY - y;

    return !(toX === x && toY === y);
};
