console.log("hello world!");

/*
자바스크립트 :동적타입언어
변수선언할때 타입을 미리 지정하지 않고
프로그램 실행중(런타임)에 할당되는 값에 따라 타입이 결정되는 언어

자바스크립트 변수 선언 키워드
var : 과거에 사용하던 방식 중복선언 블록스코프 미지원
let : 재할당이 가능한 변수
const : 재할당이 불가능한 상수



*/
console.log(name);
var name = "박기태";
var age;
/*
호이스팅 : 변수및 상수선언문이 해당스코프 최상위로 끌어올려진거처럼 동작하는 현상
*/

console.log(name);
console.log(age);

var name = "김무아"; //var 사용시 동일한 이름으로 재선언 가능
console.log(name);
console.log('============================');
let name2 = "박기태";
console.log(name2);
 name2 = "박기태2";
console.log(name2);
/*
let const경우 호이스팅이 일어나지만 선언문 이전 구역 에 위치하게 되어
변수 선언 코드에 도달하기 전에 접그하려하면 오류일으켜 안전성을 높이게된다
*/
const name3 = "김수한무";
console.log(name3);

const arr = [1,2,3];
arr.push(5);
console.log(arr);
//arr=[5]; //메모리 주소 자체를 재할당 불가

console.log("=============================================")

/*
변수명명규칙
1.특수문자 _ $만 사용가능
2.숫자로 시작할수없음
3.예약어 사용불가
4.영문자 숫자 특수 기호만 사용가능
관례
1.변수명 함수명  카멜케이스 ex userId productPrice
2.클래스명 파스칼케이스 Product UserProfile
3. HTML CSS 속성 및 클래스명 케밥 케이스 user-id itme-list

자료형
원시타입 기본자료형  : String, Number, BooLean undefined, null, symbol
참조타입 객체 : Object, Array, Function


*/
let value = "콜라";// = string
console.log(typeof value);
value =5500;
console.log(typeof value);

const num1 = 500;
const num2 = 12.99;
console.log(typeof num1, typeof num2);

const isTrue = true;
console.log(typeof isTrue);

let num3;
console.log(typeof num3);

let data = 1000;

data = null;
console.log(typeof data);

const s1 = Symbol("100");
const s2 = Symbol("100");
console.log(s1,s2);
console.log(s1==s2);

const arr2 = ["파랑","흑","노랑"];
console.log(arr2, typeof arr2);
arr2.push("회색");
console.log(arr2 [3]);

const myInfo = {
    name: "박기태",
    age : 20,
    introduce: function() {
        console.log("안녕하세요");
    }
}
myInfo.introduce();
console.log(myInfo.name);
console.log(myInfo.age);
console.log(typeof myInfo);