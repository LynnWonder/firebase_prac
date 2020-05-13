const functions = require('firebase-functions');
const express = require('express');
const cors=require ('cors')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
const app = express();

// Automatically allow cross-origin requests
// 注意不必添加 *等等
const  whitelist = ['http://localhost:8081','https://vue-prac-1b976.web.app']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            return callback(null, true)
        } else {
            return callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
    // origin:true
};
// Add middleware to authenticate requests

// build multiple CRUD interfaces:
app.get('/', cors(corsOptions),(req, res) => {
    res.json({msg: 'hello world'});
});
// Expose Express API as a single Cloud Function:
exports.helloWorld = functions.https.onRequest(app);
