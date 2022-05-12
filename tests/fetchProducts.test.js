require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('1.1 - Se fetchProducts é uma função; ', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('1.2 - Se fetch foi chamada ao executar fetchProducts com o argumento "computador"; ', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('1.3 - Ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"; ', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('1.4 - O retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo; ', async () => {
    const resultado = await fetchProducts('computador');
    expect(computadorSearch).toEqual(resultado);
  })
  it('1.5 - Ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url; ', async () => {
    await expect(fetchProducts()).rejects.toThrowError('You must provide an url');
  })
});
