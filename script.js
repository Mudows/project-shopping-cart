// const { fetchProducts } = require('./helpers/fetchProducts');

// const { fetchItem } = require("./helpers/fetchItem");

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement(sku, name, image) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

/* function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
} */

/* function cartItemClickListener(event) {
  // coloque seu código aqui
} */

function createCartItemElement(sku, name, salePrice) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  return li;
}

/* dadosProduto():
 * recebe o id do produto, buscando as informações dele e cria um novo
 * elemento no carrinho com suas informações.
 */
const dadosProduto = async (dados) => {
  const id = dados.parentElement.firstChild.innerText;
  const infoProd = await fetchItem(id);
  const carrinho = document.querySelector('.cart__items');
  const prodId = infoProd.id;
  const prodNome = infoProd.title;
  const prodValor = infoProd.price;
  const item = createCartItemElement(prodId, prodNome, prodValor);
  carrinho.appendChild(item);
};

/* adicionaProduto():
 * Adiciona um evetListener aos botões, chamando a função dadosProduto que irá
 * armazenar dados específicos do produto selecionado e exibilo no carrinho.
 */
const adicionaProduto = () => {
  const botaoAdiciona = document.querySelectorAll('.item__add');
  botaoAdiciona.forEach((botao) => botao.addEventListener('click', () => dadosProduto(botao)));
};

window.onload = async () => {
  const produtos = await fetchProducts('computador');
  // console.log(produtos);
  produtos.results.forEach((element) => {
    document.querySelector('.items')
      .appendChild(createProductItemElement(element.id, element.title, element.thumbnail));
  });
  adicionaProduto();
};
