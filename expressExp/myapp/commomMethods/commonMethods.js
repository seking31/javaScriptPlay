 const data = require('../data/data.json')

export const getItemBySku = (skuId) => {
  var skuArray = [];
  data.forEach(function(item) {
    if (item.sku == skuId){
      skuArray.push(item);
    }
    return skuArray;
  });
}