# pipeline-node-aws

## Versão 1 - Node Http app

Utilize esta versão se não for usar lambdas nem serverless [release-1](https://github.com/rodrigocirino/pipeline-node-aws/releases/tag/version1) or [tree-view](https://github.com/rodrigocirino/pipeline-node-aws/tree/version1)


## RUN

> Test local

```bash
$ cd app
$ npm install
$ npm run debug
1 - Access http://localhost:8080/hello/es
2 - Teste debugger in vscode attach
```

> Test With Docker + Nodemon + Hotreload

```bash
$ ./docker-compose.sh
Test again
```

> Test remote with full docker, no volumes

```bash
$ docker-compose up
Test again
```

### Problems with PORT? Check here:

    - docker-compose.yml (ports, command)
    - app/index.js
    - app/.env.development
    - app/Dockerfile (expose)
    - app/package.json
