const bcrypt = require('bcrypt');
const password = '123456'; 
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(hash);
});