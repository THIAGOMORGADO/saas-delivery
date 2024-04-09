// Criando Hook para formata valores
export const useFormated = () => ({
  formatedPrice: (price: number) => {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL',
    });
  }
})