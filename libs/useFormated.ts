// Criando Hook para formata valores
export const useFormated = () => ({
  formatedPrice: (price: number) => {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL',
    });
  },
  formatQuantity: (qt: number, mindigits: number) => {
    if(qt.toString().length >= mindigits) {
      return qt;
    }

    const remain = mindigits - qt.toString().length;
    return `${'0'.repeat(remain)}${qt}`
  }
})