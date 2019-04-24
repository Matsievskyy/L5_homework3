const array = [2, 1, 1, 7, 2, 9,8 ,8]

// function arrFilter() {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] != arr[i+1]) {
//             arr2.push(arr[i])
//         }
//         console.log(arr2)
//     }
// }

function makeUnique(arr) {
    let uniqueArray = [];
    arr.forEach(function (element) {
        if (uniqueArray.indexOf(element) === -1) {
            uniqueArray.push(element);
        }
    })
    return uniqueArray;
}

console.log(makeUnique(array));