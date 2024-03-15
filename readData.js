const fs = require('fs');

// Reading from a file
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

// Writing to a file
const contentToWrite = 'This is some content to write to the file.';
fs.appendFile('data.txt', contentToWrite, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File write successful.');
});
