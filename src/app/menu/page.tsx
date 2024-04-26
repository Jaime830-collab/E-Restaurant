import { MainMenu } from "@/components/menu/main-menu"
import { NavBar } from "@/components/home/nav-bar"

import { filterCategories, filterItemsByCategory } from "@/utils";

export default function Page(){
    const items = [
        {
          "id": 1,
            "name": "Maçã",
            "description": "Maçã vermelha e suculenta",
            "price": 1.50,
            "category": "Frutas",
            "stock": 100,
            "photo": "maca.jpg"
          },
          {
            "id": 2,
            "name": "Maçã",
            "description": "Maçã vermelha e suculenta",
            "price": 1.50,
            "category": "Frutas",
            "stock": 100,
            "photo": "maca.jpg"
          },
          {
            id: 3,
            "name": "Maçã",
            "description": "Maçã vermelha e suculenta",
            "price": 1.50,
            "category": "Frutas",
            "stock": 100,
            "photo": "maca.jpg"
          },
          {
            id: 4,
            name: "Pão de Forma Integral",
            description: "Pão integral rico em fibras",
            price: 3.20,
            category: "Padaria",
            stock: 50,
            photo: "pao_integral.jpg"
          },
          {
            id: 5,
            name: "Arroz Integral",
            description: "Arroz integral nutritivo e saudável",
        price: 4.50,
            category: "Grãos",
            stock: 20,
            photo: "arroz_integral.jpg"
          },
          {
            id: 6,
            name: "Arroz Vegetal",
            description: "Arroz vegetal triangulado",
        price: 5.50,
            category: "Grãos",
            stock: 20,
            photo: "arroz_vegetal.jpg"
          },
    ]

    const categories = filterCategories(items)
    const itemsByCategory = filterItemsByCategory(categories, items)
    
    return (
        <>
            <NavBar />
            <MainMenu itemsByCategory={itemsByCategory} />
        </>
    )
}