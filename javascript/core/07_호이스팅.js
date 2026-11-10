/*
호이스팅
:js엔진은 코드실행전 메모리 평가단계를 거치ㅕ
변수와 함수 선언을 상위에 미리등록함
코드가 실제로 이동하는것이 아니라 선언 정보가 메모리에 먼저 등록되는 현상
var선언은 undefined로 초기화됨
let const 선언은 tdz에 머물러 접근이 제한됨
*/

//var

console.log("선언전",name);
var name = "스파게티";
console.log("선언후",name);


let name2 = "ddd";
console.log("선언후",name2);

hello();
function hello() {
    console.log("hello");
}

const bye = function() {
     console.logt("bye");
}
