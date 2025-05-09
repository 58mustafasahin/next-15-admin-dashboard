# Build Dashboard App By Next.js 15, Drizzle ORM and Shadcn

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Tech           | Next.js 15, React 19, PostgreSQL, Drizzle Orm, Shadcn, Tailwind |
| UI             | Tailwind, Shadcn, recharts                                      |
| Database       | PostgreSQL, Drizzle Orm                                         |
| Deployment     | Github, Vercel                                                  |
| Authentication | Auth.js, bcryptjs                                               |
| Others         | zod , next-theme, ...                                           |

[![next-15-admin-dashboard](/public/next-15-admin-dashboard.png)](https://58mustafasahin-next-15-admin-dashboard.vercel.app)

## View Demo Website

https://58mustafasahin-next-15-admin-dashboard.vercel.app

## What you will learn

- creating admin dashboard web app by next.js 15 and react 19
- designing header, footer, sidebar, menu and search box by shadcn and tailwind
- enable partial pre-rendering to improve website performance
- create database models by drizzle orm and postgres database to handle invoices, customers and users.
- handling form inputs by useActionState and Zod data validator
- updating data by server actions without using any api
- rendering beautiful charts by recharts
- handling authentication and authorization by next-auth
- and toggling dark and light theme by next-theme
- at the end you'll learn how to deploy admin dashboard on vercel.

## Run Locally

1. Clone repo

   ```shell
    $ git clone git@github.com:58mustafasahin/next-15-admin-dashboard.git
    $ cd next-15-admin-dashboard
   ```

2. Create .env.local File

- duplicate .env.example and rename it to .env.local

3. Setup PostgreSQL

   - Create database at https://vercel.com/docs/storage/vercel-postgres
   - In .env.local file update POSTGRES_URL to db url

4. Install and Run

   ```shell
     npm install
     npm run dev
   ```

5. Seed Data

   ```shell
     npx tsx ./db/seed
   ```

6. Admin Login

   - Open http://localhost:3000
   - Click Login button
   - Enter admin email "user@nextmail.com" and password "123456" and click Sign In

## Lessons

(You can see from the commits)

1. create home page
2. create login page
3. create dashboard page
4. connect to database by drizzle orm
5. load stats boxes data from database
6. display revenue chart
7. create latest invoices table
8. authenticate user from database
9. list or delete invoices
10. create or update invoices
11. list customers
12. enable partial pre-rendering
13. deploy app on vercel
