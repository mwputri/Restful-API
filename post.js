Router.post('/', function (req, res) {
  if (!req.body.name || !req.body.year.toString().match(/^[0-9]{4}$/g) || !req.body.rating.toString().match(/^[0-9]{4}$/g)) {
    res.status(400)
    res.json({ message: "Bad Request" })
  } else {
    let newId = movies[movies.length - 1].id + 1
    movies.push({
      id: newId,
      name: req.body.name,
      year: req.body.year,
      rating: req.body.rating
    })
    res.json({ massage: "New movie created." location: "/movie/" + newId })
  }
})
