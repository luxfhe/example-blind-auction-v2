# FHE Auction Demo UI

This code is based on the [LuxFHE Nuxt 3 template](https://github.com/LuxFHEProtocol/luxfhe-nuxt3-template).

It integrates the contracts that were compiled from [LuxFHE hardhat template](https://github.com/LuxFHEProtocol/luxfhe-hardhat-example).

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Compile & Prepare Contracts 

To deploy:

```bash
# from the base directory (not frontend)
pnpm compile
# start localluxfhe (if you don't have it running already)
pnpm localluxfhe:start
pnpm task:deploy 
# this copies the contracts & deployment information to the frontend
pnpm updateContracts 
```

## Run Backend Server

We use a database to store the auction information. You can start the backend server on `http://localhost:3001`:

```bash
# from the base directory (not frontend)
cd backend
pnpm install
pnpm start
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```
