const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const resultArray = productDetails('Item 1', 'Item 2');
    const [item1, item2] = resultArray;
    const item1ProductId = item1.details.productId;
    const item2ProductId = item2.details.productId;
    // Teste se productDetails é uma função.
    expect(typeof productDetails === 'function').toBe(true);
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Item 1', 'Item 2').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof (resultArray[0] && resultArray[1]) === 'object').toBe(true);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(resultArray[0] !== resultArray[1]).toBe(true);
    // Teste se os dois productIds terminam com 123.
    expect(
      item1ProductId.substring(item1ProductId.length - 3) &&
        item2ProductId.substring(item2ProductId.length - 3) === '123'
    );
  });
});
