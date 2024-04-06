// Criando Hook


export type getTenantResponse = {
      name: string,
      mainColor: string,
      secondyColot: string, 
}

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    switch (tenantSlug) {
      case 'maria-pizza':
        return {
          name: 'B7Burger',
          mainColor: "#ff0000",
          secondyColot: "#00ff00"
        }
      break;

      case 'maria-burger':
        return {
          name: 'B7Pizza',
          mainColor: "#0000ff",
          secondyColot: "#333"
        }
        break;

        case 'maria-coffer':
          return {
            name: 'B7Pizza',
            mainColor: "#ff0",
            secondyColot: "#00fff0"
          }
          break;

        default: return false;
    }


    
  }
})