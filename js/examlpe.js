// 배열(array
const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.length);
//반복문(loop)
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((arr, index) => {
//   console.log(arr, index);
// });

// arrs.map(arr, index) => {
// console.log(arr, index);
// };

// 객체(objecr)
// const objs = {
//   a: 1,
//   b: 'a',
//   C: () => {
//     console.log('객체 함수 출력');
//   },
//   d: ['a', 'b', 'c'],
// };

// console.log(objs.d);

// objs.d.forEach((obj) => {
//   console.log(obj);
// });

// 형 (type) - 원시 타입, 객체타입
// 원시타입 : 문자, 숫자 .null, underfined, boolean
//객체타입 : 함수 , 배열, 객체...
const a = 'a';
const b = 1;
const c = 'a 변수에는 문자' + a + '가 있고, b 변수에는 숫자' + b + '이 있다.';

// 템플릿 문자열
const d = `'a 변수에는 문자 ${a} 가 있고, b 변수에는 숫자 ${b} 이 있다.'`;
console.log(c);
