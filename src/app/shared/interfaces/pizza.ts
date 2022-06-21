export interface Pizza {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    type: string;
}
  
export type Pizzas = Array<Pizza>