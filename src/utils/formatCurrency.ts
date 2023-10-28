export const formatCurrency = (currency) => {
  const convertCurrency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'});
  const currencyFormatted = convertCurrency.format(currency)
  return currencyFormatted
}