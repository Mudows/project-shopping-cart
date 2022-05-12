const fetchProducts = async ($QUERY) => {
  if (!$QUERY) throw new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`;
  const dadosUrl = await fetch(url);
  const produtosJason = await dadosUrl.json();
  // console.log(produtosJason);
  return produtosJason;
};

// fetchProducts('computador');
// console.log(fetchProducts());

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
