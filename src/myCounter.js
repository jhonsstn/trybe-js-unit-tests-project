/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.
  Atenção: não remova os `for`s da função e sim corrija os erros presentes.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  var myArray = [];
  // Uma vez no primeiro loop e 2 vezes no segundo ate alcançar a condição e voltar pro primeiro assim resetando a contagem do segundo e acrescendo 1 no primeiro.
  for (var firstCounter = 0; firstCounter <= 3; firstCounter += 1) {
    myArray.push(firstCounter);
    for (var secondCounter = 2; secondCounter <= 3; secondCounter += 1) {
      myArray.push(secondCounter);
    }
  }
  return myArray;
};

module.exports = myCounter;

console.log(myCounter());
