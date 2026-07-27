// path module is used for working with file and directory paths. It provides a number of useful methods for manipulating and resolving paths, as well as for working with file system paths in a platform-independent way.

import path from "node:path";

// process.cwd: // returns the current working directory of the Node.js process

const projectRoot = process.cwd();
console.log("Current working directory:", projectRoot);

// path.join: // joins all given path segments together and normalizes the resulting path
// it doesn't checks the path exists or not
// it doesn't create any directories or files, it just returns a string representing the path

const userId = "42";
const originalName = "profile.png";
const uploadPath = path.join(projectRoot, "uploads", "users", userId, originalName);
console.log("Upload path:", uploadPath);

const fileName = path.basename(uploadPath); // returns the last portion of a path, similar to the Unix basename command
console.log("File name:", fileName);

const fileExtension = path.extname(uploadPath); // returns the extension of the file
console.log("File extension:", fileExtension);

const parentDir = path.dirname(uploadPath); // returns the directory name of a path
console.log("Parent directory:", parentDir);