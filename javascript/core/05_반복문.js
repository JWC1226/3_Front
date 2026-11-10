/*
반복문
for/while/do-while

for..of / for..in
-분기문 :break/continue

*/

//for
//for(초기식;조건식;증감식) {}
//1~7까지 반복

for(let i = 1; i<8; i++) {
console.log(`i값 : ${i}`);
}

//while : 조건이 참이때까지 반복
//while(조건식) {}
//1~7까지 반복

let i = 1;
while(i<8){
    console.log(`i값 : ${i}`);
    i++;
}

//do-while : 최고한버은 무조건 1번 실행하고  조건을 만족하는 경우 반복
i=1;
do {
    console.log(`i값 : ${i}`);
    i++;
}while(i<8);

//break : 즉시 반복문 종료
//continue : 이번회차이 남은 코드 실행 건너뛰고 다음회차로 이동
for(let i = 1; i<=10; i++)
{
    if(i===5) {
        continue;
    }

if(i===8) {
    break;
}
console.log(i) ;
}

//for..of : 배열 등 순회 가능한 객체의 값을 순회
const person = ["임수진","박기태","이리고"];

for (const p of person) {
 console.log(p);
}

//for..in 객체의 키값을 순회

//for(const 1 in 객체)
const student = {
    name: "df1q",
    java : 80,
    sql :80
};
for (const key in student) {
    console.log(key);
    console.log(student[key]);
}

//-->배열에서 for - in사용시 주의

for(const index in person) {
    console.log(index, typeof index);
}