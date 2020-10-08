//En este archivo vamos a generar una base para todas las response

exports.succes = (req,res, message, status)=>{
    let statusCode = status || 200
    res.status(statusCode).send({
        error : false,
        status : statusCode,
        body : message
    })
};
exports.error = (req,res, message, status)=>{
    let statusCode = status || 500
    res.status(statusCode).send({
        error : true,
        status : statusCode,
        body : message
    })
}