// ===============================================================================
// DATA
// ===============================================================================
rando = function() {
  return Math.floor(Math.random() * 5) + 1;
};
var friends = [
  {
    userName: "Todd",
    scores: [
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando()
    ]
  },
  {
    userName: "Billy",
    scores: [
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando()
    ]
  },
  {
    userName: "Fred",
    scores: [
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando()
    ]
  },
  {
    userName: "Gob",
    scores: [
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando()
    ]
  },
  {
    userName: "Orion",
    scores: [
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando()
    ]
  },
  {
    userName: "Julia",
    scores: [
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando()
    ]
  },
  {
    userName: "Quinn",
    scores: [
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando()
    ]
  },
  {
    userName: "Tabitha",
    scores: [
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando()
    ]
  },
  {
    userName: "Jessie",
    scores: [
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando()
    ]
  },
  {
    userName: "Nora",
    scores: [
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando(),
      rando()
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
