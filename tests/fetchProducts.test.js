require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Se fetchProducts é uma função; ', async () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('Se fetch foi chamada ao executar fetchProducts com o argumento "computador"; ', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('Ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"; ', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('O retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo; ', async () => {
    const retorno = await fetchProducts('computador');
    expect(retorno).toBeEqualTo(computadorSearch);
  })
  it('Ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url; ', async () => {
    const retorno = await fetchProducts();
    expect(retorno).toBeEqualTo(new Error('You must provide an url'));
  })
});
