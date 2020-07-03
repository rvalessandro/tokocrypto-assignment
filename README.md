## Prerequisites

```
git clone https://github.com/rvalessandro/tokocrypto-assignment.git
```

Modify /config/config.json and /config/config.env for database connection

## Installing

After modifying config, open terminal and copy the scripts below

```
npm install
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

## Usage <a name="usage"></a>

#### Task One (src: \_problems/one-fibonacci.js)

```
npm run one
```

#### Task One (src: \_problems/two-arrayShifting.js)

```
npm run two
```

#### Task Three

```
npm run dev
```

## Endpoints

https://documenter.getpostman.com/view/10059648/T17FAoHH?version=latest

## Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## Authors <a name = "authors"></a>

- [@rvalessandro](https://github.com/rvalessandro)

## Side note
On production we would use best practices such as:
1. OAuth 2.0 for authentication
2. Pagination
3. Adding payments table that stores payment information that relates to a specific transaction (Payment method, card number, etc.)
