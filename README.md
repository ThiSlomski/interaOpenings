# interaOpenings

Just a case for join to INTERA ( Openings )

## Setup

```bash
npm install
```

## Deploy

```bash
serverless deploy
```

## Case

Então vamos lá. Aqui na Intera temos preferência por microserviços serverless implementados em
NodeJS. 

Seu desafio é implementar pelo menos dois microserviços que atendam as necessidades
mencionadas na introdução, usando as tecnologias de nossa preferência. Quais deles fica a seu critério,
mas uma dica: a maioria implementa o talents service (para cuidar dos talentos e suas características) e o
openings service (para cuidar das vagas abertas, com suas necessidades, requisitos, etc.).

Gostaríamos que você incluísse pelo menos uma situação onde os serviços precisassem conversar entre si
de forma assíncrona. Aqui fazemos isso usando eventos - mas você está livre para considerar outro
approach, é só explicar pra gente o racional :). Talvez um matching service?

Em pelo menos um deles gostaríamos também que você persistisse os dados em um banco NoSQL.

Ah, não podemos esquecer dos nossos colegas que estão implementando o front-end: então é necessário
expor uma API Restful para eles. Se você conseguir colocar alguma política de autenticação/autorização,
melhor ainda.