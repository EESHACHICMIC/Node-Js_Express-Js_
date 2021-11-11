// 1.Create Folder named it anything
// 2.create a file in it named bio.txt  and data into it
// 3.add more data into the file at the end of the existing data.
// 4.Read the data without gettng the buffer data at FileSystemDirectoryEntry
// 5.file encoding
// 5.Rename the file name to mybio.txt
// 6. now delete both the file and the folder

const fs = require('fs')
const path = require('path');

// fs.mkdirSync('myfolder');

// fs.writeFileSync('./myfolder/bio.txt', "Hii guys, I am Md Eesha.")

// fs.appendFileSync('./myfolder/bio.txt'," Now i am learning ")

// const data = fs.readFileSync('./myfolder/bio.txt', "utf8");
// console.log(data);

// fs.renameSync('./myfolder/bio.txt', './myfolder/mybio.txt')

// fs.mkdirSync("abc");


// fs.rmdir("./abc", (err) => {

//     if (err) {
//         return console.log("error occurred in deleting directory", err);
//     }

//     console.log("Directory deleted successfully");
// });