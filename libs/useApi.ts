// Criando Hook

import { Product } from "@/types/Products";
import { Tenant } from "@/types/Tenant";

const Tmp_product: Product = {
  id: 1,
  image: '/tmp/Burger.png',
  categoryName: 'tradicional',
  name: 'Golden Burger',
  price: 40.00,
  description: '2 Blends de carne de 150g, Queijo Cheddar,Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal'
}

export const useApi = (tenantSlug: string) => ({
  getTenant: async () => {
    switch (tenantSlug) {
      // Lista de cliente cadastrados
      case 'maria-pizza':
        return {
          slug: 'maria-burge',
          name: 'maria-pizza',
          mainColor: "#ff0000",
          secondyColot: "#00ff00",
          backColor: '#000'
        }
      break;
      case 'maria-burger':
        return {
          slug: 'maria-burger',
          name: 'maria-burger',
          mainColor: "#0000ff",
          secondyColot: "#333"
        }
        break;
        case 'maria-coffer':
          return {
            slug: 'maria-coffer',
            name: 'maria coffer',
            mainColor: "#daa520",
            secondyColot: "#00fff0"
          }
          break;
          case 'adega-luiz':
            return {
              slug: 'adega-do-luiz',
              name: 'adega-luiz',
              mainColor: "#000",
              secondyColot: "#fff"
            }
            break;

        default: return false;
    }
  },
  
  // Lista de produtos cadastrados
  getAllProducts: async () => {
    let products = [];
    for(let q = 0; q  < 10; q++) {
      products.push(Tmp_product); 
    }
    return products;
  },
  // Lista por um produtos cadastrado
  getProducts: async (id: string) => {
    return Tmp_product;
  }

})