const fs = require('fs')

// Utility to load JSON test data
function loadTestData(path) {

    const data = fs.readFileSync(path, 'utf-8')

    return JSON.parse(data)
}

module.exports = { loadTestData }