// file system

const fs = require("fs");

// //sync method ::

// // creat a new folder:
//fs.mkdirSync("Sync_newFile"); 

// // creating a new file : 
// fs.writeFileSync("Sync_newFile/read.txt", "Welcome to nodeJs file System tutorial");

// // data overriding:
// fs.writeFileSync("Sync_newFile/read.txt", " hellow!! ");

// // data append:
//  fs.appendFileSync("Sync_newFile/read.txt", " Welcome to nodeJs file System tutorial");

// // read data from buf-data to org-data: 
//const buf_data = fs.readFileSync("Sync_newFile/read.txt");
//console.log(buf_data);

// // NodeJs is includes an additional data type called Buffer(not available in broweser's javascript).buffer is mainly used to store binary data.while reading from a file or receiving packets over the network.
//const org_data = buf_data.toString();
//console.log(org_data);

// // read data without getting buffer data:
// const data = fs.readFileSync("Sync_newFile/read.txt",'utf-8');
// console.log(data);


// // to rename a file name: 
//fs.renameSync("Sync_newFile/read.txt","Sync_newFile/read-write.txt");

// // delete file:
//fs.unlinkSync("Sync_newFile/read.txt");

// //delete folder:
//fs.rmdirSync("Sync_newFile");




// // Async methode ::
     // we pass them a function as an argument - a callback-- gets called when that task completes. the callback has an argument that tells you weather the operation completed successfully.


// // creat a new folder:
// var folder = "Async_newfile";
// fs.mkdir(folder , (err) => {
//     console.log(`Your folder name ${folder} is succesfully created`);
//    // console.log(err);
// }); 

// // creating a new file : 
// fs.writeFile("Async_newFile/read.txt", "Welcome to nodeJs async file System tutorial",(err)=>{
//   console.log(`Your file is successfully created`);
//  // console.log(err);
// });

// // data overriding:
// fs.writeFile("Async_newFile/read.txt", " hellow!! ", (err) => {
//      console.log("your Data is succesfully replaces.");
//      //console.log(err);
// });

// // data append:
//  fs.appendFile("Async_newFile/read.txt", " Welcome to nodeJs file System tutorial" ,(err)=>{
//      console.log("Your data is succesfully added");
//      //console.log(err);
//  });

// read data from buf-data to org-data: 
// fs.readFile("Async_newFile/read.txt", (err,data) => {
//      console.log(data);
//      //console.log(err);
// });

// read data without getting buffer data:
// fs.readFile("Async_newFile/read.txt", 'utf-8', (err, data) => {
//      console.log(data);
//      console.log(err);
// });

//// to rename a file name: 
// fs.rename("Async_newFile/read.txt", "Async_newFile/read-write.txt", (err) => {
//      console.log("Your file name is succesfully change...");
//     // console.log(err);
// });

// delete file:
// fs.unlink("Async_newFile/read-write.txt", (err) => {
//      console.log("Your file is succesfully deleated.");
// });

// //delete folder:
// fs.rmdir("Async_newFile",(err)=>{
//      console.log("The folder is succesfully deleated");
// });