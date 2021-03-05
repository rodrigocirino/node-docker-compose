# Starter to node + docker projects

---

## Run

### [Dev] Run local docker-compose + debugger + hotreload files + nodemon

```bash
$ ./docker-compose-dev.sh
# Test
$ curl --location --request GET 'http://localhost:8080/hello/pt' | jq
```

#### [Prod] Run full in Docker Remote containers (No hotreload files. No nodemon support)

```bash
$ docker-compose up
```

#### [No-Docker] Run with NO Docker, only local npm, and local node server client

```bash
$ cd app
$ npm i
$ npm run debug
# Teste debugger in VsCode attach to port
```

---

##### Problems with PORT? `${pkill node}` or Check here:

    - docker-compose.yml (ports, command)
    - app/index.js
    - app/.env.development
    - app/Dockerfile (expose)
    - app/package.json
