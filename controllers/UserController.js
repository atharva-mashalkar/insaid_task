const ResponseUtils = require('../utils/ResponseUtils');
const DBUtils = require("../utils/DBUtils")();
const User = require("../models/User");

exports.registerInquiry = async(req, res) => {
    const {firstName, lastName, inquiry, phoneNumber, emailId } = req.body;

    if (!firstName || !lastName || !inquiry || !phoneNumber || !emailId ){
        return ResponseUtils.process400(res);
    }

    try{
        user = new User({
            firstName,
            lastName,
            inquiry,
            phoneNumber,
            emailId,
        });
        await DBUtils.saveEntity(user);

    }catch(e){
        console.error("Error in registering new inquiry: ", e);
        return ResponseUtils.process500(res);

    }

    return ResponseUtils.processData(res, {
        user
    })
}


