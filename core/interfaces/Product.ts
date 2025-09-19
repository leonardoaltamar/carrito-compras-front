import Category from "./Category"

export default interface Product {
    id: any
    name: string
    price: number
    img?: any
    stock: number
    inCar: boolean
    category?: any
}