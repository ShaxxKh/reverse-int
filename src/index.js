module.exports = function reverse (n) {
    let strNum = n.toString()
    let notNegative = strNum
    if(strNum[0] === '-'){
        notNegative = strNum.slice(1)
    }
  var reversed = notNegative.split('').reverse()
  let final = ''


  for(var i = 0; i < reversed.length; i++){
    final += reversed[i]
  }
  return final
}
