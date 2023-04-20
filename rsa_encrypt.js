
function rsaEncrypt(plaintext, publicKey) {
        const jsEncrypt = new JSEncrypt();
        jsEncrypt.setPublicKey(publicKey);
        const maxEncryptLength = Math.floor(jsEncrypt.getKey().n.bitLength() / 8) - 11;
        console.log("maxEncryptLength: "+maxEncryptLength);
        const encryptedAesKey = jsEncrypt.encrypt(plaintext);
        return encryptedAesKey;
    }
    