// Notice: If test the content viewed before, always when change the content, its needed to start the application to display in browser. To facilitate the development flow is used the Nodemon package, that update the application everytime that edit and save the files.
// Install the package using the comando bellow:
npm i nodemon -D

// When use de -D paramter it means the package should be install as development dependency. To automate the nodemons use, open package.json file and add the follow line:
//...
// "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
"dev": "nodemon index.js"
//  },
// ...

// Now to execute, use the command bellow:
npm run dev

// After all it, always when make some change in the code and save the file it will update automatically, the nodemon restart the application to apply the modify.

// Caution: Although nodemon be an amazing tool to development, the nodman shouldnt be used to run the application, because maybe the client use, could have some problems restarting the application always when some client make some changes;
