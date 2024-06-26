import { ProductData } from "./Products/[id]/getProductsApi";

type Products = ProductData[]
    

  
  export default async function getAllProducts(): Promise<Products> {
  
    console.log("all products are called")
          const res = await fetch( `http://api.josh.netbuildertraining.com/products`)
          if (!res.ok) {
              throw new Error(`failed to fetch user`)
          }
  
          return res.json() as Promise<Products>
      }
  