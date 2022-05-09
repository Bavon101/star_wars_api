const functions = require("firebase-functions");
const fetch = require("node-fetch");
const {BASEURL} = require("../third_party/star_wars_api");

const people = functions.https.onRequest(async (request, response) =>{
  const page = request.query.page??"";
  const requestOptions = {
    method: "GET",
  };

  const path = `${BASEURL}/people?page=${page}`;
  const peopleResponse = await fetch(path, requestOptions).
      catch((error) => response.send(error.toSring()));
  const data = await peopleResponse.json();
  if (data?.details === "Not found") {
    response.sendStatus(404);
    response.send("There's no matching page");
  } else {
    response.send(data);
  }
});

module.exports = {
  people,
};

