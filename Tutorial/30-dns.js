const { error } = require('console');
const dns = require('dns');
const { hostname } = require('os');
dns.resolve6('www.javatpoint.com', (err, address) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`IPV6 Address is : ${JSON.stringify(address)}`);
    }
    // address.forEach((a) => {
    //     dns.reverse(a, (err, hostname) => {
    //         if (err) {
    //             console.error(err);
    //         } else {
    //             console.log(`Reverse for ${a} is ${JSON.stringify(hostname)}`);
    //         }
    //     });
    // });
});
