import { create } from "zustand";
import hamburgesa1 from "../assests/heroburgers/product1.png";
import hamburgesa2 from "../assests/heroburgers/product2.png";
import hamburgesa3 from "../assests/heroburgers/product3.png";
import hamburgesa4 from "../assests/heroburgers/product4.png";
import pizza from "../assests/productos/product-18-copyright-768x768.png";
import hotDog from "../assests/productos/product-20-copyright-768x768.png";
import HotDog2 from "../assests/productos/product-22-copyright-768x768.png";
import { persist } from "zustand/middleware";

interface Product {
    id: number;
    title: string;
    price: number;
    type: string[];
    image: string;
    
}

interface ProductStore {
    products: Product[];
    obtenerProductos: () => Product[];
}

interface CartItem {
    id: number;
    title: string;
    price: number;
    type: string[];
    image: string;
}

interface CartStore {
    cart: CartItem[];
    addItemToCart: (item: CartItem) => void;
    removeItemFromCart: (itemId: number) => void;
    clearCart: () => void;
    verCarrito: () => CartItem[];
    cantidadItemsEnCarrito: () => number;

}

const useProductStore = create<ProductStore>((set,get) => ({
    products: [
        {
            id: 1,
            title: "Black Burger",
            price: 320,
            type: ["Destacados", "Burgers"],
            image: hamburgesa1,
        },
        {
            id: 2,
            title: "Fish Burger",
            price: 120,
            type: ["Destacados", "Burgers"],
            image: hamburgesa2,
        },
        {
            id: 3,
            title: "Chicken Burger",
            price: 120,
            type: ["Destacados", "Burgers"],
            image: hamburgesa3,
        },
        {
            id: 4,
            title: "Super Burger",
            price: 120,
            type: ["Destacados", "Burgers"],
            image: hamburgesa4,
        },
        {
            id: 5,
            title: "Hot Dog Super",
            price: 120,
            type: ["Destacados", "HotDogs"],
            image: HotDog2,
        },
        {
            id: 6,
            title: "Pizza Margarita",
            price: 120,
            type: ["Destacados", "Pizzas"],
            image: pizza,
        },
        {
            id: 7,
            title: "HotDog MAsterClass",
            price: 120,
            type: ["Destacados", "HotDogs"],
            image: hotDog,
        },
    ],
    obtenerProductos:() =>{
        const {products} = get();
        return products;
    }
}));

const useCartStore = create<CartStore>((set, get) => ({
    cart: [],
    addItemToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeItemFromCart: (itemId) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== itemId) })),
    clearCart: () => set({ cart: [] }),
    verCarrito: () => {
        const { cart } = get();
        return cart
    },
    cantidadItemsEnCarrito: () => {
        const { cart } = get();
        return cart.length;
    },
  
}));

export { useProductStore, useCartStore };
