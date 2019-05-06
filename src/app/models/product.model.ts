import { Ingredient } from "./ingredient.model";

export class Product {


public id: string;
public name: string;
public price: number;
public category: string;
public sub_category: string;
public size : string;
public image:string;


public updateFrom(src: Product): void {
    this.id = src.id;
    this.name = src.name;
    this.price = src.price;
    this.category = src.category;
    this.sub_category = src.sub_category;
    this.size = src.size;
    this.image=src.image;

}
}


