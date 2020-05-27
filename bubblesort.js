function swap(item1, item2) {
    return [item2, item1]
}

function bubbleSort(array) {
    if (array.length < 2) return array
    for (let i =  0; i < array.length; i++) {
        // let length = array.length
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                let swapped = swap(array[j], array[j+1])
                array.splice(j, 2, ...swapped)
            }
        }
        // length--
    }
    return array
}
