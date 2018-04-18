// user controller

module.exports = {
  findUser: function(req, res) {
    console.log(req.user);
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};