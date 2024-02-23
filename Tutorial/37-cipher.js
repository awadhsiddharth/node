// importing crypto module
const crypto = require('crypto');
// a decipher obj is created using crypto.createDecipher methodfrom 
// crypto module, 1st argument specifies 'aes192 algo'
// 2nd specifies password or key used for encryption
const decipher = crypto.createDecipher('aes192', 'a password');
// it initialises a variable named 'encrypted' with 
// ciphertext that needs to be decrypted
var encrypted = '4ce3b761d58398aed30d5af898a0656a3174d9c7d7502e781e83cf6b9fb836d5';
// This line decrypts the encrypted data stored in the encrypted variable using the 
// update() method of the decipher object
// 1st arg-encrypted data, 2nd arg-input encoding,
// 3rd - o/p encoding
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
// This line finalizes the decryption process using the
// final() method of the decipher object. It takes the
// output encoding as an argument ('utf8' in this case)
// and returns the remaining decrypted data. This decrypted
// data is then concatenated to the decrypted variable
decrypted += decipher.final('utf8');
// prints decrypted variable
console.log(decrypted);
