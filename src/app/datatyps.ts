export interface adminData {
    id: string,
    firstname: string,
    lastname: string,
    password: number,
    email: string,
    phone: number,
    workphone: number,
    service: undefined | boolean,
    telecaller: undefined | boolean,
    createdOn:string
}
export interface Dealersdata {
    firstname: string,
    lastname: string,
    password: number,
    email: string,
    phone: number,
    workphone: number,
    seller: undefined | boolean,
    id: string,
    address: string,
    createdOn:string,
    deller:string
}
export interface logdata {

    email: string,
    password: number,

}
export interface length {

    length:number|undefined

}
export interface sellerProduct {
    id: string,
    dealerName:string,
    product_name:string,
    product_price:string,
    product_colour:string,
    product_category:string,
    product_details:string,
    product_image_link:string,
    createdOn:string,
    gender:string
}
export interface coustomerData {
    id: string,
   name:string,
   email:string,
   contact:number,
   password:number
}
