
**Register any user API**
curl -X POST http://localhost:5003/api/auth/register -H "Content-Type: application/json" -d '{"username":"sovit1","password":"sovit"}'

**Login with Username and passwrd API:**
curl -X POST http://localhost:5003/api/auth/login -H "Content-Type: application/json" -d '{"username":"sovit1","password":"sovit"}'


**Sample Token:**
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvdml0MSIsImlhdCI6MTc2MTM4NDQ2MiwiZXhwIjoxNzYxMzg4MDYyfQ.V9aWUZ7tlTBY0I-Ujq11SoEBVr3fHdruqV3KQYKaHCY


**Top Headline API:**
curl --location --request GET 'http://localhost:5003/api/news/top-headlines' --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvdml0MSIsImlhdCI6MTc2MTM4NDQ2MiwiZXhwIjoxNzYxMzg4MDYyfQ.V9aWUZ7tlTBY0I-Ujq11SoEBVr3fHdruqV3KQYKaHCY' --header 'Content-Type: application/json' | jq


**All new API:**
curl --location --request GET 'http://localhost:5003/api/news' --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvdml0MSIsImlhdCI6MTc2MTM4NDQ2MiwiZXhwIjoxNzYxMzg4MDYyfQ.V9aWUZ7tlTBY0I-Ujq11SoEBVr3fHdruqV3KQYKaHCY' --header 'Content-Type: application/json' | jq



