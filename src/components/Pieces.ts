import type { Sofa, Chair, BookShelf } from "./PiecesInterface";
//images
import ChairImage from "../images/chair.jpg";
import SofaImage from "../images/sofa.jpg";
import BookShelfImage from "../images/bookshelf.jpg";

const sofa: Sofa = {
    id: "sofa-object",
    top: 0,
    left: 0,
    height: 100,
    width: 100,
    isInList: true,
    itemName: "Sofa",
    image: SofaImage
};

const chair: Chair = {
    id: "chair-object",
    top: 0,
    left: 0,
    height: 100,
    width: 100,
    isInList: true,
    itemName: "Red Chair",
    image: ChairImage
};

const bookshelf: BookShelf = {
    id: "bookshelf-object",
    top: 0,
    left: 0,
    height: 100,
    width: 100,
    isInList: true,
    itemName: "BookShelf",
    image: BookShelfImage
};

export const pieces = [sofa, chair, bookshelf];
