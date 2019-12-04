const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const db = req.app.get("db");
  const { username, password } = req.body;
  const taken = await db.verify(username).catch(err => err);
  if (taken[0]) {
    rs;
    res.status(403).json("username is already taken");
  } else {
    let hash = await bcrypt.hash(password, 10);
    db.signup([username, hash])
      .then(response => res.status(200).json(response[0]))
      .catch(err => err);
    console.log(hash);
    console.log(req.session);
  }
};
const login = async (req, res) => {
  const db = req.app.get("db");
  const { username, password } = req.body;
  const results = await db.verify(username);
  if (!results[0]) {
    res.status(403).json("Wrong username or password");
  } else {
    let auth = await bcrypt.compareSync(password, results[0].password);
    if (!auth) {
      res.status(403).json("Wrong username or password");
    } else {
      req.session.user = {
        username: results[0].username
      };
      res.status(200).json(results[0]);
      console.log(req.session.user.username);
    }
  }
};
const getUser = (req, res) => {
  if (!req.session.user) {
    req.session.user = { username: "", id: 0 };
  }
  res.status(200).json(req.session.user);
};
const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
  console.log("Logged Out");
};

module.exports = {
  signup,
  login,
  getUser,
  logout
};
