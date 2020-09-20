module.exports = (app) => {
    const tabController = require('../controllers/tab.controller.js');

    // Create a new Tab
    app.post('/tabs', tabController.create);

    // Retrieve one specific tab
    app.get('/tabs/:tabId', tabController.findOne);

}