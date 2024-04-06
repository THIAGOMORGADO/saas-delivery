// Criando Hook

import { Tenant } from "@/types/Tenant";



export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
    switch (tenantSlug) {
      case 'maria-pizza':
        return {
          slug: 'maria-burge',
          name: 'B7Burger',
          mainColor: "#ff0000",
          secondyColot: "#00ff00"
        }
      break;

      case 'maria-burger':
        return {
          slug: 'maria-pizza',
          name: 'B7Pizza',
          mainColor: "#0000ff",
          secondyColot: "#333"
        }
        break;

        case 'maria-coffer':
          return {
            slug: 'maria-coffer',
            name: 'B7Pizza',
            mainColor: "#ff0",
            secondyColot: "#00fff0"
          }
          break;
          case 'adega-luiz':
            return {
              slug: 'maria-coffer',
              name: 'B7Pizza',
              mainColor: "#000",
              secondyColot: "#fff"
            }
            break;

        default: return false;
    }


    
  }
})