export interface Pizza {
    id: string;
    name: string;
    description: string;
    image: string;
    type: {
        order: number;
        name: string;
        price: number;
    };
}
  
export type Pizzas = Array<Pizza>