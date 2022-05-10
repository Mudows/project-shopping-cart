const fetchItem = async ($ItemID) => {
  const url = `https://api.mercadolibre.com/items/${$ItemID}`;
  const itemRequisitado = await (await fetch(url)).json();
  // console.log(itemRequisitado);
  return itemRequisitado;
};

// fetchItem('MLB1341706310');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
