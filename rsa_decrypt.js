function rsaDecrypt(encryptedAesKey, privateKey) {
    const jsDecrypt = new JSEncrypt();
    jsDecrypt.setPrivateKey(privateKey);
    const decryptedAesKey = jsDecrypt.decrypt(encryptedAesKey);
    return decryptedAesKey;
}

  
