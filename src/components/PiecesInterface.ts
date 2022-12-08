export interface Sofa {
    id: string;
    top: number;
    left: number;
    image: string;
    height: number;
    width: number;
    isInList: boolean;
    itemName?: string;
}

export interface Chair {
    id: string;
    top: number;
    left: number;
    image: string;
    height: number;
    width: number;
    isInList: boolean;
    itemName?: string;
}

export interface BookShelf {
    id: string;
    top: number;
    left: number;
    image: string;
    height: number;
    width: number;
    isInList: boolean;
    itemName?: string;
}
export type Pieces = Sofa | Chair | BookShelf;
