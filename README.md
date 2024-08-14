# ecommerce-freely

This Applications is a client/server ecommerce built with:

- Server:
  - TS
  - Node
  - Express
  - node-cache
  - Nodemoon for hot reload
  - [Fake store api](<(https://fakestoreapi.com/products)>) for DB seeding
- Client:
  - React
  - React Router
  - tailwind
  - Vite
  - yup

## Run application:

Add exectuable permissions to the init.sh on root folder
`chmod +x init.sh`

run it
`./init.sh`

this will start both client on dev mode and server in prod mode, this to keep persistant the cache layer of node-cache, if you want to seed the db with fake api data add the command line parameter seedDB:
`./init.sh seedDB`

if everything goes OK you will receive a message like this:

`======== DB SEEDED ========`

## Initialize Server:

`cd server && npm install`

for dev mode the server runs on nodemoon, allowing hot reload

_NOTE_ : running the server with nodemoon will make the cache to flush everytime you save a file, if you want to keep persitency of the node-cache layer run start mode without hot reload

### Prod Mode:

The code is built in TS to make it run on JS PROD mode use:
`npm run build`
transpile ts to JS

`npm run serve`

will serve the JS `dist/` folder

## Initialize Client:
