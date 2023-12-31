// default error handler
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        console.log(err.message)
        return next(err);
    }
    res.status(500).json({ message: err.message });

    // if (err) {
    //     res.status(500).json({ message: err.message });
    // }
};

module.exports = errorHandler;