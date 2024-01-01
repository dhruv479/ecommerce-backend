
# Ecommerce Backend

This repository contains the Node.js application code for Ecommerce Backend.

## Setup
To setup the code on local, please follow the steps below:
- Install all the package dependencies using command  `npm install`
- Copy `.env.example` file to `.env` and replace the config values. Please reach out in Private for sensitive secrets.

## Running on Local
After completing the setup, we need to make sure all the keys in `.env` file are updated.
Then run command `npm run dev` to run the application in local mode.

## Running in Production
We don't have secrets file in production, so provide these secret variables to the production environment and start the application with `npm start` command.


# APIs
There are a total of 4 APIs in this application. [Postman Collection](https://www.postman.com/dhruv479/workspace/public-collections/collection/8526587-0f3e5dee-1e2c-41d9-9fd4-719a9acc61a3?action=share&creator=8526587)

PS: Make sure to update the url!

## Auth APIs:
There are 2 Auth APIs:
- `/auth/register` To register a new User on the platform.
- `/auth/login` To allow login in the platform for an existing User.

## Product APIs:
Rather than implementing the default `/products` API, I rather implemented an optimised approach to it, to fetch the product categories first and then fetch the paginated products in that category. It is possible with the following APIs:
- `/products/categories` Fetch all the product categories from dummyjson
- `/products/category/:category` Fetch all the product with `:category` category from dummyjson.

