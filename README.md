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

## Example of adding client
mutation addClient($userId: ID, $client: clientInput) {
  createClient(userId: $userId, client: $client) {
    id
    name
    email
  }
}

* Query Variable: 
{
  "userId": "5bc0e6a3c95eb07fd478221a",
  "client": {
    "companyName": "Unplugged India",
    "email": "rohit@unpluggedindia.com",
    "name": "Rohit",
    "phone": "080-2743512",
    "language": "ENG",
    "currency": "INR",
    "notes": "They need this project within a week"
  }
}

## Example of adding address
mutation addAddress($clientId: ID, $address: addressInput) {
  createAddress(clientId: $clientId, address: $address) {
    id
    city
  }
}

* Query Variable: 
{
  "clientId": "5bcc74b3f335b35e4cfa4d61",
  "address": {
    "street1": "Church Street",
    "street2": "MG Road",
    "city": "Bengaluru",
    "state": "Karnataka",
    "postal": "560066",
    "country": "India"
  }
}

## Example of adding assignment
mutation addAssignment($clientId: ID, $assignment: assignmentInput) {
  createAssignment(clientId: $clientId, assignment: $assignment) {
    id
    title
    description
  }
}

* Query variable:
{
  "clientId": "5bcc74b3f335b35e4cfa4d61",
  "assignment": {
    "title": "MEAN stack consultant",
    "description": "To help in MEAN stack project",
    "charges": 1500.00,
    "chargeType": "PERHOUR"
  }
}