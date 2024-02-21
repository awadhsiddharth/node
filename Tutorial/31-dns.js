const dns = require('dns');
// const { hostname } = require('os');
dns.lookupService('144.76.11.18', 22, (err, hostname, service) => {
    console.log(hostname, service);
});
