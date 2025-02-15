# backend_study


DAY 1:

fundamentals of js
arrays and obj
functions return
async js copding




DAY 2:

Node.js Basics

Intro of Node.js:

1. JS DONT HAVE FUNCTAIONALITIES TO BUILD BACKEND
2. V8 ENGINE WITH javascript  ==== NODE.JS
3. NODEJS is a js runtime environment


Install node & npm(PACKAGE STORE)
Working with modules

File System op:

1. rmdir: Removes a directory (deprecated, use fs.rm instead).
2. unlink: Deletes a specified file.
3. copyFile: Copies a file from one location to another.
4. rename: Renames or moves a file to a new path.
5. appendFile: Appends data to a file, creating it if it doesn’t exist.
6. writeFile: Writes data to a file, replacing existing content if any.

Understanding HTTP modules

1. HTTP and HTTPS
2. Protocols





DAY 3:

1. What is npm?


npm (Node Package Manager) is the default package manager for Node.js. It helps developers install, manage, and share JavaScript libraries and tools.
Key Features of npm:
... Package Management - Allows you to install and update JavaScript libraries easily.
... Dependency Management - Handles dependencies for projects using package.json.
... Script Running - Lets you automate tasks using npm run scripts.
... Publishing Packages - Allows developers to share their own packages with the community.
... Global and Local Installations - You can install packages globally (-g) or locally (project-specific).




2. install and uninstall anything basics and advanced

    (install -->  npm i packageName )
    (uninstall -->  npm uninstall package name)

3. Install particular version of package 
    npm i packagename@version
    eg - npm i accessibility@3.0.1
  
4. Node_Modules

--- node_modules is a folder where all the dependencies (packages) installed via npm or yarn are stored.
--- Every project using Node.js and npm has a package.json file, which lists the project's dependencies.
--- The package-lock.json file ensures consistent package versions across installations.


5. dependencies 
- Used in production – These are essential for the project to run ( packages and packages' dependencies)


4. DEVdependencies 
- Used only during development – These are tools that help in testing, linting, or building the project but are not required in production.




5. scripts - understanding default scripts PATH and custom scripts

🛠 What Are npm Scripts?
npm scripts allow you to run commands from package.json without typing long shell commands.

🔹 Built-in (Predefined) Scripts
npm has some predefined scripts that run without using npm run. These include:

npm start → Runs the "start" script.
npm test → Runs the "test" script.
npm stop → Runs the "stop" script.
❗ Only start, test, stop, and restart can be run without npm run.

🔹Custom scripts
You can define your own scripts in package.json. Run with run command. (i created milan as a custom script.)






--- DAY-4 ---


Express.js framework:

What is a Framework?
A framework is a pre-built structure that provides a foundation for developing applications. It includes ready-to-use tools, libraries, and best practices, allowing developers to focus on building features rather than setting up everything from scratch.


1. Intro to express.js
---It simplifies backend development by providing powerful routing, middleware support, and HTTP utility methods.
---Manages everything from recieving the request and giving the response


2. Setting up a basic Express application  npm i express

3. Routing   
---Routing in Express.js determines how an application responds to different HTTP requests (GET, POST, PUT, DELETE) for specific URLs (routes).
app.get(route , requestHandler) -->     / main page      /profile--> profile page




4. MiddleWare

---whenever server accepts the request, from there to reach the end we can do anything in middle.....that is called middleware.

---Middleware functions in Express.js are functions that execute during the request-response cycle. They modify, process, or handle requests before they reach the final route or response.




5. Request and response handling
---req (Request Object): Contains details about the HTTP request (URL, headers, body, parameters, etc.).
---res (Response Object): Used to send back responses to the client.



6. Error handling

Express.js provides a structured way to handle errors efficiently, preventing server crashes and improving debugging.

🔹 Types of Errors in Express.js
1️⃣ Synchronous Errors – Errors that occur inside normal route handlers.
2️⃣ Asynchronous Errors – Errors that occur inside asynchronous operations (e.g., setTimeout, database calls).
3️⃣ Client Errors – Errors caused by invalid client requests (e.g., 404 Not Found).
4️⃣ Server Errors – Internal server failures (e.g., database crashes).

Default error handler middleware--


app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error
    res.status(500).send("something wrong");
}); 

