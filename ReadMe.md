**Build NodeJS API easily**

Make sure you install pm2 globally

npm install -g pm2

npm install -g nodemon

To start, clone this repository and run npm install

To see it work run, "npm install", followed by "npm start"

To run tests, "npm test" or "npm run test"

To run the application from pm2 for development

pm2 start pm2.json --env development

To run the application from pm2 for production

pm2 start pm2.json --env production

To deploy docker image
1. Check for running instance of our docker image
2. Stop running container of an image, if running
3. Remove containers for an image
4. Remove image
5. Rebuild image
6. Run container for image

Commands for all of above is mentioned in tips section

**General docker tips**

To create a docker image of the Dockerfile, "docker build -t nodejs_pm2_microservice ."

To remove current image, "docker rmi -f nodejs_pm2_microservice"

To run a container from image, "docker run -p 3000:3000 -d nodejs_pm2_microservice"

To stop all containers of a image

docker stop $(docker ps -a -q  --filter ancestor=nodejs_pm2_microservice)

docker rm $(docker ps -a -q  --filter ancestor=nodejs_pm2_microservice)

To remove an image

docker rmi -f $(docker images nodejs_pm2_microservice --format "{{.ID}}")