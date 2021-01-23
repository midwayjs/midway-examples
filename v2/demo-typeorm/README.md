# Midway-TypeORM-Example

## QuickStart

```bash
npm i
npm run dev
open http://localhost:7001/
```

### Router

- GET `/api/users`: Query All Users
- GET `/api/user:id` Query User By ID
- POST `/api/create`: Create User
- POST `/api/update`: Update User
- POST `/api/delete`: Delete User

### Test

```bash
npm run test
```

This demo use SQLite as databse, so you will need to remove `db.sqlite` manually before running test cases to avoid conflict.