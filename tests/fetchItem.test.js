require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('2.1 - Testando se fetchItems é uma função; ', () => {
    expect(typeof fetchItem).toBe('function');
  })
  it('2.2 - Se fetch foi chamada ao executar fetchItem com o argumento "MLB1615760527"; ', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })
  it('2.3 - Ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"; ', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })
  it('2.4 - O retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item, que já está importado no arquivo; ', async () => {
    const resultado = await fetchItem('MLB1615760527');
    expect(item).toEqual(resultado);
  })
  it('2.5 - Ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url; ', async () => {
    await expect(fetchItem()).rejects.toThrowError('You must provide an url');
  })
});
