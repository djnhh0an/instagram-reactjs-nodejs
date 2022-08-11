const errorHandler = (err, req, res, next) => {
    if (!err) {
        if (err.statusCode == 400) {
            return res.status(400).send({
                message: 'Bad request'
            });
        }

        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
};

export default errorHandler;