const password = process.argv[2];
const filePath = process.argv[3];

// Перевірка наявності необхідних параметрів
if (!password || !filePath) {
  console.log('Usage: node index.js [password] [file path]');
  process.exit(1);
}

hashAndSavePassword(password, filePath);
const password = process.argv[2];
const filePath = process.argv[3];

// Перевірка наявності необхідних параметрів
if (!password || !filePath) {
  console.log('Usage: node index.js [password] [file path]');
  process.exit(1);
}

if (comparePasswordToHashedValue(password, filePath)) {
  console.log('Password is correct!');
} else {
  console.log('Password is incorrect!');
}