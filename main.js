const { BinarySearch } = require('./binarySearch.js')
const { Recursion } = require('./recursion.js')
class Main{
   
   exec() {
      console.log('main')

      //this.exectureBinarySearch()
      this.recursion()
   }

   exectureBinarySearch(){
      const binarySearch = new BinarySearch()
      const result = binarySearch.findNumberPosition( [0,1,3,5,7,9,12,15,18,19,25 ], 1)
      console.log(`Found at position ${result}`);
   }

   recursion(){
      let recursion = new Recursion();
      let sum = recursion.sumRecursive([1,2,3,4,5]);
      console.log(sum);
      let count = recursion.countRecursive([1,2,3,4,5,6,7])
      console.log(count)

      let maxNumber = recursion.maxNumber([2,8,4,9,12,32,14,5]);
      console.log(maxNumber);

      let quickSort = recursion.quickSort([2,8,4,9,12,32,14,5]);
      console.log( quickSort);
   }



}

const main = new Main()
main.exec()