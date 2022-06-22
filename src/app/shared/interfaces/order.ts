import { Pizza } from "./pizza";

export interface Order {
    id?: string;
    size: string;
    flavorOne: Pizza;
    flavorTwo: Pizza;
    flavorThree: Pizza;
    border_flavor: string;
    observation: string;
}