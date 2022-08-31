# Manipulação de Arrays do JS
### Códigos de exemplo
Como criar um array dentro do javascript?

#### let - cria uma variavel dentro do bloco corrente

```javascript
let lista =[1,2,3,4];
let lista2 =['a','b','c','d'];
let lista3 = ['☕','☕','🥛','☕'];
```

## MAP
Mapeia cade elemento da lista, passando por uma função que pode alterar o valor do elemento.
```javascript
let novalista =lista3.map((item) => (item === '🥛' ? '🥤' : item))
```

## REDUCE 
Realiza a redução dos elementos de um array para um único valor, a partir de uma função que recebe dois parametros (acumulador, item)
```javascript
let novalista = lista3.map((item) => (item ==='☕'?1:0));
let total = novalista.reduce((soma, item) => soma + item);
console.log(total);
```

## ARROW FUNCTION 
Funçaõ Javascript, escrita em uma única linha (normalmente) para representar ima lógica simples.
```javascript
parametro => expressão
(parametro) => expressão
(param1, param2) => expressão
(param1, param2) => {
    return valor
}
```