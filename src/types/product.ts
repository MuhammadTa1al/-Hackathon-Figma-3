export interface Product{
    _id : string,
    productName: string,
    type : "product"
    category: string,
    price: number,
    inventory: string,
    colors: string, 
    status: string,
    description?: string,
    image?: {
        asset : {
            _ref : string,
            _type : "image";
        }
    }
}

