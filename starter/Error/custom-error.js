class CustomAPIError extends Error{
    constructor(message,code)
    {
        super(message)
        this.statusCode(code)
    }
}

const createCustomError=(msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode)
}

module.exports={createCustomError,CustomAPIError}