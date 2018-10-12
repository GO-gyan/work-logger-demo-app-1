import mongoose from 'mongoose';

const User = mongoose.model('user');

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

  export default {
      addUser
  }