# pipeline-node-aws

### Versão 1

Utilize esta versão se não for usar lambdas nem serverless

> https://github.com/rodrigocirino/pipeline-node-aws/releases/tag/version1
> https://github.com/rodrigocirino/pipeline-node-aws/tree/version1


# RUN

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

# Problems with PORT? Check here:

- docker-compose.yml (ports, command)
- app/index.js
- app/.env.development
- app/Dockerfile (expose)
- app/package.json

# -------------------------------------------------------------


## Structure 

```
.
├── modules (modules folder)
│   └── books (module / context)
│       ├── endpoints (API endpoints)
│       │   ├── create.js
│       └── functions (workers / background functions)
│           └── worker
│               └── handler.js
├── package.json
├── serverless.yml (serverless config)
├── handlers (functions config)
│   ├── books-endpoints.yml (endpoints config)
│   └── books-workers.yml (workers config)
├── shared (shared components)
│   └── lib (shared libraries)
│       ├── dynamo.js
└── test (tests folder)
    └── unit (unit tests folder)
        ├── modules (unit tests for modules)
        │   └── books
        └── shared (unit tests for shared components)
            └── lib (unit tests for libraries)
                ├── dynamo.test.js
```

## Functions

### HTTP Trigger Function (API Gateway)

```yml
functions:

  # API Endpoints
  books-register:
    handler: modules/books/endpoints/create.create #Path to function
    memorySize: 128 # Lambda Memory Limit
    timeout: 60 # Lambda Timeout
    events: 
      - http: # HTTP Trigger 
          path: services/books # API Endpoint
          method: post # HTTP Method

```

### Cloudwatch Events Functions (Cron)

[Lambda Schedule Docs](https://serverless.com/framework/docs/providers/aws/events/schedule/)

```yml
# Background Function
  books-consumer:
    handler: modules/books/functions/worker/handler.worker #Path to function
    events:
      - schedule: #Cloudwatch Event Trigger
        rate: cron(* * * * * *) # Cron Syntax 
        enabled: true # Trigger Enabled

```

## Development environment 

This boilerplate uses `serverless-local` plugin and some containers and plugins to emulate the AWS Resources

```bash
docker-compose up
```
The applications will start on `http://localhost:3000`
