function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(arr1, arr2) {
    let sorted = []
    while(arr1.length !== 0 && arr2.length !== 0) {
        if(arr1[0] < arr2[0]) {
            sorted.push(findMinAndRemoveSorted(arr1))
        } else if(arr1[0] >= arr2[0]) {
            sorted.push(findMinAndRemoveSorted(arr2))
        }
    } 
    return sorted.concat(arr1).concat(arr2)
}

function mergeSort(array) {
    if(array.length > 1) {
        let middle = Math.floor(array.length/2)
        let firstHalf = array.slice(0, middle)
        let secondHalf = array.slice(middle)
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    } else {
        return array
    }
}