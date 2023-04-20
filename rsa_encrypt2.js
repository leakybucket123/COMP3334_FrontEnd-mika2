function rsaEncrypt2(plaintext, publicKey) {
    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setPublicKey(publicKey);
    const maxEncryptLength = Math.floor(jsEncrypt.getKey().n.bitLength() / 8) - 11;
    console.log("maxEncryptLength: "+maxEncryptLength);
    const plaintextLength = plaintext.length;
    const midpoint = Math.floor(plaintextLength / 2);


    const plaintext1 = plaintext.slice(0, midpoint);
    const plaintext2 = plaintext.slice(midpoint);

    const encrypted1 = jsEncrypt.encrypt(plaintext1);
    const encrypted2 = jsEncrypt.encrypt(plaintext2);
  
    return [encrypted1,encrypted2];
}