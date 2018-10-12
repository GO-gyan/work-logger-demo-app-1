# Practicing graphql

* Example of user mutation
mutation addUser($user: userInput) {
  createUser(user: $user) {
    id
    name
    email
  }
}

Query Variable: 
{
  "user": {
    "name": "Gobinda",
    "email": "test@test.com",
    "password": "password"
  }
}