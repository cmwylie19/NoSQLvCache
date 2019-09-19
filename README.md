## NoSQL Service
> docker run -d -p 27017:27017 mongo
> 
> $ docker start mongo
____________________________

## Cache Service
> $ docker run -d -p 6379:6379 redis
> 
> $ docker start redis
_____________________________

## Run NODE
> $ npm i 
> 
> $ npm start
_____________________________



## CLI USAGE
### Store Data

curl http://localhost:3332/cache/store/my-key\?some\=value\&some-other\=other-value


### Retreive Data

curl http://localhost:3332/cache/my-key

## Running containers 

### Check if its running
docker ps 

### View logs
docker logs redis
docker logs mongo


## Clean Up

docker stop redis
docker stop mongo

docker rm -f redis
docker rm -f mongo

docker rmi -f redis
docker rmi -f mongo
