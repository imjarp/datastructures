const { BinarySearch } = require('./binarySearch.js')
const { Recursion } = require('./recursion.js')
const { BreadthSearch } = require('./breadth-depth.js')
class Main{
   
   exec() {
      console.log('main')

      //this.exectureBinarySearch()
      //this.recursion()
      this.breadthSearchFirst();
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


   breadthSearchFirst(){
      const map = new Map();
      map.set('you',['alice','bob','claire']);
      map.set('bob',['anuj','peggy'])
      map.set('alice',['peggy'])
      map.set('claire',['thom','jhonny'])
      map.set('anuj',[])
      map.set('peggy',[])
      map.set('thom',[])
      map.set('jhonny',[])
      
      let breadthSearch = new BreadthSearch(map);
      console.log(breadthSearch.getPathOrNull('you'));

   }

   dijkstra(){
      function createMapValue(key,value){
         const map = new Map();
         return map.set(key,value);
      }
      /*

             ---{5}----> LP ---{15}---> Bass  ---{20}
          /                 \          ^               \ 
         /              {20}  \       / {30}            \ 
      Book                      \   /                     Piano
         \                       \/                    /
          \                     /  \                  /
           ---{0}--> Poster ---{15}---> Drums   ---{20}

      */

      const graph = new Map();
      graph.set('book',createMapValue('lp',6))
      graph.set('book',createMapValue('poster',0))

      graph.set('lp',createMapValue('bass',15))
      graph.set('lp',createMapValue('drums',20))

      graph.set('bass',createMapValue('piano',20))

      graph.set('poster',createMapValue('bass',30))
      graph.set('poster',createMapValue('drums',15))

      graph.set('drums',createMapValue('piano',15))

   
      const costs = new Map();

      costs.set('lp',5)
      costs.set('poster',0)
      costs.set('bass',Infinity)
      costs.set('drums',Infinity)
      costs.set('piano',Infinity)

      const parents = new Map()
      parents.set('lp','book');
      parents.set('poster','book');

      parents.set('bass','lp');
      parents.set('bass','poster');

      parents.set('drums','lp');
      parents.set('drums','poster');

      parents.set('piano','bass');
      parents.set('piano','drums');



   }


}

const main = new Main()
main.exec()