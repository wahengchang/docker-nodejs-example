# docker-nodejs-example
It is a dockerized nodejs example, to show how Dockerfile and docker-compose work

## Start with docker-compose
This is a way for dev mode, with mount config.

```
volumes:
- ./:/usr/src/app
```

Run 
```
$ docker-compose up
```


##  Start with docker

```
$ docker build -t peterchang/node-app .
$ docker run -p 4141:8080 -itd peterchang/node-app
```