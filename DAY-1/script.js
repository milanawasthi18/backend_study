// // Creating an array
// var arr = [1,2,34,5,5];

// // forEach method iterates over each element in the array and executes the callback function
// arr.forEach(function(val){
//     console.log(val + " hello"); // Prints each value with "hello"
// })

// // Creating an array
// var arr = [1,2,3,4,5,5];

// // map method creates a new array by applying a function to each element
// var ans = arr.map(function(val){ 
//     return val; // Returns each element as is
// })

// console.log(ans); // Logs the new array

// // Creating an array
// var arr = [1,2,3,4,5,5];

// // filter method creates a new array with elements that satisfy the given condition
// var ans = arr.filter(function(val){
//     if(val > 3) return true; // Returns only values greater than 3
// })

// console.log(ans); // Logs the filtered array

// // Creating an array
// var arr = [1,2,3,4,5,5];

// // find method returns the first element that satisfies the given condition
// var ans = arr.find(function(val){
//     if(val === 2) return val; // Finds the first occurrence of 2
// })

// console.log(ans); // Logs the found value

// // Defining an object with key-value pairs
// var obj = {
//     a: "b", // Key 'a' with value 'b'
//     name: "milan" // Key 'name' with value 'milan'
// }

// // Object.freeze prevents modifications to the object, making it immutable
// Object.freeze(obj);
// obj.name = "milannnnn"; // This modification will not work due to freeze
// console.log(obj['name']); // Logs "milan" because the object is frozen

// // Function declaration
// function abcd(){
//     return 12; // Returns the number 12
// }

// console.log(abcd()); // Calls the function and logs the returned value

// // Async function demonstrating fetch API usage
// async function abcd(){
//     // fetch() is used to request resources over the network, returns a Promise
//     var blob = await fetch(); // Fetches data from an API (URL missing, so this will cause an error)
    
//     // json() method parses the response body text as JSON and returns a Promise
//     var ans = await blob.json(); // Converts the fetched data into JSON format

//     // Accessing a property of the fetched JSON data
//     console.log(ans.results[0].name); // Logs the name of the first result in the JSON response
// }
