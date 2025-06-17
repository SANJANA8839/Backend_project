// using a wrapper class or function to handle async errors in Express.js

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err));
    }
}

export {asyncHandler} 