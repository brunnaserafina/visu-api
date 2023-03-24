<h1 align="left">Visu API 🌎</h1>

###

<p align="left">Esta é uma API (Application Programming Interface) de um projeto autoral de uma rede social para compartilhar roteiro de viagens. Acesse também o front-end da aplicação feito por mim https://github.com/brunnaserafina/visu </p>

###

### ⚙️ Funcionalidades

- Cadastro/Login
- Postar viagem
- Visualizar todas as postagens
- Visualizar post
- Visualizar histórico
- Favoritar postagem
- Desfavoritar postagem
- Verificar se a postagem já foi favoritada
- Visualizar favoritos

</br>

### 📄 Documentação da API

##### CADASTRO/LOGIN:

```http
  POST /auth/sign-in
```
- Body:

| Parâmetro  | Tipo     | Descrição           |
| :--------- | :------- | :-------------------|
| `name`     | `string` | `Nome do usuário`   |
| `email`    | `string` | `E-mail do usuário` |
| `password` | `string` | `Senha do usuário`  |


--
##### POSTAR VIAGEM:

```http
  POST /post-travel
```
- Body:

| Parâmetro         | Tipo     | Descrição                                      |
| :---------------- | :------- | :----------------------------------------------|
| `cityOrigin`      | `string` | `Nome da cidade de origem`                     |
| `cityDestination` | `string` | `Nome da cidade de destino`                    |
| `dateStart`       | `date`   | `Data de início da viagem`                     |
| `dateEnd`         | `date`   | `Data do último dia da viagem`                 |
| `spent`           | `number` | `Valor que foi gasto na viagem`                |
| `summary`         | `string` | `Resumo sobre a viagem`                        |
| `avaliation`      | `number` | `Avaliação de 1 a 5`                           |
| `attractions`     | `array`  | `Array com os pontos turísticos visitados`     |
| `restaurants`     | `array`  | `Array com os Restaurantes visitados`          |
| `accommodation`   | `object` | `Objeto com o tipo de acomodação e o endereço` |
| `picture`         | `string` | `Endereço http de uma imagem`                  |


--

##### VISUALIZAR TODAS AS POSTAGENS:

```http
  GET /travels
```

- Headers:

| Parâmetro      | Tipo     | Descrição         |
| :--------------| :------- | :-----------------|
| `Authorization`| `string` | `Bearer ${token}` |

--

##### VISUALIZAR POST:

```http
  GET /travels/:travelId
```
- Params:

| Parâmetro | Tipo     | Descrição                              |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | `o ID da viagem que deseja visualziar` |

- Headers:

| Parâmetro      | Tipo     | Descrição         |
| :--------------| :------- | :-----------------|
| `Authorization`| `string` | `Bearer ${token}` |

--

##### VISUALIZAR HISTÓRICO:

```http
  GET /historic
```

- Headers:

| Parâmetro      | Tipo     | Descrição         |
| :--------------| :------- | :-----------------|
| `Authorization`| `string` | `Bearer ${token}` |

--

##### FAVORITAR POSTAGEM:

```http
  POST /favorites/:travelId
```

- Params:

| Parâmetro | Tipo     | Descrição                              |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | `o ID da viagem que deseja favoritar`  |

- Headers:

| Parâmetro      | Tipo     | Descrição         |
| :--------------| :------- | :-----------------|
| `Authorization`| `string` | `Bearer ${token}` |

--

##### DESFAVORITAR POSTAGEM:

```http
  DELETE /favorites/:travelId
```

- Params:

| Parâmetro | Tipo     | Descrição                                |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `string` | `o ID da viagem que deseja desfavoritar` |

- Headers:

| Parâmetro      | Tipo     | Descrição         |
| :--------------| :------- | :-----------------|
| `Authorization`| `string` | `Bearer ${token}` |

--

##### VISUALIZAR TODAS AS POSTAGENS FAVORITADAS:

```http
  GET /favorites
```

- Headers:

| Parâmetro      | Tipo     | Descrição         |
| :--------------| :------- | :-----------------|
| `Authorization`| `string` | `Bearer ${token}` |

--

##### VERIFICAR SE A POSTAGEM JÁ FOI FAVORITADA:

```http
  GET /favorites/:travelId
```
- Params:

| Parâmetro | Tipo     | Descrição                             |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | `o ID da viagem que deseja verificar` |

- Headers:

| Parâmetro      | Tipo     | Descrição         |
| :--------------| :------- | :-----------------|
| `Authorization`| `string` | `Bearer ${token}` |

--


</br>

### ▶️ Rodando a aplicação

1. Crie ou selecione uma pasta com o nome de sua preferência
2. Clone este repositório na pasta criada/selecionada:

```bash
 $ git clone https://github.com/brunnaserafina/visu-api.git
```
3. Instale suas depêndencias:

```bash
   npm i
```

4. Inicie a aplicação:

```bash
   npm run dev
```

</br>

### 🛠️ Tecnologias utilizadas

 <img align="left" alt="node" height="30px" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
 <img align="left" height="30px" alt="typescript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
 <img align="left" alt="express" height="30px" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
 <img align="left" alt="prisma" height="30px" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
 <img align="left" alt="postgresql" height="30px" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />



</br>
</br>

### 🙇🏻‍♀️ Autora

- Feito com ❤️ por [@brunnaserafina](https://www.github.com/brunnaserafina)
