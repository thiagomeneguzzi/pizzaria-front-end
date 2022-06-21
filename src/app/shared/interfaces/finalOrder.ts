
import { Address } from "./address";
import { Order } from "./order";

export interface FinalOrder {
    orders: Array<Order>;
    price: string;
    address: Address;
    payment_method: string;
}