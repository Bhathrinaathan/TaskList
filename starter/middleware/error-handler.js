const {CustomAPIError}=require('../Error/custom-error')

const errorHandlerMiddleware = (err,req,res,next)=>{
    if (err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    res.status(err.status).json({msg:err.msg})
}

module.exports=errorHandlerMiddleware