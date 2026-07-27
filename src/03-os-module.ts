// os module is used for interacting with the operating system. It provides a number of useful methods and properties that allow you to retrieve information about the system, such as the hostname, platform, architecture, and more.

import * as os from "node:os";

function runOsDemo():void {
    console.log("platform:", os.platform()); // returns the platform of the operating system (e.g., 'win32', 'linux', 'darwin')
    console.log("architecture:", os.arch()); // returns the architecture of the operating system (e.g., 'x64', 'arm', 'ia32')
    console.log("os type:", os.type()); // returns the operating system name (e.g., 'Windows_NT', 'Linux', 'Darwin')
    console.log("hostname:", os.hostname()); // returns the hostname of the operating system
    console.log("total memory:", os.totalmem()); // returns the total amount of system memory in bytes
    console.log("free memory:", os.freemem()); // returns the amount of free system memory in bytes
    console.log("os release:", os.release()); // returns the operating system release version
    console.log("Home directory:", os.homedir()); // returns the home directory of the current user
    console.log("temporary directory:", os.tmpdir()); // returns the operating system's default directory for temporary files
    
    const cpus = os.cpus(); // returns an array of objects containing information about each CPU/core installed on the system
    console.log("Number of CPUs:", cpus.length);
    console.log("CPU Information:", cpus[0]); // logs information about the first CPU/core
}

runOsDemo();