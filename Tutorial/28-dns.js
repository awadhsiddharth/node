const dns=require('dns');

dns.lookup(`www.cricbuzz.com`,(err,address,family)=>{
    if(err){
        console.error(err);
    }else{
        // This parameter contains the IP address (in string format) 
        // corresponding to the hostname that was looked up
        console.log(`The web addres of Cricbuzz is : `,address);  
        // This parameter indicates the address family of the resolved IP address
        // IPV4 or IPV6
        console.log(`Family : `,family);  //4
    }
})
