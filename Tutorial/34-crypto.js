// importing the crypto module
const crypto = require('crypto');  
// defining a secret key and storing it into a variable
const secret = 'abcdefg';  
// HMAC- hash-based message authentication code
// the method is used to create an HMAC obj using shs512 algo,
// it takes 2 arguments, ie algo type(sha256/sha512) and a secret key
// .update method is used to update the hmac data with given string in the method
// .digest method is called to generate a hash value, it takes one argu which is types of encoding
const hash = crypto.createHmac('sha512', secret)  
                   .update('Welcome to NodeJS Coding Environment')  
                   .digest('hex');  
console.log(hash);  
