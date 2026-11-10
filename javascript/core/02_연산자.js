/*
연산자
산술 대입 비교 논리
삼항 연산자, null 병합연산자 옵셔널 체이닝()

산술연산자 : + - * / % **(제곱)


*/

console.log(10+3);
console.log(10%3);
console.log(2**10);

let x = 10;
x += 5;
console.log("x",x);

/*
비교연산자
== 동등 비교연산자 (타입을 자동으로 변환하여  값만비교)
=== 일치비교 연산자 (값과 데이터 타입을 모두 엄격하게 비교)

*/
console.log(55=="55");
console.log(55==="55");
console.log(55!="55");
console.log(55!=="55");

//논리 연산자 : && // !
//*단축평가 sce : 단순한 true false판단에 그치지 않고 평가의 결과의 값을 반환
//A&&B A가 true이면 B반환 A가 false이면 A반환
// A || B A가 ture 이면 A반환  A가 false이면 B반환

console.log(false && "결과");

console.log(true||"결과");
console.log(false||"결과");
console.log("값"||"기본값");
console.log(""||"기본값");

function hi(name) {
    name = name || "게스트";
    console.log("안녕하세요"+ name + "님");

}
hi("hi");
hi();


const user = {
    name : "박기태"
};
user && console.log(user.name);
// 삼항연산자 조건식? 참일때 값 : 거짓일때 값

const age = 20;
const result = age >= 19 ? "성인" : "미성년자";
console.log(result);
//null 병합연산자:??
//=> A ?? B : A의 값이 null또는  undefined B값을 반환
const count = 0;
console.log(count||10);
console.log(count??10);

console.log(undefined??10);
console.log(null??10);

//옵셔널 체이닝 연산자 :?.
//접근하는 객체나 속성이 null또는 undefined이더라도 오류 없이 undefinedl반환
const data = {
    user :null,
    length : 0
};

console.log(data.user);
console.log(data.user?.name);

console.log(data?.length);
console.log(data?.len);


