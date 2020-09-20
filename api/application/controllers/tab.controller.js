const TabService = require('../services/tab.service');


// Create and Save a new Tab
async function create(req, res) {

    try {

        const response = await TabService.createTab(req.body);

        if (!response) {
            res.status(500).send({
                message: "Some error occurred while creating the Tab."
            })
        } else {
            res.send(response);
        }
    } catch (err) {
        res.status(400).send({ message: err.message })

    }
};


// Find a single Tab with a tabId
async function findOne(req, res) {

    try {

        console.log(req.params)
        const response = await TabService.findOneTab(req.params.tabId);

        if (!response) {
            res.status(500).send({
                message: "Some error occurred while finding the Tab."
            })
        } else {
            res.send(response);
        }
    } catch (err) {
        res.status(404).send({ message: err.message })
    }
};


module.exports = {
    create,
    findOne
}