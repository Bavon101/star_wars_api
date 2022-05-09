const functions = require("firebase-functions");
const express = require("express");
const {search} = require("./lib/search");
const {people} = require("./lib/people");

const app = express();

app.get("/people", people);
app.get("/search", search);
exports.app = functions.https.onRequest(app);


