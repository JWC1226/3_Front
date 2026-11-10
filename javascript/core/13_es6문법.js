console.log("13_es6문법");

/*
스프레드연산자 (spread operator)
배열 객체의 요소를 펼쳐서 복사 전달 사용하는 연산자
=>...
*/

//배열: 기존 배열의 요소를 하나씩 펼쳐서 새로운 배열을 생성
const arr =["빨강","파랑"];
const arr2 = [...arr, "검정","노랑"];
console.log(arr2);
const arr3 = [1,2];
const arr4 = [3,4];
console.log([...arr3,...arr4]);

//객체 : 기존 객체의 속성을 복사하여 새로운 객체를 만들거나
// 일부 속성을 안전하게 추가 수정(불변성 유지)

let user = {
    id: "sssgrid",
    pwd: "1234aa",
    name: "fed",
    age: 20,
    height:168.4
};

user = {...user,pwd:"padee"};
console.log(user);

//새로운 속성 추가 address 속성추가

user = {...user, adress:"서울시"};
console.log(user);

/*
구조 분해 할당 : 배열 객체에서 값을 추출하여 개별 변수에 할당
*/
//배열 : 배열의 요소를 순서에 맞춰서 변수로 쉽게 추출(순서기반)
const person = ["aa","bb","cc"];

const [lim, jo, kim] = person;

console.log(lim, jo, kim);

//특정 요소 건너뛰고 할당
const[one,three] = person;
console.log(one,three);

const[me,...rest] = person;
console.log(me,rest);

//객체: 객체key (속성명)과 일치 하는 변수 값을 추출

//기본할당방법 속성명과 동일하게 할당
const {id,name} = user;
console.log(id,name);

//변수명을 지정하여 할당 (기존속성명: 새로운 변수명)
const {id: userId, name: userName} = user;
console.log(userId,userName);

/// 기본값 설정 => 해당 속성이 존재하지 않을 경우 적용
const{job = "학생"} = user;
console.log(job);

//함수의 매개변수에서 객체 구조 분해 할당 사용
function showUserInfo({name,age}) {
console.log(`이름: ${name},나이${age}`);
}
showUserInfo(user);