const {Router} = require("express");
const messages = require("../messages");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {messages: messages})
})

indexRouter.get("/:user", (req, res) => {
  const user = req.params.user
  const message = messages.find(message => message.user === user);
  
  res.render("messageDetail", {message: message});
})

module.exports = indexRouter;