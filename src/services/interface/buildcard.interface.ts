import { Customer } from "./Customer"
import { Basecard, Feature } from "./basecard"

export interface Buildcard {    
    name:String,
    status?: number,
    features:Feature[],
    duration_of_development?:number,
    cost?:number,
    reference:String
    basecard_Id?:Basecard,
    urlBase?:String,
    id:number,
    last_update?:String,
    customer?:Customer,
    delivery_detail?:any[],
    developmentDuration?:number
}
