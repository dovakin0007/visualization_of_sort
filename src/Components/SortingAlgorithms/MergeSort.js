



// function MergeSort(array){
//     if (array.length === 1) return array;
//     const MiddleIdx = Math.floor(array.length/2)
//     const FirstHalf = MergeSort(array.slice(0, MiddleIdx))
//     const SecondHalf = MergeSort(array.slice(MiddleIdx, array.length))
//     const sortedArray = []
//     let i = 0
//     let j = 0
//     while(i<FirstHalf.length && j < SecondHalf.length){
//         if(FirstHalf[i] < SecondHalf[j]){
//             sortedArray.push(FirstHalf[i])
//             i++;
//         }
//         else {
//             sortedArray.push(SecondHalf[j])
//             j++;
//         }
//     }
//     while(i<FirstHalf.length){
//         sortedArray.push(FirstHalf[i])
//         i++;
//     }
//     while(j<SecondHalf.length){
//         sortedArray.push(SecondHalf[j])
//         j++;
//     }
//     return sortedArray
    
// }
// export default MergeSort

// use in place array implementation with state hooks?

// function getMergeSortAnimations(array){
//     const animations = []
//     if (array.length <= 1) return array;
//     const auxiliaryArray = array.slice();
//     mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations)
//     return animations;

// }