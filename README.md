# Development
Steps to build the app in development


1. Start the database
```
docker compose up -d
```

2. Create a copy of the .env.template and rename it to .env
3. Replace the environment variables
4. Run the command npm install to rebuild the node modules
5. Run the command npm run dev to run the application in development
6. Run these Prisma commands
```
npx prisma migrate dev
npx prisma generate
```
7. Excute the SEED para [create a local db](localhost:3000/api/seed)


## Nota: User by default
__usuario:__  test1@google.com
__password:__ 123456


# Prisma commnads
```
npx prisma init
npx prisma migrate dev
npx prisma generate

```



# Prod


# Stage
