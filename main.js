// // Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// // 1) solution
// function oddCount (n) {
//     let res = []
//     for (let i = n - 1; i > 0; i--) {
//         if (i % 2 !== 0) {
//             res.unshift(i)
//         }
//     }
//     return res
// }

// // 2) solution
// function oddCount (n)  {
//     let res = []
//     for(let i = 1; i < n ; i += 2) {
//         res.push(i)
//     }
//     return res
// }


// // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// // Example: (Input --> Output)
// // "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// // 1) solution
// function isIsogram(str) {
//     let newStr = str.toLowerCase();
//     for (let i = 0; i < newStr.length; i++) {
//         let char = newStr[i];
//         for (let j = i + 1; j < newStr.length; j++) {
//             if (newStr[j] === char) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// // 2) solution
// function isIsogram(str) {
//     let charMap = {};
//     let newStr = str.toLowerCase();
//     for (let char of newStr) {
//         if (charMap[char]) {
//             return false;
//         }
//         charMap[char] = true;
//     }
//     return true;
// }

// // 3 solution
// function isIsogram(str) {
//     let newStr = str.toLowerCase();
//     let charSet = new Set(newStr);
//     return charSet.size === newStr.length;
// }

// // 4) solution
// const  isIsogram = (str) => new Set(str.toUpperCase()).size == str.length;


// //создай функцию, проверяющую является ли номер счастливым (номер — всегда строка). Функция должна возвращать true, если билет счастливый, или false, если нет.
// // isHappyTicket('385916'); // true
// // isHappyTicket('231002'); // false

// const isHappyTicket = (ticketNubmer) => {
//     const digits = ticketNubmer.split('').map(Number)
//     const half = digits.length / 2
//     let sumFirstHalf = 0 
//     let sumSecondHalf = 0
//     for(let i = 0; i < half; i++) {
//         sumFirstHalf += digits[i]
//         sumSecondHalf += digits[i+half]
//     }
//     return sumFirstHalf === sumSecondHalf
// }

// function isHappyTicket(ticketNumber) {
//     const digits = ticketNumber.split('').map(Number);
//     const half = digits.length / 2;
//     let firstHalfSum = 0;
//     let secondHalfSum = 0;
//     digits.forEach((digit, index) => {
//         index < half ? firstHalfSum += digit : secondHalfSum += digit
//     })
//     return firstHalfSum === secondHalfSum
// }

// function isHappyTicket(ticketNumber) {
//     const digits = ticketNumber.split('').map(Number);
//     const half = digits.length / 2;

//     const firstHalfSum = digits.reduce((sum, digit, index) => index < half ? sum + digit : sum, 0)
//     const secondHalfSum = digits.reduce((sum, digit, index) => index >= half ? sum + digit : sum, 0)
//     return firstHalfSum === secondHalfSum;
// }


// const getSameCount = (arr1, arr2) => {
//     if (arr1.length === 0 && arr2.length === 0) return 0;
//     let res = [];
//     for (const item of arr1) {
//         if (arr2.includes(item) && !res.includes(item)) {
//             res.push(item);
//         }
//     }
//     return res.length;
// }

// const getSameCount = (arr1, arr2) => {
//     if (arr1.length === 0 && arr2.length === 0) return 0;
//     const arr1Set = new Set(arr1);
//     const arr2Set = new Set(arr2);
//     let count = 0;
//     arr1Set.forEach((el) => {
//         if (arr2Set.has(el)) {
//             count++;
//         }
//     });
//     return count;
// };

// const getSameCount = (arr1, arr2) => {
//     if (arr1.length === 0 && arr2.length === 0) return 0;
//     const arr1Set = new Set(arr1);
//     const arr2Set = new Set(arr2);
//     const commonElements = [...arr1Set].filter(el => arr2Set.has(el));
//     return commonElements.length;
// };
// console.log(getSameCount([1, 10, 3], [10, 100, 35, 1]));



// Реализуйте flatten(). Эта функция принимает на вход массив и выпрямляет его: если элементами массива являются массивы, то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.В js эта функция реализована как метод flat() у массивов. Его использовать нельзя.
// const flatten = arr => {
//     let result =[]
//     arr.forEach(item => {
//         if(Array.isArray(item)) {
//             result = result.concat(item)
//         } else {
//             result.push(item)
//         }
//     });
//     return result
// }

// const flatten = arr => {
//     let result = []
//     for(let i = 0; i < arr.length; i++) {
//         Array.isArray(arr[i]) ? result = [...result, ...flatten(arr[i])] : result.push(arr[i])
//     }
//     return result
// };

// const flatten = arr =>  arr.reduce((acc,item) => Array.isArray(item) ? [...acc,...flatten(item)]: [...acc, item],[])

// const flatten = arr => {
//     let result = []
//     arr.forEach(item => {
//         console.log(item);
//         if(Array.isArray(item)) {
//             result = [...result, ...flatten(item)]
//         } else {
//             result.push(item)
//         }
//     });
//     return result
// }
// console.log(flatten([1,2,[3,4,[5,6,7]]])); // [1, 3, 2, 9]



// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной. Открывающие и закрывающие скобки должны быть одного вида. Пустая строка (отсутствие скобок) считается сбалансированной.
// Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:
// Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
// Скобки должны закрываться в правильном порядке:

// const isBracketStructureBalanced = str => {
//     let stack = []
//     let map = {
//         ')': '(',
//         ']': '[',
//         '}': '{',
//         '>': '<',
//     }

//     for(const char of str) {
//         if(map.hasOwnProperty(char)) {
//             if(map[char] !== stack.pop()) return false
//         }
//         else {
//             stack.push(char)
//         }
//     }
//     return stack.length === 0
// }
// console.log(isBracketStructureBalanced('())'));



// Экспортируйте по умолчанию функцию, которая принимает массив, каждый элемент которого содержит число или знак операции (+, -, *, /). Функция должна вернуть результат вычисления по обратной польской записи. Если в какой-то момент происходит деление на ноль, функция должна вернуть значение null.
// const calcInPolishNotation = arr => {
//     const stack = []

//     for (const item of arr) {
//         if (!Number.isInteger(item)) {
//             const a = stack.pop()
//             const b = stack.pop()
//             console.log(b, a);

//             switch (item) {
//                 case '+':
//                     stack.push(a + b)
//                     break
//                 case '-':
//                     stack.push(b - a)
//                     break
//                 case '*':
//                     stack.push(b * a)
//                     break
//                 case '/':
//                     if (a === 0) {
//                         return null
//                     } else {
//                         stack.push(b / a)
//                         break
//                     }
//                 default:
//                     return arr
//             }
//         } else {
//             stack.push(item)
//         }
//     }
//     return stack.pop()
// }
// console.log(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+']));
// console.log(calcInPolishNotation([7, 5, '+',2,'/',4, '+']));



// создайте функцию, которая осуществляет пузырьковую сортировку 
// const bubbleSort = arr => {
//     let stepCount = arr.length 
//     let swapped
//     do {
//         swapped = false 
//         for(let i = 0; i < arr.length; i++) {
//             if(arr[i] > arr[i+1]) {
//                 [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//                 swapped = true
//             }
//         }
//         stepCount--
//     }
//     while(swapped)
//     return arr
// }
// console.log(bubbleSort([55,-2,3,7,1,0]));





// You must implement a function that returns the difference between the largest and the smallest value in a given list / array(lst) received as the parameter
// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

// function maxDiff(list) {
//     let min = list[0]
//     let max = list[0]
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] <= min) {
//             min = list[i]
//         }
//         else if (list[i] >= max) {
//             max = list[i]
//         }
//     }
//     return max - min
// };



// const maxDiff = arr => arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr)
// console.log(maxDiff([100, 2, 1, 4]));
// You will be given an array of events, which are represented by strings.The strings are dates in HH: MM:SS format.
// It is known that all events are recorded in chronological order and two events could not occur in the same second.Define the minimum number of days during which the log is written.
//     Example:

// Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
// Output -> 1
// Input -> ["12:12:12"]
// Output -> 1
// Input -> ["12:00:00", "23:59:59", "00:00:00"]
// Output -> 2



function checkLogs(log) {
    let countDate = 1
    for (let i = 1; i < log.length; i++) {
        if (log[i] == '00:00:00') {
            countDate++
        }
    }
    return countDate
}
console.log(checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]));