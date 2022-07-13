const path = require('path');

const dirPath = path.dirname('E:/Backend using mern stack/NodeJs_Tutorial/path_module/src/app.js');
const extName = path.extname('E:/Backend using mern stack/NodeJs_Tutorial/path_module/src/app.js');
const baseName = path.basename('E:/Backend using mern stack/NodeJs_Tutorial/path_module/src/app.js');
const fileDetails = path.parse('E:/Backend using mern stack/NodeJs_Tutorial/path_module/src/app.js')


console.log(`your curent dirName is :: ${dirPath}`);
console.log(`your curent file extName is :: ${extName}`);
console.log(`your curent file baseName is :: ${baseName}`);
console.log(path.parse('E:/Backend using mern stack/NodeJs_Tutorial/path_module/src/app.js'));

console.log(`Your file name using obj is :: ${fileDetails.name}`);