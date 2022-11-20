const express=require("express")
const router=express.Router()
const signUpTemplateCopy=require("../modules/signupmodules")
router.post('/signup',(request,response)=>{
    const signedUpUser=new signUpTemplateCopy({
        fullName:request.body.fullName,
        email:request.body.email,
        address:request.body.address,
        Phone:request.body.Phone
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})


module.exports=router