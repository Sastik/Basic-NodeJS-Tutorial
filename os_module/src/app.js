const os = require('os');

const arch = os.arch();
const totalMem = os.totalmem();
const freeMem = os.freemem();
const hostName = os.hostname();
const release = os.release();
const tempDir = os.tmpdir();
const homeDir = os.homedir();
const osType = os.type();



console.log(`Your divices's release at :: ${release}`);
console.log(`Your divices's architecture is :: ${arch}`);
console.log(`Your divices's operating System is :: ${osType}`);
console.log(`Your divices's host name is :: ${hostName}`);
console.log(`Your divices's totalMemory is :: ${totalMem / 1024 / 1024 / 1024}`);  
//byte to Gigabyte or GB
console.log(`Your divices's freeMemory is :: ${freeMem / 1024 / 1024 / 1024}`);  
//for open task manager :: ctrl + shift + esc
console.log(`Your divices's home directore's is :: ${homeDir}`);
console.log(`Your divices's temp file directore's is :: ${tempDir}`);
console.log(os.userInfo());
