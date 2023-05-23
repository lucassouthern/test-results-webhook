const { getPostData } = require('../utils')

// @desc    Create a Product
// @route   POST /api/products
async function result(req, res) {
    try {
        const body = await getPostData(req)

        const { passed } = JSON.parse(body)
        let exitCode;

        if (passed) {
            exitCode = 0;
        } else {
            exitCode = 1;
        }
        
        console.log(exitCode);

        res.writeHead(204, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(exitCode))  

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    result
}
