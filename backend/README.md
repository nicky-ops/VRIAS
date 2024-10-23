# API Endpoints
## Authentication
1. `GET /api/user/` - list all users
2. `GET /api/user/<id>/` - retrive a specific user by id
3. `PATCH /api/user/user_pk/` - modify a user
body:
```
    {
        "username": "John Doe"
    }
```

4. `POST /api/auth/register` - register a new user
body:
```
    {
    "username": "mouse21", "first_name": "Mickey", "last_name": "Mouse", "password": "12345678", "email": "mouse@yopmail.com"
    }
```