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

### instal env variables:

_NOTE_: all this must be executed at client folder

check the `.env.example` and use the api url of the server to point the client api (check it needs to use the prefix VITE) check more [here](https://vitejs.dev/guide/env-and-mode)
(localhost:3000 is default example)

```
VITE_API_URL=http://localhost:3000
```

if you want to run independently the client go to the client folder and install dependencies

`cd ./client && npm install`

to run dev server :
`npm run dev`

The application is build with:

- TailwindCss
- React
- React Router DOM v6 [check page](https://reactrouter.com/en/main)
- HeadlessUI/react
- heroIcons/react
- vite

## prod mode

`npm run build` command will rund linter, ts build and export the vite build
