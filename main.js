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

//     // Используем метод reduce с индексом для вычисления суммы каждой половины
//     const firstHalfSum = digits.reduce((sum, digit, index) => index < half ? sum + digit : sum, 0)
//     const secondHalfSum = digits.reduce((sum, digit, index) => index >= half ? sum + digit : sum, 0)

//     return firstHalfSum === secondHalfSum;
// }
