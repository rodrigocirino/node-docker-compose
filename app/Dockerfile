## Use the lts version, more supported by queue frameworks.
FROM node:lts

# linux remote folder exec
WORKDIR /usr/src/app

COPY [".", "."]

# Se WORDIR for igual ao volume no docker-compose.yml
# - vc vai poder usar o nodemon com hotreload, mas precisa gerar o nodemodules local, e não realizar npm install no Dockerfile
# Se deseja rodar tudo remoto, sem criar o node_modules local, remove o volume do docker-compose.yml
# - problema é que o nodemon não vai funcionar, vai ser preciso rebuildar a imagem
# Resumindo se quiser alterar sem rebuildar, use o docker como servidor node apenas e não como hospedeiro de arquivos
# - logo este arquivo serve apenas para baixar image, expor porta e rodar entrypoint e o compose para unir outros containers
ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken="$NPM_TOKEN > .npmrc
RUN npm install
RUN rm .npmrc

EXPOSE 8080
EXPOSE 9000

RUN /bin/sh -c 'ls -alF'

ENTRYPOINT ["npm", "run", "debug"]
