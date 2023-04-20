function demo(p1,p2) {// A demo for RSA
const publicKeyString = p1;
const privateKeyString = p2;
const plaintext = "Hello, World!"; // plaintext

// encryption
const ciphertext = rsaEncrypt( plaintext, publicKeyString);
console.log("encrypted: " + ciphertext);

// decryption
const decryptedText = rsaDecrypt(ciphertext,privateKeyString);
console.log("decrypted: " + decryptedText);}