class Recursion{

    sumRecursive(array){

        if(array.length == 1) return array[0];
        else {
           return array[0] + this.sumRecursive(array.slice(1))
        }
     }

     countRecursive(array)
     {
        if(array.length == 1) return 1;
        else {
           return 1 + this.countRecursive(array.slice(1))
        }
     }

     maxNumber(array){
         if(array.length == 2) {
             return Math.max(...array)
         }else{
             let number = array[0]
             let last = this.maxNumber(array.slice(1))
             if(number>last){
                 return number;
             }else{
                 return last;
             }
         }
     }

     quickSort(array){
         if(array.length<2){
             return array
         }else{
            // Use a random number 
            let pivot = array[0]
            let left = []
            let right = []
            let other = array.slice(1)
            for (const num of other) {
                if(num< pivot){
                    left.push(num)
                }else{
                    right.push(num)
                }
            }

            let r =[]
            r.push(...this.quickSort(left))
            r.push(pivot)
            r.push(...this.quickSort(right))
            return r
         }
     }
}

module.exports = {
    Recursion
}