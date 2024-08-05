export interface Recipe {
    id: string,
    title: string,
    description: string,
    ingredients: string[],
    method: string[],
    favourite: boolean;
}