const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Every user has an email and password.  The password is not stored as
// plain text - see the authentication helpers below.
const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    clients: [{
      type: Schema.Types.ObjectId,
      ref: 'client'
    }]
},
{
  usePushEach: true
});

// The user's password is never saved in plain text.  Prior to saving the
// user model, we 'salt' and 'hash' the users password.  This is a one way
// procedure that modifies the password - the plain text password cannot be
// derived from the salted + hashed version. See 'comparePassword' to understand
// how this is used.
UserSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

// We need to compare the plain text password (submitted whenever logging in)
// with the salted + hashed version that is sitting in the database.
// 'bcrypt.compare' takes the plain text password and hashes it, then compares
// that hashed password to the one stored in the DB.  Remember that hashing is
// a one way process - the passwords are never compared in plain text form.
UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

UserSchema.statics.addClient = function(id, clientDetail) {
  const Client = mongoose.model('client');

  return this.findById(id)
    .then(user => {
      const client = new Client(
        { 
          companyName: clientDetail.companyName, 
          name: clientDetail.name,
          email: clientDetail.email,
          phone: clientDetail.phone,
          language: clientDetail.language,
          currency: clientDetail.currency,
          notes: clientDetail.notes,
          user 
        }
      );
      user.clients.push(client);
      return Promise.all([client.save(), user.save()])
        .then(([client, user]) => client);
    });
};

UserSchema.statics.findClients = function(id) {
  return this.findById(id)
    .populate('clients')
    .then(user => user.clients);
}

mongoose.model('user', UserSchema);