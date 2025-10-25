# Authentication

### 1. Register User
**Endpoint:** POST /auth/register  
**Headers:** Content-Type: application/json  
**Body:** {"username": "sovit1", "password": "sovit"}

**cURL Example:**
curl -X POST http://localhost:5003/api/auth/register \
-H "Content-Type: application/json" \
-d '{"username":"sovit1","password":"sovit"}'

### 2. Login User
**Endpoint:** POST /auth/login  
**Headers:** Content-Type: application/json  
**Body:** {"username": "sovit1", "password": "sovit"}

**cURL Example:**
curl -X POST http://localhost:5003/api/auth/login \
-H "Content-Type: application/json" \
-d '{"username":"sovit1","password":"sovit"}'

## News APIs
All news endpoints require Authorization via Bearer Token.

### 1. Top Headlines
**Endpoint:** GET /news/top-headlines  
**Headers:** Authorization: Bearer <JWT_TOKEN>, Content-Type: application/json  

**cURL Example:**
curl --location --request GET 'http://localhost:5003/api/news/top-headlines' \
--header 'Authorization: Bearer <JWT_TOKEN>' \
--header 'Content-Type: application/json' | jq

### 2. All News
**Endpoint:** GET /news  
**Headers:** Authorization: Bearer <JWT_TOKEN>, Content-Type: application/json  

**cURL Example:**
curl --location --request GET 'http://localhost:5003/api/news' \
--header 'Authorization: Bearer <JWT_TOKEN>' \
--header 'Content-Type: application/json' | jq
