import mongoose from 'mongoose';

const Assignment = mongoose.model('assignment');

function findAssignment(id) {
    return Assignment.findById(id)
      .then(assignment => {
        return new Promise((resolve, reject) => {
          if(!assignment)
            reject('No assignment found!'); 
          resolve(assignment);
        })
      })
}


export default {
    findAssignment
}