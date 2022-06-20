export interface Pizza {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
}

export type Pizzas = Array<Pizza>