# Projeto API WEB NodeJS
Implementaçao de uma API REST utilizando 
NodeJS e Express 
- REST - Representaçao do estado dos dados
- Formato: JSON Javascript Object Notation

## Criando o projeto 
- criar uma pasta com o nome do projeto 
- abrir o terminal do VScode 
- entrar na pasta dp projeto: cd projetoapiweb
- criar novo projeto: npm init 
- o npm ira gerar o arquivo descrito do projeto 

## Instalando dependencias 
- instalar o express: npm i express --save

## Ferramentas 
Utilizadas para testar a API
 - Extensao do VScode Thunder Client
 - Extensao do VScode REST Client

## Padroes de nomenclatura 
- https://restfulapi.net/resource-naming/

### Endpoint GET /api/v1/clientes
- Verbo GET do protocolo HTTP 
- Objeto: retornar uma lista de objetos cliente
- HTTP Status Code 200 - Sucesso
- Header Resposta
    - Content-Type = application/json (tipo do informacao retornada pela api)

### Endpoint GET /api/v1/clientes/{id}
- Verbo GET do protocolo HTTP
- Objetivo: retornar uma unica instancia do objeto cliente de acordo com o ID informado na URL
- HTTP Status Code 200 - Sucesso
- HTTP Status Code 404 - Not Found
- Header Resposta
    - Content-Type = application/json (Tipo do informaçao retornada pela api)

### Endpoint GET /api/v1/clientes/nome/{nome}
- Verbo GET do protocolo HTTP
- Objetivo: retornar uma unica instancia do objeto cliente que contenha no nome o valor informado na URL
- HTTP Status Code 200 - Sucesso
- HTTP Status Code 404 - Not Found
- Header Resposta
    - Content-Type = application/json (Tipo do informaçao retornada pela api)

### Endpoint POST /api/v1/clientes
- Verbo POST do protocolo HTTP
- Objetivo: recebe no corpo (body) da requisiçao um objeto e insere na lista de dados
- Retorna o objeto inserido no sistema
- HTTP Status Code 201 - Created
- HTTP Status Code 400 - Bad request - se o corpo nao possuir um objeto
- Header Resposta
    - Content-Type = application/json (Tipo do informaçao retornada pela api)


### Endpoint PUT /api/v1/clientes/{id}
- Verbo PUT do protocolo HTTP
- Objetivo: recebe no corpo (body) da requisiçao um objeto, utilizando o parametro id da URL, procurar pelo cliente e entao atualizar o cliente com objeto recebido no corpo do body 
- HTTP Status Code 200 - Sucesso 
- HTTP Status Code 400 - Bad request - se o corpo nao possuir um objeto
- HTTP Status Code 404 - Not Found 
- Resposta: o objeto alterado 
- Header Resposta
    - Content-Type = application/json (Tipo do informaçao retornada pela api)