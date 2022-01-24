const saltRounds = 10;
var CryptoJS = require("crypto-js");
var bcrypt = require('bcrypt');
const secretKey = 'dssdj23923ddb2cNYBCIWV@8223-sd[ddfb'

module.exports = {

    encryptHelper: {
        /**
         * @name encrypt
         * @description Criptografa uma string
         * @param {String} stringToHash - Texto que será criptografado
         * @param {String} method - Metodo de criptogragia. Se nao passado, será usado Bcrypt por padrao
         * @returns {String} Hash criada
         */
        encrypt: async function(stringToHash = '', method = 'bcrypt') {
            return new Promise((resolve, reject) => {
                if (method === 'bcrypt') {
                    bcrypt.genSalt(saltRounds, function(err, salt) {
                        if (!err) {
                            bcrypt.hash(stringToHash.toString(), salt, function(err, hash) {
                                if (!err) {
                                    resolve(hash)
                                } else {
                                    throw new Error('Falha ao gerar hash: ' + err)
                                }
                            });
                        } else {
                            throw new Error('Falha ao gerar hash: ' + err)
                        }
                    });
                } else if (method === 'cryptojs') {
                    // Encrypt
                    var ciphertext = CryptoJS.AES.encrypt(stringToHash, secretKey).toString();
                    resolve(ciphertext)
                    // Decrypt

                } else {
                    throw Error('Method to encrypt not declared!')
                }
            })
        },
        /**
         * @name verify
         * @description Verifica uma hash criada apartir de Bcrypt ou CryptoJS
         * @param {String} originalString - Texto original
         * @param {String} encryptedString - Hash a ser decryptografada
         * @param {String} method - Metodo de criptografia. Se nao passado, será usado Bcrypt por padrao
         * @returns {Boolean} Retorna true se a hash for válida e false se inválida
         */
        verify: function(originalString = '', encryptedString = '', method = 'bcrypt') {
            return new Promise((resolve, reject) => {
                if (method == 'bcrypt') {
                    bcrypt.compare(originalString, encryptedString, function(err, result) {
                        if (!err) {
                            resolve(result)
                        } else {
                            throw Error('Falha ao decryptar')
                        }
                    });
                } else if (method == 'cryptojs') {
                    var bytes = CryptoJS.AES.decrypt(encryptedString, secretKey);
                    var textDecrypted = bytes.toString(CryptoJS.enc.Utf8);
                    originalString == textDecrypted ? resolve(true) : resolve(false)
                } else {
                    throw Error('Method to decrypt not declared!')
                }
            });
        }
    }
}