function notFound(req, res, next) {
    next({
        status: 404,
        message: `NotFound: ${req.originalUrl}`
    });
}

module.exports = notFound;