const path = require('path');

module.exports = {
    // mode: 'production', // or 'development' as needed
    mode: 'development', // or 'development' as needed
    entry: './build/index.js', // Entry point of your server-side code
    target: 'node', // Specify the environment
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Output filename
    },
    externals: {
        'sqlite3': 'commonjs sqlite3', // Treat sqlite3 as an external module
        'pg': 'commonjs pg', // Treat pg as an external module
        'pg-query-stream': 'commonjs pg-query-stream',
        'oracledb': 'commonjs oracledb',
        'mysql': 'commonjs mysql',
        'tedious': 'commonjs tedious',
        'better-sqlite3': 'commonjs better-sqlite3'
    },
    optimization: {
        minimize: true
    }
};