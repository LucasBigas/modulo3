# Manipulação de Arrays do JS

## FOR/OF
FOR EACH

```javascript
const lista = ['🐸','💕','😎','🐱‍🐉'];

for(let umitem of lista){
    console.log(umitem)
}
```

## MAP
Estrutura de dados tipo CHAVE VALOR.
```javascript
const mapa = new Map();

mapa.set('sapo','🐸');
mapa.set('coruja','🦉');
mapa.set('jacare','🐊');

console.log(mapa);
console.log(mapa.get('sapo'));
``` 

## SET 
Gera uma lista de valores únicos.
```javascript
const listavaloresunicos = new Set();
listavaloresunicos.add('🐸');
listavaloresunicos.add('🐊');
listavaloresunicos.add('🐶');
listavaloresunicos.add('🐸');
console.log(listavaloresunicos);
```

