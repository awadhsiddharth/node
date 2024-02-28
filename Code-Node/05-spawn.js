const { spawn } = require('child_process');

// Spawn a new process to execute the 'ls' command
const ls = spawn('ls', ['-l', '/usr']);

// Listen for output from the process
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

// Listen for errors, if any
ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// Listen for the process to exit
ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
