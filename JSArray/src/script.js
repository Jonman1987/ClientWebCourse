window.ETR = window.ETR || {};

const array = [2, 4, 1, 3, 7, 6, 5, 9, 0, 8];

function sort1() {
    array.sort((a, b) => b - a);
    console.log(array);
}sort1();

function subArray() {
    let subArray1 = array.slice(0, 5);
    let subArray2= array.slice(array.length - 5, array.length);
    console.log(subArray1);
    console.log(subArray2);
}subArray();

function sumOfOddNumbers() {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sum += array[i];
        }
    }

    return sum;
}

function sumOdd() {
    console.log(sumOfOddNumbers(array));
}sumOdd();