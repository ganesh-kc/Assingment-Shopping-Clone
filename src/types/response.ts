export interface response {
        data : itemType[]
}

export interface itemType {
    id : number,
    itemname : string,
    price : number,
    quantity?: number,
    itemwishlist: boolean
}
