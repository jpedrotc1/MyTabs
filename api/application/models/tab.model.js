const mongoose = require('mongoose');
const Schema = mongoose.Schema

const body = {

    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    instrument: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    tab: {
        type: String,
        required: true
    },
    progress: {
        type: String
    }
}

const options = {
    collection: 'Tabs',
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
};

const tabSchema = Schema(body, options)


module.exports = mongoose.model('Tab', tabSchema);