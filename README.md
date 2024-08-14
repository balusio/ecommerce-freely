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

## Run dev mode automatically

Add exectuable permissions to the init.sh on root folder
`chmod +x start.sh`

run it
`./init.sh`

this will start both client and server in dev mode, if you want to seed the db with fake api data add the command line parameter seedDB:
`./init.sh seedDB`

if everything goes OK you will receive a message like this:
`======== DB SEEDED=====`

_NOTE_ : the DB seeded gets saved on node-cache and removed everytime the application gets reboot, using nodemoon this is saved

## Initialize Server:

`npm install`

- Client:
