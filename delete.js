const { request } = require("express");

let app = express()

app.get('mw', function (req, res) {
  res.send("hello word!")
})
app.listen(3000)


Router.delete('/:id', function (req, res) {
  var removeIndex = movies.map(function(movie){
    return movie.id
  }).indexOf(req.params.id)

  if(removeIndex === -1){
    res.json({message: "Not Found"})
  } else {
    movies.splice(removeIndex, 1)
    res.send({message: "movie id" + res.params.id + "removed."})
  }
})
