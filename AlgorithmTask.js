
//Complexity of this algorithm is O(m*n) where m is the numner of sub arrays and n is the number of elements in each array

//Regarding making the algorithm linear I think this is not possible as this is a matrix unless we put all matrix elements in one array 
// and then get max and min from this array and in this case part of finding min and max value will be O(n) 
// where n is the number of elements in the matrix

//like in the below code
let arr1 = [[43, 51, 31], [31, 62, 91], [39, 32, 22], [11, -11, 22]];

//make all matrix elements in one arr which has complexity O(n*m) where m is the numner of sub arrays and n is the number of elements in each array
let bigArr = arr1.reduce((acc, subArr) => acc.concat(subArr), [])



let max = Number.NEGATIVE_INFINITY;

let min = Infinity;

for (let index = 0; index < bigArr.length; index++) {

    let value = bigArr[index];

    if (value > max) {
        max = value;
    }

    if (value < min) {

        min = value;
    }
}


console.log(`max is ${max} and min is ${min}`)
