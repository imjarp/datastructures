class BinarySearch {

    findNumberPosition(list, number) {
        let top = 0;
        let bottom = list.length;
        let middle = undefined
        let aux = undefined;
        while (top <= bottom) {
            middle = parseInt((top + bottom) / 2)
            aux = list[middle];
            if (aux === number) return middle;

            if (aux < number) {
                top = middle + 1;
            } else {
                bottom = middle - 1;
            }
        }
        return 'NotFound'
    }
}

module.exports = { 
    BinarySearch 
}