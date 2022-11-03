export const ItemTypes = {
    PIC: "pic"
};

export type RoomType = "kitchen" | "bedroom" | "living room";

export type Item = {
    position: [number, number];
    UID: number; // Unique ID
    color: string;
    height: number;
    width: number;
    image: string;
};
