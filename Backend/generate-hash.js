const bcrypt = require('bcrypt');

const passwordToHash = '123456'; // 

async function generateHash() {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passwordToHash, saltRounds);
    console.log(`Contraseña de texto plano: ${passwordToHash}`);
    console.log(`Contraseña hasheada: ${hashedPassword}`);
}

generateHash();