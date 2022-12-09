export interface SavedRoom {
    id: number;
    furniture: {
        [key: string]: {
            top: number;
            left: number;
            image: string;
            isInList: boolean;
        };
    };
}
