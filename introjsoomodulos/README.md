# Orientaçao a objetos em javascript

```javascript
let pessoa ={
    nome: "Zezinho",
    idade:22
};
```

Object = qualquer estrutura que esteja dentro de chaves e que possua o padrao atributo: valor

```javascript
console.log(pessoa.nome);
```
Utiliza-se o operador . para acessar atributos e metodos
Utiliza-se a notaçao de listas para acessar atributos

```javascript
pessoa.nome = "Zezinho da Silva";
console.log(pessoa.nome);
pessoa['nome']= "Zezinho da Silva Sauro";
console.log(pessoa['nome']);
```

utiliza-se o menos operadores para acessar atributos e alterar seus valores

```javascript
pessoa.endereco = "Rua lalala 100";
console.log(pessoa)
```

E possivel criar novos atributos que nao existiam no objeto no momento
da sua difiniçao

```javascript
JSON.stringify(pessoa);
```
Formata um objeto javascript em um texto no formato JSON, para ser transferido
para outra aplicaçao em outra linguagem de programaçao

```javascript
let objtexto = '{"nome":"Mariazinha"}';
let objjs = JSON.parse(objtexto);
console.log(objjs);
```

JSON.parse transforma um dado JSON texto para um objeto Javascript

```javascript
let pessoa = {
    nome: "Zezinho",
    idade: 22,
    reservista: true,
    cidade: {
        nome: "Joinville",
        estado: "Santa Catarina"
    },
    telefones: [
        "555-1234","999999999"
    ]
};
```
Dentro de um objeto pode haver outro objeto (cidade), ou uma lista de elementos ou objetos

```javascript
let pessoa = {
    nome: "Zezinho",
    idade: 22,
    reservista: true,
    cidade: {
        nome: "Joinville",
        estado: "Santa Catarina"
    },
    telefones: [
        "555-1234","999999999"
    ],
    geraEndereco: function(){
        return `${this.cidade.nome} - ${this.telefones[0]}`;
    },
    somaIdade: function(valorAdicional){
        return this.idade + valorAdicional;
    }

};
console.log(pessoa.geraEndereco());
console.log(pessoa.somaIdade(20));
```

Métodos são considerados propriedades que tem a referencia para uma função. Devem utilizar a palavra THIS para acessar as propriedades da instância do objeto.

```javascript
let pessoa = {
    nome: "Zezinho",
    idade: 22,
    reservista: true,
    cidade: {
        nome: "Joinville",
        estado: "Santa Catarina"
    },
    telefones: [
        "555-1234","999999999"
    ],
    geraEndereco: function(){
        let todosOsTel = "";
        for(let umTelefone of this.telefones){
            todosOsTel += umTelefone;
        }
        return `${this.cidade.nome} - ${todosOsTel}`;
    },
    somaIdade: function(valorAdicional){
        return this.idade + valorAdicional;
    },
    get nomeCompleto() {
        return this.nome;
    },
    set nomeCompleto(nome){
        this.nome = nome;
    }

};
pessoa.nomeCompleto = "Zezinho Sauro";
console.log(pessoa.nomeCompleto);
```
As palavras reservadas get e set podem ser utilizadas para criação de propriedades que dão acesso a atributos do objeto
