const { log } = require('node:console');
const fs = require('node:fs');

// fs.writeFile(file, data[, options], callback)

fs.writeFile("milan.txt", "my name is milan",function(err){
    if(err) console.error(err);
    else console.log("done writing");
})


fs.appendFile("milan.txt", " and ik im cool",function(err){
    if(err) console.error(err);
    else console.log("done writing");
})


fs.rename("milan.txt","milanawasthi.txt",function (err) {
    if(err) console.error(err);
    else console.log("done writing");
})


fs.copyFile("milanawasthi.txt" , "./copy.txt", function (err) {
        if(err) console.error(err.message);
        else console.log("done writing");
})

fs.unlink("copy.txt",function(err){
    if(err) console.error(err);
    else console.log("removed");

})

// fs.rmdir(./path, function(err){        rm or rmdir
//     if(err) console.error(err);
//     else console.log("remove directory");
    
// }) 









// Import the built-in 'http' module in Node.js to create an HTTP server.
const http = require('http');

// Create an HTTP server using the 'createServer' method.
// The function provided as an argument is the request handler,
// which takes two parameters: 'req' (request) and 'res' (response).
const server = http.createServer(function(req, res) {
    // Send a response back to the client and end the request.
    // The response body contains the text "hellowwww bro".
    res.end("hellowwww bro");
});

// The server listens for incoming connections on port 3000.
// When a request is made to localhost:3000, the server will respond.
server.listen(3000);
