// This file defines a custom error class for API errors in a Node.js application.

class apiError extends Error{
constructor(
statusCode,
message = "something went wrong",
error = [],
stack = ""
){
    super(message)
    this.statusCode = statusCode
    this.error = error
    this.data = null
    this.message = message
    this.success = false;

    if(stack){
        this.stack = stack
    }else{
        Error.captureStackTrace(this, this.constructor)
    }

}

}

export {apiError}