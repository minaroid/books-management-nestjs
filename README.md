# Books Management NestJS

This repository contains a Books Management application built with NestJS and TypeORM.

## Features

- Book CRUD operations
- Authentication and authorization

## Requirements

- Node.js and npm/yarn installed
- PostgreSQL (or any other supported database) installed and running

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/minaroid/books-management-nestjs.git

2. Create `.env` file using `.env.example`

3. Install dependencies:

   ```bash
   npm install

4. Run database container:

   ```bash
   npm run db:dev:up

5. Start the server:

   ```bash
   npm run start:dev

6. Access the application at http://localhost:3000.  


 ### Endpoints

-  /api-docs
-  /api-docs-json


 ### Note 

 All books POST/PUT apis needs admin user, to create it you need to switch your user role from the db and login again to get the admin access token.

