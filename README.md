## Prerequisites

```
git clone https://github.com/rvalessandro/tokocrypto-assignment.git
```

Modify /config/config.json and /config/config.env for database connection

## Installing

After modifying config, open terminal and copy the scripts below

```
cd tokocrypto-assignment
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

## Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## Authors <a name = "authors"></a>

- [@rvalessandro](https://github.com/rvalessandro)
