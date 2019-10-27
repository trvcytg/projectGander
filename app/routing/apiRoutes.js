// ===============================================================================
// LOAD DATA
// ===============================================================================
const friendsData = require("../data/friends");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  // API POST Requests
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
    let totalDifference = 0;
    let bestMatch = {
      name: "",
      friendDifference: 1000
    };
    let userData = req.body;
    let userName = userData.name;
    let userScores = userData.scores;

    let b = userScores.map(function(item) {
      return parseInt(item, 10);
    });
    userData = {
      userName: req.body.userName,
      scores: b
    };
    console.log("userData", userData);
    let sum = b.reduce((a, b) => a + b, 0);
    console.log("sum", sum);
    for (let i = 0; i < friendsData.length; i++) {
      totalDifference = 0;

      let bfriendsScore = friendsData[i].scores.reduce((a, b) => a + b, 0);

      totalDifference += Math.abs(sum - bfriendsScore);

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friendsData[i].userName;
        bestMatch.friendDifference = totalDifference;
      }
    }
    console.log("new best match:", bestMatch);
    friendsData.push(req.body);
    console.log(req.body);
    res.json(true);
  });
};
