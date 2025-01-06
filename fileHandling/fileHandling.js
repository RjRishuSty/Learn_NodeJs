// TODO: what is fs ?
// TODO: The fs module in Node.js is a built-in module that provides an API for interacting with the file system. It allows developers to perform various file-related operations, such as creating, reading, writing, updating, deleting, and renaming files and directories.

// TODO: Key Features of the fs Module:
// TODO: File Handling:
// Create, read, write, and delete files.
// TODO: Directory Management:
// Create, delete, and read directories.
// TODO: Synchronous and Asynchronous Operations:
// Supports both blocking (synchronous) and non-blocking (asynchronous) operations.
// TODO: Stream Support:
// Read and write files using streams for handling large files efficiently.

const fs = require("fs"); //This is inbuild module.

// TODO: ------------------------------ Create a file ------------------------

// TODO: what is writeFile ya writeFileSync = > create file keyword.

//TODO: Sync.....
fs.writeFileSync("./test.txt", "Hello Word"); //(1) is Path  and (2) in test file ma kya ho ga.

// TODO: Async......
// fs.writeFile('./test.txt', "Hello world Async", (error)=>{})  //(1) is Path  and (2) in test file ma kya ho ga.  (3) is if any error

// TODO: -------------------------------- Read the file -----------------------------

// TODO: Sync...... its return response.
// const result = fs.readFileSync('./contact.txt',"utf-8");  // (1) is file path and (2) file encoding is(utf-8)
// console.log(result);

// TODO: Async..... not return.
// (1) is file path and (2) file encoding is(utf-8) and (3) callback function if error so error and if result then result.

// fs.readFile('./contact.txt','utf-8',(error,result)=>{
//     if(error){
//         console.log('Error',error);
//     }else{
//         console.log("Result", result);
//     }
// });

// TODO:---------------------------------------- appendFileSync -------------------------------------

// TODO: appendFileSync...... means enter new data

// fs.appendFileSync("./test.txt", `Hey There\n`); //(1) is Path  and (2) in test file ma kya new data ho ga.  (\n means new line)

// TODO: ------------------------------------ cpSync--------------------------------------------------

// TODO: cpSync......... means copy the file

// fs.cpSync('./test.txt','copy.txt')  //(1) is kon so file ko copy kara  and (2) copy kya hua file ka name kay rakha

// TODO:------------------------------------- unlinkSync --------------------------------------------

// TODO: unlinkSync....... means delete 
// fs.unlinkSync('./copy.txt')  //(1) kon sa file ko delete kara.

// TODO: ------------------------------------ statSync ---------------------------------------------------

// TODO: statSync.......... means file full information

// fs.statSync('./test.txt'.isFile) // isFile is kya ya file ha.
console.log(fs.statSync('./test.txt'));
