const percentageColor =a =>a < 0 ? "#ea3943" : "#16c784";

  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 10e12) {
      return `${Math.floor(marketCap / 10e12)} T`;
    }
    if (marketCap > 10e9) {
      return `${Math.floor(marketCap / 10e9)} B`;
    }
    if (marketCap > 10e6) {
      return `${Math.floor(marketCap / 10e6)} M`;
    }
    if (marketCap > 1000) {
      return `${Math.floor(marketCap / 1000)} K`;
    }
    return marketCap;
  };

const formatCurrency = (value,current_price) => {
    if (value === '') {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const formatDecimal=(x)=>x.toFixed(2)


  

  export {percentageColor,normalizeMarketCap,formatCurrency,formatDecimal}