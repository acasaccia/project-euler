// Each character on a computer is assigned a unique code and the preferred standard is ASCII (American Standard Code
// for Information Interchange). For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.
// A modern encryption method is to take a text file, convert the bytes to ASCII, then XOR each byte with a given value,
// taken from a secret key. The advantage with the XOR function is that using the same encryption key on the cipher
// text, restores the plain text; for example, 65 XOR 42 = 107, then 107 XOR 42 = 65.
// For unbreakable encryption, the key is the same length as the plain text message, and the key is made up of random
// bytes. The user would keep the encrypted message and the encryption key in different locations, and without both
// "halves", it is impossible to decrypt the message.
// Unfortunately, this method is impractical for most users, so the modified method is to use a password as a key. If
// the password is shorter than the message, which is likely, the key is repeated cyclically throughout the message.
// The balance for this method is using a sufficiently long password key for security, but short enough to be memorable.
// Your task has been made easy, as the encryption key consists of three lower case characters. Using cipher.txt (right
// click and 'Save Link/Target As...'), a file containing the encrypted ASCII codes, and the knowledge that the plain
// text must contain common English words, decrypt the message and find the sum of the ASCII values in the original
// text.

var encrypted = require("fs").readFileSync("./problems/input/p059_cipher.txt", "utf-8").split(",").map(function(v){
    return parseInt(v);
});

var dictionary = require("fs").readFileSync("./problems/input/dictionary.txt", "utf-8");
var result = false;
for (var i=97; i<=122; i++) {
    for (var j=97; j<=122; j++) {
        for (var k=97; k<=122; k++) {
            var decrypted = [];
            var password = [i, j, k];
            for (var c=0; c<encrypted.length; c++) {
                decrypted.push(String.fromCharCode(password[c%3]^encrypted[c]));
            }
            var words = decrypted.join("").split(" ");
            var found = 0;
            words.forEach(function(word){
                if (dictionary.indexOf(word) > 0) {
                    found++;
                }
                if (found >= 50) {
                    result = true;
                }
            });
            if (result) {
                console.log(String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + " => " + decrypted.join(""));
                break;
            }
        }
        if (result) {
            break;
        }
    }
    if (result) {
        break;
    }
}

var sum = decrypted.map(function(v){
    return v.charCodeAt(0);
}).reduce(function(p,c){
   return p+c;
});

console.log(sum);