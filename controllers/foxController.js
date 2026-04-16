let votes = {};

exports.getHome = (req, res) => {
    let fox1 = Math.floor(Math.random() * 100) + 1;
    let fox2 = Math.floor(Math.random() * 100) + 1;

    while (fox1 === fox2) {
        fox2 = Math.floor(Math.random() * 100) + 1;
    }

    let winner = null;
    let maxVotes = 0;

    for (let id in votes) {
        if (votes[id] > maxVotes) {
            maxVotes = votes[id];
            winner = id;
        }
    }

    let sortedFoxes = Object.entries(votes)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    res.render("index", {
        fox1,
        fox2,
        winner,
        sortedFoxes,
        query: req.query
    });
};

exports.voteFox = (req, res) => {
    let foxId = req.body.foxId;

    if (!votes[foxId]) {
        votes[foxId] = 0;
    }

    votes[foxId]++;

    res.redirect("/?voted=" + foxId);
};