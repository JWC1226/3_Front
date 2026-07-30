console.log("=== 13_ES6_문법 ===");
    // node.js 로 실행 (터미널 창)
    // > node 파일명
/*
    스프레드 연산자 (Spread Opeerator)
    : 배열이나 객체의 요소를 펼쳐서 복사 및 전달할때 사용하는 연산자
    　⇒ ...
*/
// 배열: 기존 배열의 요소를 하나씩 펼쳐서 새로운 배열을 생성
const arr = ["흑색", "백색"];
const arr2 = [...arr, "자색", "청색"];
console.log(arr2);                      // [ '흑색', '백색', '자색', '청색' ]

const arr3 = [1, 2];
const arr4 = [3, 4];
console.log([...arr3, ...arr4]);        // [1, 2, 3, 4]

console.log("==================");
// 객체: 기존 객체의 속성을 복사하여 새로운 객체를 만들거나
    // 일부 속성을 안전하게 추가/수정 (불변성 유지)
let user = {
    id: "user1234",
    pwd: "password1234",
    name: "user",
    age: 20,
    height: 181.2
};
    // 비밀번호 변경
user = {...user, pwd: "pwd1234"};
console.log(user);
    // 새로운 속성을 추가. address 속성 추가
user = {...user, address: "ROK"};
console.log(user);

console.log("==================");
/*
    구조 분해 할당: 배열이나 객체에서 값을 추출하여 개별 변수에 할당하는 방법
*/
// 배열: 배열의 요소를 순서에 맞춰서 변수로 쉽게 추출 (순서 기반)
const personList = ["사용자", "이용자", "테스터"];
    // 순서대로 할당하는 방법
const [Sa, Lee, Te] = personList;
// console.log(Sa, Lee, Te);
console.log(Sa);
    // 특정 요소를 건너뛰고 할당 (쉼표로 구분)
const [one, ,three] = personList;
console.log(one, three);
    // 첫번째 요소만 변수에 담고, 나머지는 배열로 묶어서 할당 (...)
const [me, ...rest] = personList;
console.log(me, rest);              // 사용자, ['이용자', '테스터']

// 객체: 객체의 key(속성명)와 일치하는 변수의 값을 추출
    // 기본 할당 방법: 속성명과 동일하게 할당
const {id, name} = user;
console.log(id, name);
    // 변수명을 지정하여 할당 (기존_속성명: 새로운_변수명)
const {id: userId, name: userName} = user;
console.log(userId, userName);
    // 기본값 설정 ⇒ 해당 속성이 존재하지 않을 경우 적용
const {job = "Student"} = user;
console.log(job);
    // 함수의 매개변수에서 객체 구조 분해 할당 사용
function showUserInfo({name, age}) {
    console.log(`이름: ${name}, 나이: ${age}`);
}
showUserInfo(user);