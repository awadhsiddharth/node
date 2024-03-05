
// Global - NO WINDOW!

// __dirname - path to current directory
// __filename - filename
// require - function to use modules(CommonJS)
// module - info abt current module(file)
// process - info about env where the program is being executed
// window is not available in node,it is only available in browser

console.log(__dirname);
setInterval(() => {
    console.log("hi");
}, 1000);
