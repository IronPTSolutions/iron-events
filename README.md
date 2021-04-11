# Docker

## Building Container

Arguments:
- t: image tag name with version
- f: dockerfile name
- .: shared context (current directory)


```bash
docker build --build-arg REACT_APP_API_BASE_URL=http://localhost:3001/api -t iron-events:0.1.0 -f Dockerfile .
```

## Running Containers

### MongoDB

Running mongo as a container
Arguments:
- v: mount volume, this options allows to share a directory from the docker hot with the docker container host/path:container/path
- p: port binding connect host post with the container port host:container
- name: docker container name

```bash
docker run -v path/local/db:/data/db -p 27017:27017 --name mongo mongo:4.4.5
```

### Express API

Running express API as a container
Arguments:
- env: environment variables
- link: connect this docker container with the mongo container
- p: port binding connect host post with the container port

```bash
docker run --env MONGODB_URI=mongodb://mongo:27017/iron-events --link mongo -p 3001:3001 pradomota/iron-events:0.1.0
```

# Deploy in Heroku using docker

https://devcenter.heroku.com/articles/build-docker-images-heroku-yml

# Social Login

![OAuth Flow]./docs/oauth-flow.png)
