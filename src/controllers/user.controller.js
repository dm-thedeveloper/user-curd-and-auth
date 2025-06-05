import APIResponse from "../utils/apiResponse.utils.js";
import asychandler from "../utils/asyncHandler.js";

const Register = asychandler((req, res) => {
    console.log(req.url);
    
  res.status(200).json(new APIResponse("User Will Be Registred !!", {}, 200));
});

export { Register };
