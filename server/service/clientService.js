import mongoose from 'mongoose';

const Client = mongoose.model('client');

function findClient(id) {
    return Client.findById(id)
      .then(client => {
        return new Promise((resolve, reject) => {
          if(!client)
            reject('No client found!'); 
          resolve(client);
        })
      })
}

function addAddress(clientId, address) {
  if (!clientId) { throw new Error('Can not add address without client id'); }
  
  return Client.addAddress(clientId, address)
    .then(address => {
      return new Promise((resolve, reject) => {
          /*req.logIn(user, (err) => {
            if (err) { reject(err); }
            resolve(user);
          });*/
        resolve(address);
      });
    });
}

function addAssignment(clientId, assignment) {
  if (!clientId) { throw new Error('Can not add assignment without client id'); }
  
  return Client.addAssignment(clientId, assignment)
    .then(assignment => {
      return new Promise((resolve, reject) => {
          /*req.logIn(user, (err) => {
            if (err) { reject(err); }
            resolve(user);
          });*/
        resolve(assignment);
      });
    });
}

function findAddresses(id) {
  return Client.findAddresses(id)
    .then(address => {
      return new Promise((resolve, reject) => {
        if(!address)
          reject('No address found!'); 
        resolve(address);
      })
    })
}

function findAssignments(id) {
  return Client.findAssignments(id)
    .then(assignment => {
      console.log(assignment);
      return new Promise((resolve, reject) => {
        if(!assignment)
          reject('No assignment found!'); 
        resolve(assignment);
      })
    })
}

export default {
    findClient,
    findAddresses,
    addAddress,
    addAssignment,
    findAssignments
}