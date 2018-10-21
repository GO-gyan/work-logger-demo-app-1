import mongoose from 'mongoose';

const Address = mongoose.model('address');

function findAddress(id) {
    return Address.findById(id)
      .then(address => {
        return new Promise((resolve, reject) => {
          if(!address)
            reject('No address found!'); 
          resolve(address);
        })
      })
}


export default {
    findAddress
}