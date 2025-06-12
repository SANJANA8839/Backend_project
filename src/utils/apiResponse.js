// Description: This module defines a class for creating standardized API responses.

class apiResponse{
    constructor(statusCode, data, message = "success"){
     this.statusCode = statusCode
     this.data = data
     this.message = message
     this.success = statusCode < 400;
    }
}