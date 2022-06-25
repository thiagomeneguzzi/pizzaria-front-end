
import { Address } from "./address";
import { Order } from "./order";

export interface FinalOrder {
    id?: string;
    orders: Array<Order>;
    price: number;
    address: Address;
    name: string,
    phone: string,
    payment_method: string;
}