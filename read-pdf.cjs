const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('C:/Users/Rahul/Desktop/gh/client/public/resume.pdf');
pdf(dataBuffer).then(function(data) {
  console.log(data.text);
}).catch(console.error);
