const {error} = require('../errors')

const errorHandler = (err, req, res,next) => {
    const statusCode = req.statusCode ? req.statusCode : 500;
    switch(statusCode) {
        case errors.VALIDATION_ERROR:
            res.json({
                title: 'Validation Error',
                message: err.message,
                stackTracker: err.stack
            })
            break
        case errors.VALIDATION_ERROR:
            res.json({
                title: 'Validation Error',
                message: err.message,
                stackTracker: err.stack
            })
            break
        case errors.VALIDATION_ERROR:
            res.json({
                title: 'Validation Error',
                message: err.message,
                stackTracker: err.stack
            })
            break
        case errors.VALIDATION_ERROR:
            res.json({
                title: 'Validation Error',
                message: err.message,
                stackTracker: err.stack
            })
            break
        case errors.VALIDATION_ERROR:
            res.json({
                title: 'Validation Error',
                message: err.message,
                stackTracker: err.stack
            })    
            break
        default: 
        console.log('No Errors')
        break;
    }
}

module.exports = errorHandler