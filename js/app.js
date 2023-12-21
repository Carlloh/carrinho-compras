let valorTotal;
limpar();

function adicionar() {
//recuperar nome e quantidade dos produtos
let produto = document.getElementById('produto').value;
let quantidade = parseInt(document.getElementById('quantidade').value);
if (isNaN(quantidade) || quantidade <= 0) {
    alert('Por favor, insira uma quantidade válida para o produto selecionado.');
      return;
   }
let nomeProduto = produto.split('-')[0];
let valorUnidade = produto.split('- R$')[1];
//calcular o preço por produto
let preco = quantidade * valorUnidade;
//adicionar tudo no carrinho
let listaCarrinho = document.getElementById('lista-produtos');
listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`;
//atualizar valor total
valorTotal = valorTotal + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$${valorTotal}`;
document.getElementById('quantidade').value = '';
}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}