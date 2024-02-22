const crypto = require('crypto');
const key = 'a password'; // This should be a 24-character string for aes-192-ccm
const iv = crypto.randomBytes(12); // 12-byte random IV for AES-192-CCM

const cipher = crypto.createCipheriv('aes-192-ccm', key, iv);
let encrypted = cipher.update("Hello Coder", 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);
