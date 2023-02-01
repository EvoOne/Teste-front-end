# Teste Evo One

###### Bem vindo ao teste de desenvolvimento da empresa Evo One Smart Software.
###### Nesse desfio serão testados suas habilidades básicas com desenvolvimento front end utilizando a framework Angular.
###### Você deve criar um projeto conforme o layout a baixo (hospedado no figma):

https://www.figma.com/file/lqCqO8IrUgLh7oEOEdFnWu/Angular-teste?t=YqYjFgZeg5CYw3YH-0 

#### Os dados apresentados em tela devem ser obtidos via Api GraphQL, segue o endpoit da requisição:

| Endpoint                                                                         | x-api-key                      | método  |
|:---------------------------------------------------------------------------------|:-------------------------------|:--------|
| https://xsksoss2sneujaauha6u5wqzsq.appsync-api.us-west-1.amazonaws.com/graphql   | da2-kkfpbntbb5acnao4utbk2xvmyq | post    |

## Guia de participação
    > No repositorio principal faça um fork da branch Main, criando uma nova branch com SEU NOME COMPLETO
     
    > Após concluido, faça uma solicitação de Pull request para o repositório principal

## Para fazer a integração com o google maps você pode seguir o link a baixo:
https://angular-maps.com/guides/getting-started/

# Documentação da API
## getOccurence
### Função que recupera uma única ocorrência 
#### @id = String
id da ocorrência

~~~
query MyQuery {
  getOccurence(data: {id: ""}) {
    address
    data
    id
    image
    title
    user
    status
  }
}
~~~
## getUser
### Função que recupera um único usuário
#### @id = String
id do usuário

~~~
query MyQuery {
  getUser(data: {id: ""}) {
    id
    address
    email
    name
    phone
  }
}
~~~

## listOccurences
### Função que recupera uma lista de ocorrências
~~~
query MyQuery {
  listOccurences {
    address
    data
    id
    image
    title
    user
    status
  }
}
~~~

## listUsers
### Função que recupera uma lista de usuários
~~~
query MyQuery {
  listUsers {
    id
    address
    email
    name
    phone
  }
}
~~~
