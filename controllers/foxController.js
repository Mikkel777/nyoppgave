const Fox = require("../models/Fox");

exports.getHome = async (req, res)=> {
    let fox1 = Math.floor(Math.random() * 100) + 1;
    let fox2 = Math.floor(Math.random() * 100) + 1;

    while (fox1 === fox2) {
        fox2 = Math.floor(Math.random() * 100) + 1;
    }

    const foxes = await Fox.find().sort({votes: -1});
    const winner = foxes.length > 0 ? foxes[0] : null;

    res.render("index", {
        fox1,
        fox2,
        winner,
        voted: req.query.voted
    });
};

exports.voteFox = async (req, res) => {
    const foxId = req.body.foxId;

    let fox = await Fox.findOne({foxId});

    if(!fox) {
        fox = new Fox ({foxId});
    }

    fox.votes++;
    await fox.save();

    res.redirect("/?voted=" + foxId);
}

exports.getStats = async (req, res) => {
  const foxes = await Fox.find()
  .sort({ votes: -1 })
  .limit(5);

  const winner = foxes.length > 0 ? foxes[0] : null;

  res.render("statistikk", {
    sortedFoxes: foxes,
    winner
  });
};