export class Productdisplay {
    id: number;
    name: string;
    price: number;
    category: string;
    sub_category: string;
    size : string;
    image : string;



    constructor(id: number, name: string, price: number, category: string , sub_category: string, size:string,image:string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.sub_category = sub_category;
        this.size = size;
        this.image=image;
    }

   
}
