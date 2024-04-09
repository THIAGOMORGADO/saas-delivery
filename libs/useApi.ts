// Criando Hook

import { Tenant } from "@/types/Tenant";



export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
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


    
  }
})