const saveCartItems = (lista) => localStorage.setItem('carrinho', lista);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
