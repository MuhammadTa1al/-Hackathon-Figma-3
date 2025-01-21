export interface NikeProduct{
    _id : string,
    productName: string,
    type : "product"
    category: string,
    price: number,
    inventory: string,
    colors: string, 
    status: string,
    description: string,
    slug: {
        _type : "slug"
        current :string,
    }
    image: {
        asset : {
            _ref : string,
            _type : "image";
        }
    }
}