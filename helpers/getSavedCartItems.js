const getSavedCartItems = (lista) => localStorage.getItem(lista);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
