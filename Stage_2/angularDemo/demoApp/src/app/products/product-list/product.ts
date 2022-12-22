
export enum Categories{
    Food="food",
    Cosmetics="cosmetic",
    Clothing="clothing",
    Furniture="furniture"
};

export interface IProduct{
    id:number ,
    name:string,
    price:number,
    image: string,
    category: Categories 
}