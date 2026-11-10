/*
배열
:순서가 있는 데이터 집합
js배열은 크기가 동적으로 변경(java List와유사)

*/
const members = ["a","b","c"];
// push 맨뒤에 데이터 추가

members.push("d");

console.log(members);
console.log(members.pop());
console.log(members);

//unshift: 맨앞에 데이터를 추가
members.unshift("d");
console.log(members);
//shift
members.shift("d");
console.log(members);


//첫번째 데이터 접근
console.log(members[0]);
console.log(members[2]);

members[2] = "d";
console.log(members);

const arr =[ "q","w","e","r","t"];
const sparr = arr.splice(1,2);
console.log(sparr);
console.log(arr);

const arr2 =[ "q","w","e","r","t"];
const slarr = arr.slice(0,3);
console.log(slarr);
console.log(arr);

//indexof 해당값이 없으면 인데스번호 반환

const colors = ["red","green","blue"];
console.log(colors.indexOf("red"));
console.log(colors.indexOf("pink"));
//includes 해당값이 배열에 존재하면 true 존재하지않으면false 반환

console.log(colors.includes("red"));
console.log(colors.includes("pink"));

// join: 배열 데이터(요소)를 구분자로 연결하여 하나의 문자열을 반환

console.log(colors.join());
console.log(colors.join("/"));

//sort 배열데이터 정렬 오름차순
colors.sort();
console.log(colors); 
//reverse 배열순서를 반대로
colors.reverse();
console.log(colors); 

const narr = [10,3,25,7];
//narr.sort();
narr.sort((a,b)=>b-a);
console.log(narr); 

//----------------------------------
/*
배열의 고차함수
함수를 인자로(콜백함수) 받는 함수
대부분 원본 배열을 변경하지않고  새로운 배열을 생성하여 불변성을 유지
*/
const stdlist = [
    {id:1,name:'a',java:88,sql:77},
    {id:2,name:'b',java:77,sql:67},
    {id:3,name:'c',java:98,sql:97}
];

//forEach : 각요소를 단순히 순회(반환값없음)
stdlist.forEach((value,index)=>{
    console.log(`${index} 번째 : ${value.name}`);
});

/*
function forEach(callback) {
for(let i = 0; i < stdlist.length; i++)
{callback(stdlist[i],i);
}}
*/
// map 기존배열의 각 요소를 가공하여  새로운 배열 반환
let numbers = [1,2,3];
const newarr = numbers.map((n)=> {
    return n * 2;
});

console.log(newarr);

const names = stdlist.map((std)=>std.name);
console.log(names);

//filter 콜백함수중 true값만 반환하여 새로운 배열 생성

let numbers1 = [1,2,3,4,5,6,7,8,9,10];

const even = numbers1.filter((value)=>value%2===0);

console.log(even);

const st2 = stdlist.filter((std)=>std.id !==2);
console.log(st2);
console.log(stdlist);

//*reduce : 배열의 요소를 하나씩 전달하며 하나의 값으로 누적 합산
//reduce((누적값),현재요소) => {return 다음누적값;},초기값)
const scorelist = [10,20,30];
const total = scorelist.reduce((sum,curr)=>{
    return sum +curr;
},0);

console.log(total);
//stdlist 자바 점수 총합

const total2 = stdlist.reduce((sum,std)=>
    sum+std.java,0
);

console.log(total2);
//find: 조건을 만족하는  첫번째 요소를 반환(없으면)
const result = stdlist.find((std)=>std.name==="어대");
console.log(result);

const idx = stdlist.findIndex((std)=>std.name==="어대");
console.log(idx);

const arr3 = [1,2,3,4,5];
console.log(arr3.some((n)=>n>3)); //some 하나라도 만족하면 true

console.log(arr3.every((n)=>n>3)); //every 하나라도 만족하지않으면 false