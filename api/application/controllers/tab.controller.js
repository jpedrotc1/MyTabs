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


// Find a single Tab with id
async function findOne(req, res) {

    try {

        const response = await TabService.findOneTab(req.params.id);

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

async function findAll(req,res) {

    const response = await TabService.findAllTabs();

    if (!response) {
        res.status(500).send({
            message: "Some error occurred while finding the Tabs."
        })
    } else {
        res.send(response);
    }
};


module.exports = {
    create,
    findOne,
    findAll
}