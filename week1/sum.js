//写一个javascript函数除去数组中的最高和最低元素，然后求和

//[ 6, 2, 1, 8, 10 ] => 16
//[ 1, 1, 11, 2, 3 ] => 6
//填充下面函数的内容

function sumArray(array) {
  if(Object.prototype.toString.call(array) !== '[object Array]') {
    return 0
    //throw new Error('参数不是一个数组')
  }
  let max = Math.max(...array)
  let min = Math.min(...array)
  return array.filter((item) => {
    if(item === max) {
      max = ''
      return false
    } else if(item === min) {
      min = ''
      return false
    } else {
      return true
    }
  }).reduce((prev, next) => {
    return prev + next
  }, 0)
}
sumArray(null)
module.exports = sumArray
