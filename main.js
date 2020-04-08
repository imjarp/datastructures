const { BinarySearch } = require('./binarySearch.js')
class Main{
   
   exec() {
      console.log('main')
      this.exectureBinarySearch()
      
   }

   exectureBinarySearch(){
      const binarySearch = new BinarySearch()
      const result = binarySearch.findNumberPosition( [0,1,3,5,7,9,12,15,18,19,25 ], 1)
      console.log(`Found at position ${result}`);
   }
}

const main = new Main()
main.exec()