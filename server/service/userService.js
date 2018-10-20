import mongoose from 'mongoose';

const User = mongoose.model('user');

function findUser(id) {
  return User.findById(id)
    .then(user => {
      return new Promise((resolve, reject) => {
        if(!user)
          reject('No user found!'); 
        resolve(user);
      })
    })
}

function addUser({ name, email, password, req }) {
    const user = new User({ name, email, password });
    if (!email || !password) { throw new Error('You must provide an email and password.'); }
  
    return User.findOne({ email })
      .then(existingUser => {
        if (existingUser) { throw new Error('Email in use'); }
        return user.save();
      })
      .then(user => {
        return new Promise((resolve, reject) => {
          /*req.logIn(user, (err) => {
            if (err) { reject(err); }
            resolve(user);
          });*/
          resolve(user);
        });
      });
  }

function addClient(client) {
  if (!client) { throw new Error('Can not add client without any values'); }
  
  return User.addClient(client)
    .then(client => {
      return new Promise((resolve, reject) => {
          /*req.logIn(user, (err) => {
            if (err) { reject(err); }
            resolve(user);
          });*/
        resolve(client);
      });
    });
}

function getClients(id) {
  return User.findClients(id)
    .then(client => {
      return new Promise((resolve, reject) => {
        if(!client)
          reject('No client found!'); 
        resolve(client);
      })
    })
}

  export default {
      addUser,
      findUser,
      addClient,
      getClients
  }