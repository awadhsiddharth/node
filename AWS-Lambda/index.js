// Code for resize images

const im = require('imagemagick');
const fs = require('fs');
const os = require('os');
const uuidv4 = require('uuid/v4');

const resizeAsync = promisify(im.resize);
const readFileAsync = promisify(fs.readFile);
const unlinkAsync = promisify(fs.unlink);

const  {promisify} = require('aws-sdk');

AWS.config.update({ region :'us-west-2'});
const s3 = new AWS.S3();


exports.handler = async(event) => {
    let filesProcessed = event.Records.map( async (record)=>{
        let bucket = record.s3.bucket.name;
        let fileName = record.s3.object.key;

        // Get file form S3

           var params = {
            Bucket : bucket,
            Key : fileName
           };
           let inputData = await s3.getObject(params).promise();


        // Resize the file

            let tempFile = os.tmpdir() + '/' + uuidv4() + '.jpg';
            let resizeArgs = {
                srcData: inputData.Body,
                dstPath: tempFile,
                width:150
            };
            await resizeAsync(resizeArgs);

        // Read the resized file
            let resizedData = await readFileAsync(tempFile);
            
        // Upload the new file to S3
            let targetFileName = fileName.substring(0, fileName.lastIndexOf('.') + '-small.jpg');
            var params = {
                Bucket: bucket +'-dest',
                Key: targetFileName,
                Body: new Buffer(resizedData),
                ContentType:'image/jpeg'
            };

            await s3.putObject(params).promise();
            return await unlinkAsync(tempFile);
    });

    await Promise(filesProcessed);
    console.log("done");
    return "done";
}