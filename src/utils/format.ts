
export const formatCurrency = (value: string): string => {
    const number = Number(value.replace(/[^0-9.-]+/g, ''));
    return number.toLocaleString('en', { style: 'currency', currency: 'USD' });
  };
  
export const formatNumber = (value: string): string => {
    const number = Number(value);
    return number.toFixed(2);
  };

