const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('3 - Teste a função getSavedCartItems', () => {
  it('3.1 - Ao executar getSavedCartItems, o método localStorage.getItem é chamado; ', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  })
  it('3.2 - Ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "carrinho" como parâmetro; ', () => {
    getSavedCartItems('carrinho');
    expect(localStorage.getItem).toHaveBeenCalledWith('carrinho');
  })
});
