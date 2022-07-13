// task
//   1. convert to JSON 
//   2. Dusre file me add krdena
//   3. read file
//   4. again convert back to Object
//   5. consoleme print korna

const fs = require('fs');

const stuData = {
    Name: 'Sastik',
    Roll: 'cse/20/055',
    Depertment: 'CSE',
    Sem: '5th'
}

//   1. convert json
const jsonData = JSON.stringify(stuData);
// console.log(jsonData);

//  2. creating file and add this data
fs.writeFile('newFile.json', jsonData, (err) => {
    console.log('your file is succesfully creat and updataed');
})

// 3. read the file
fs.readFile('newFile.json', 'utf-8', (err, data) => {
    console.log(data);

    // 4.convert orginal data and print
    const orgData = JSON.parse(data)
    console.log(orgData);
})

