# prismagram

Instragram clone with Express + Prisma + React and React Native

## Install

```bash
npm install
npm install -g nodemon prisma
prisma login -k #YOUR_KEY_HERE
vi ./prisma.yml # Create File 'prisma.yml'
```

- *./prisma.yml*

    ```yml
    endpoint: YOUR HTTP ENDPOINT
    datamodel: datamodel.prisma

    generate:
      - generator: javascript-client
        output: ./generated/prisma-client/
    ```

```bash
vi ./src/.env
```

- *./src/.env*

    ```json
    PORT=YOUR_PORT_NUMBER
    SENDGRID_USERNAME="USER_NAME"
    SENGRID_PASSWORD="USER_PASSWORD"
    JWT_SECRET = "RANDOM_KEYGEN"
    ```

```bash
npm prisma
npm dev
```

## TOKEN

```graphql
{"Authorization": "Bearer USER_TOKEN"}
```

## LINK

- [prisma](https://app.prisma.io/)
- [sendgrid](https://app.sendgrid.com/guide)
- [randomKeygen](https://randomkeygen.com/)
- [randomwordgenerator](https://wordcounter.net/random-word-generator)

## User Stories

- [x] Create account
- [x] Request Secret
- [x] Confirm Secret (Login)
- [x] Like / Unlike a photo
- [x] Comment on a photo
- [x] Search by user
- [x] Search by location
- [ ] See user profile
- [ ] Follow/ Unfollow User
- [ ] See the full photo
- [ ] Edit my profile
- [ ] Upload a photo
- [ ] Edit the photo (Delete)
- [ ] See the feed
