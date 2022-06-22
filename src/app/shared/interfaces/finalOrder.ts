
import { Address } from "./address";
import { Order } from "./order";

export interface FinalOrder {
    id?: string;
    orders: Array<Order>;
    price: string;
    address: Address;
    payment_method: string;
}