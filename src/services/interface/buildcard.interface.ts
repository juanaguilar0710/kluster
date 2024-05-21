import { Customer } from "./Customer"

export interface Buildcard {    
    name:String,
    status: number,
    features:String[],
    duration_of_development:number,
    cost:number,
    reference:String
    basecard_Id:number,
    urlBase?:String,
    id:number,
    last_update:String,
    customer:Customer
}
