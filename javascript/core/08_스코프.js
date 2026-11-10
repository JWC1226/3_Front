/*
스코프 : 변수와 함수가 접근할수있는 유효한 범위
식별자 (변수면, 함수명)을 찾을때 순서
현재스코프 -> 상위 스코프 - > 전역스코프

*/

var num1 = 20;
function test1(){
    console.log(num1);
}
function test2() {
    var num1 = 30;
    console.log(num1);
}

test1();
test2();

var num2 =50;

function test3() {
    var num2 = 70;
    console.log(num2);
}
function test4() {
    console.log(num2);
}

test3();
test4();

//렉시컬스코프: 함수가 어디서 실했됐는지가 아니라 함수가 어디에 선언되었는지에따라  상위 스코프 결정

/*
var : 함수스코프 
let,const : 블록스코프 
*/
var i = 777;
for(var i=0; i<10; i++) {

}
console.log("i:", i);

let j = 999;
for(let j = 0; j <10; j++) {

}
console.log("j:",j); 