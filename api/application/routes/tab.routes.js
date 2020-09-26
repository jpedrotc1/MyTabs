module.exports = (app) => {
    const tabController = require('../controllers/tab.controller.js');

    // Create a new Tab
    app.post('/tabs', tabController.create);

    // Retrieve one specific tab
    app.get('/tabs/:id', tabController.findOne);

    // Retrieve all tabs
    app.get('/tabs',tabController.findAll);

}