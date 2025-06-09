# 1. [Create Folder Structure](https://github.com/dm-thedeveloper/user-curd-and-auth)

# 2. Intialize Package.josn: `npm init` or `npm init  -y` (for Direct initialize The `package.josn` file)

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

- [asyncHandler.utils.js](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/utils/asyncHandler.js)
- [apiresponse.utls.js](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/utils/apiResponse.utils.js)
- [apierror.utils.js](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/utils/apiError.utils.js)

# 10. [Create Controllers](https://github.com/dm-thedeveloper/user-curd-and-auth/tree/main/src/controllers)

- [user.controller.js](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/controllers/user.controller.js)

# 11. [Create Routes](https://github.com/dm-thedeveloper/user-curd-and-auth/tree/main/src/routes)

- [user.routes.js](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/main/src/routes/user.routes.js)

# 12. Define Routes in app.js

- [useRouter](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/82df808e741e88fdcbd614c93c41afdc591118d1/src/app.js#L74C1-L78C28)

# 13. Create Middleware

- [multer.middleware.js]()
- [inject in the userRoute]()

# 14. Send `multipart/form-data` from the postman 
##  (to the live URL or the local URL)

- ## Post (Local) : `/user/register` ✅✅
- ## Post (Live) : `/user/register` ✅✅

# 15. [Create a User Register Contrller](https://github.com/dm-thedeveloper/user-curd-and-auth/blob/70b60283552e1225220ecd5d6e13bbee3141b8c0/src/controllers/user.controller.js#L7C1-L12C25)

> ### Steps

 <ol>
  <li> <h4> 
    Access Data from the res  (req.body)
   </h4></li>

<li> <h4> 
   Validation for the Required Fields
   </h4></li>
   <li> <h4> 
   Check user already Registered username or email

   </h4></li>
   <li> <h4> 
  access the files  & Upload on the Cloudinary (coverImage is optional) 
   </h4></li>
   <li> <h4> 
   create user object
   </h4></li>
   <li> <h4> 
   remove sensitive and unnesecery fields

   </h4></li>

 <li> <h4> 
   Check for user Creation

   </h4></li>
    <li> <h4>

retun res

   </h4></li>

</ol>




# 16. Login User



> ### Steps

 <ol>
  <li> <h4> 
 Get Data

   </h4></li>

<li> <h4> 
   Check for required Fields

   </h4></li>
   <li> <h4> 
    findUser
   </h4></li>

   <li> <h4> 
   compare passsword plain and hashed
   </h4></li>
   <li> <h4> 
   generate access and And Refresh Tokens ,  also Save Acces token in DB

   </h4></li>
   <li> <h4> 
  send cookies


   </h4></li>

   </ol>