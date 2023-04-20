const forge = require('node-forge'); // 导入 Forge 库

// RSA 加密函数
function encryptRSA(publicKeyString, plaintext) {
  const publicKeyDerBytes = forge.util.decode64(publicKeyString);
  const publicKeyDer = forge.asn1.fromDer(forge.util.createBuffer(publicKeyDerBytes));
  const publicKey = forge.pki.publicKeyFromAsn1(publicKeyDer);
  const encrypted = publicKey.encrypt(plaintext);
  return forge.util.encode64(encrypted.getBytes());
}

// RSA 解密函数
function decryptRSA(privateKeyString, ciphertext) {
  const privateKeyDerBytes = forge.util.decode64(privateKeyString);
  const privateKeyDer = forge.asn1.fromDer(forge.util.createBuffer(privateKeyDerBytes));
  const privateKey = forge.pki.privateKeyFromAsn1(privateKeyDer);
  const ciphertextBytes = forge.util.decode64(ciphertext);
  const ciphertextBuffer = forge.util.createBuffer(ciphertextBytes);
  const decrypted = privateKey.decrypt(ciphertextBuffer);
  return decrypted.toString();
}

// 示例用法
const publicKeyString = "公钥"; // 使用生成的公钥字符串
const privateKeyString = "私钥"; // 使用生成的私钥字符串
const plaintext = "Hello, World!"; // 明文

// 加密
const ciphertext = encryptRSA(publicKeyString, plaintext);
console.log("加密后的密文: " + ciphertext);

// 解密
const decryptedText = decryptRSA(privateKeyString, ciphertext);
console.log("解密后的明文: " + decryptedText);