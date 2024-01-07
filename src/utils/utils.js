function checkStock(currentStock, order) {
  let inStock = 0;
  for (p of currentStock.stock) {
    for (s of order.products) {
      if (p.productName === s.productName) ++inStock;
      if (p.productName === s.productName && !(p.quantity >= s.quantity)) {
        return false;
      }
    }
  }
  if (inStock == 0) return false;
  return true;
}

module.exports = {
  checkStock,
};
