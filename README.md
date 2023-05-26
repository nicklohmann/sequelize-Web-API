# Sequelize Movie API
This API allows you to perform CRUD operations on a database of movies!

## Endpoints
The following section provides information on the available endpoints for this API.

### Create a Movie

**Method**: ```POST```

**Endpoint**: ```/api/movies```

**Description**: This endpoint creates a new movie with the provided information in the request body.

Request Body:
```
{
  "title": "string",
  "year": integer,
  "rating": integer
}
```

Response:
```
{
  "id": integer,
  "title": "string",
  "year": integer,
  "rating": integer,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Get All Movies

**Method**: GET

**Endpoint**: ```/api/movies```

**Description**: This endpoint retrieves all the movies stored in the database.

Response:
```
[
  {
    "id": integer,
    "title": "string",
    "year": integer,
    "rating": integer,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
]
```

### Update a Movie

**Method**: ```PUT```

**Endpoint**: ```/api/movies/:id```

**Description**: This endpoint updates the movie with the specified id using the information in the request body.

Request Body:
```
{
  "title": "string",
  "year": integer,
  "rating": integer
}
```

Response:
```
{
  "id": integer,
  "title": "string",
  "year": integer,
  "rating": integer,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Delete a Movie

**Method**: ```DELETE```

**Endpoint**: ```/api/movies/:id```

**Description**: This endpoint deletes the movie with the specified id from the database.

Response:
```
{
  "id": integer,
  "title": "string",
  "year": integer,
  "rating": integer,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```