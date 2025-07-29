const {Router} = require("express");
const messages = require("../messages");
const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form")
});

newRouter.post("/", (req, res) => {
  const {text, user} = req.body;
  messages.push({text, user, added: new Date()});
  res.redirect("/");
})

module.exports = newRouter;