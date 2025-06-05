# 1. [Create Folder Structure](https://github.com/dm-thedeveloper/user-curd-and-auth)  
# 2. Intialize Package.josn:  `npm init` or `npm init  -y` (for Direct initialize The `package.josn` file)   
# 3. Package.json Setup : Set the <u>module & `Start Script`</u>
  - ### module For ES6 Syntax like we use `import` etc ;
     - `"type": "module",` <a href="https://github.com/dm-thedeveloper/user-curd-and-auth/blob/9c57652bacb3a47c80bf378eef17e6c3beef24cd/package.json#L6">🔗</a>
  - ### Script for Run the index.js file `npm start`
     - `"start": "nodemon src/index.js"` <a href="https://github.com/dm-thedeveloper/user-curd-and-auth/blob/9c57652bacb3a47c80bf378eef17e6c3beef24cd/package.json#L6">🔗</a>

# 4.🛢️ [Data Base Connection](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/db/connection.db.js)
# 5. [app.js Confing & Default Route](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/app.js)
# 6. [Call the DB Connection & listen The app & dotev config](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/index.js)
# 7. Now You Can Run The Server `npm start` ![Terminal Screen Shot](https://res.cloudinary.com/dwvr054ck/image/upload/v1749103016/terminal_gnm5sw.png)
# 8. [Create a User Model](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/models/user.model.js)
# 9. [Create the utils](https://github.com/dm-thedeveloper/user-curd-and-auth/tree/main/src/utils) 
 -  [asyncHandler.utils.js](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/utils/asyncHandler.js) 
 -  [apiresponse.utls.js](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/utils/apiResponse.utils.js) 
 -  [apierror.utils.js](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/utils/apiError.utils.js)

# 10. [Create Controllers](https://github.com/dm-thedeveloper/user-curd-and-auth/tree/main/src/controllers)
 - [user.controller.js](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/controllers/user.controller.js)

# 11. [Create Routes](https://github.com/dm-thedeveloper/user-curd-and-auth/tree/main/src/routes)
 - [user.routes.js](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/routes/user.routes.js)

# 11. Define Routes in app.js
 - [useRouter](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/82df808e741e88fdcbd614c93c41afdc591118d1/src/app.js#L74C1-L78C28)
