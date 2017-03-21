var bcrypt = require('bcryptjs');
//bcryptjs is temporary for now while downloading Xcode, in the future will just be bcrypt
const saltRounds = 12;
// const means that value can never be changed anywhere else
//the higher the number, the harder it will be to crack a password. Specifies number of rounds through hashing/salting function. Default is 10.
//Rounds aren't 12, its 2 to the 12th power rounds. Same as 10, 2 to the 10th power rounds.'
//However, higher numbers also take longer

exports.encryptPassword = function(pw) {
    return new Promise(function(resolve, reject) {
       bcrypt.hash(pw, saltRounds, function(err, hash) {
           if (err) {
               reject(err);
           } else {
               resolve(hash);
           }
       }); 
    });
}

exports.checkPassword = function(pw, hash) {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(pw, hash, function(err, passwordMatches) {
            if (err) {
                reject(err);
            } else {
                resolve(passwordMatches);
            }
        });
    });
}