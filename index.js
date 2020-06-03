
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  let nested = document.querySelector('div')
  return nested.getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}


// THIS WORKS BUT IS NOT EXCEPTED ALSO USED collection.forEach() and it worked BUT
// it was not EXCEPTED


// function increaseRankBy(n) {
//   let collection = document.querySelectorAll('.ranked-list li');
//     for (let i = 0; i <collection.length; i++) {
//       collection[i].innerHTML = parseInt(collection[i].innerHTML) + n
//   }
//   }

function deepestChild() {
  let deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length - 1]

}
