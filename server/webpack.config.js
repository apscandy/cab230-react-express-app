const path = require('path');

module.exports = {
    // mode: 'production', 
    mode: 'development',
    entry: './build/index.js', 
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    externals: {
        'sqlite3': 'commonjs sqlite3',
        'pg': 'commonjs pg',
        'pg-query-stream': 'commonjs pg-query-stream',
        'oracledb': 'commonjs oracledb',
        'mysql': 'commonjs mysql',
        'tedious': 'commonjs tedious',
        'better-sqlite3': 'commonjs better-sqlite3',
        'nock': 'commonjs nock',
        'aws-sdk': 'commonjs aws-sdk',
        'mock-aws-s3': 'commonjs mock-aws-s3',
        'bcrypt': 'commonjs bcrypt'
    },
    optimization: {
        minimize: true
    }
};