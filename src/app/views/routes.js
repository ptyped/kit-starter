/**
 * Put your custom routes here.
 */
module.exports = {
    "_test-route/": (req, res, next) => {
        res.render('404.html', {})
    }
}
