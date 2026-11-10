/*
함수
선언적 함수 / 함수 표현식 (일급 함수)
일급 객체 : 함수도  하나의 값처럼 사용할수있음
오버로딩 미지원 arguements:객체\
화살표 함수

*/

//선언적 함수 : 함수 이름을 가지고 정의
//function 함수이름 ([매개변수]) {실행내용}

function test1() {
    console.log("test1 함수 실행");
}

test1();
//함수 표현식(일급객체)
//const 변수명 = function() {실행내용}
//=> js에서 함수 일급 객체로 변수에 할당 가능
//이름이 없는 익명함수를 변수에 대입하여 선언

const test2 = function() {
console.log("test2함수실행");
};

test2();

//오버로딩미지원 arguenment 객체
//->함수 이름  동일하면  매개변수가 달라도 오버로딩이 지원되지않음
// 모든 일반 함수 내부에 전달된 모든 인자를 담는 arguement객체가 자동으로 생성됨

const test3 = function(name) {
console.log("매개변수 name",name);
console.log("arguements:", arguments);
}

test3(); //값을 전달하지 않으면  매개변수가 undefined를 가지게됨
test3("ddd");
test3("ddd",20,"서울시");

//화살표 함수
//const 함수명 = ([매개변수]) =>{실행할내용}
const test4 = () => {
console.log("test4 함수실행");
};

test4();

const add = (a,b) => {
    return a+b;
}
console.log(add(10,20));

const add2 = (a,b) => a+b;
console.log(add2(10,20));

const test5 =(...args) =>{
    console.log(args);
    
}
test5(10,20,30);

function test6 (callback) {
    console.log("test6함수실행");
    callback();
}

test6(function(){
    console.log("인자로 전달되는 함수실행");
}

);
//함수를 반환값으로 실행

function test7(x) {
    return function(y) {
    return x*y;
    };
}
const double = test7(2);
console.log (double(5));

const triple = test7(3);
console.log((triple(4)));