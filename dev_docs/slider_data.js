module.exports = function(req, res) {

    setTimeout(function () {

        res.set('Content-Type', 'application/json');

        res.json(
            {}
        );
    }, Math.random() * 8000);
};