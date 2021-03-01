# node-mongo-ts-config-demo
A demo app for configuration of node api with typescript and mongodb connections

## Running locally
Make sure you have [Node.js](http://nodejs.org/), [typescript](https://www.typescriptlang.org/) and [mongodb](https://www.mongodb.com/) configuration on your local system.


``` sh
git clone https://github.com/iflairemp264/node-mongo-ts-config-demo.git # or clone your own fork
cd node-mongo-ts-config-demo

touch .env      >>> create .env file on root dir then copy env.sample file to .env 
npm install     >>> install node packages 
npm run build   >>> generate build
npm start       >>> start node server

```

make sure to change config.ts file with your local dabatabse configuration.


Your app should now be running on port 9000
