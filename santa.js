function deliverPresents(houses) {
  // Base CAse
  // If we have a single house deliver the presents
  if (houses.length === 0) {
    return
  }
  else if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  }
  else {
    var numOfHouses = houses.length
    var splitlocation = numOfHouses / 2
    deliverPresents(houses.slice(0, splitlocation))
    deliverPresents(houses.slice(splitlocation, houses.length))

  }


  // Break the problem down
  // Split the list of more than one house into two lists

  // recall the function on a smaller piece
  // call deliverpresents on both lists
}

module.exports = deliverPresents
