import { Artwork } from "./Artwork_Interface";

export class Statue implements Artwork {
    title: string;
    year: number;
    price: number;
    height: number;
    public constructor(title: string, year: number, price: number, height: number) {
        this.title = title;
        this.price = price;
        this.year = year;
        this.height = height;
    }
}