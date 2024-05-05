## How to run
```
#redis
docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest

npm i
tsc app/app.ts
node app/app.js
```

## Remove all .js
rm -rf app/**/*.js && rm -rf app/*.js
