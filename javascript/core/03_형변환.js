/*
형변환 데이터 타입을 변환 하는것
연산수행시 피연산자의 타입이 일치해야 하므로 형변환이 발생함!

명시적 형변환 (강제형변환)
묵시적 형변환 (자동형변환)

*/

//명시적 형변환
console.log(Number("123"));
console.log(parseInt("124px"));
console.log(parseInt("px124")); //숫자로 시작하지않으면 nan

console.log(parseFloat("99.9kg")); // 소수점을 포함 반환

console.log( String(1234));
console.log((1234).toString());

console.log(Boolean("true"));
console.log(Boolean(0));

console.log(!!"abc");
console.log(!!"");


//묵시적 형변환
//연산자에 문자열이 포함되면  문자열 연결이 우선됨
console.log(1+"1");
console.log("5"+3);

console.log(parseInt("6")+3);

//-*/ 연산자 수학적 연산이 우선되어 피연산자를 숫자로 변환함
console.log(1-"1");
console.log(5*"2");
console.log(true -"2");

/*
true false 로 취급되는 값
falsy 값  : false, 0,  -0, "",null,undetined,nan
위의 7개를 제외한 값은 true취급
=> [] -> true, {}->true, "0" ->true
*/
"" ? console.log("빈문자열은 ture다") : console.log("빈문자열은 false");

[]?console.log("빈배열은 true") : console.log("빈배열은false"); //빈배열은 true

const arr = [];

if (arr) {
    console.log("배열은 존재하는가");
}

if (arr.length===0) {
    console.log("배열이 비어있음");
}
if(arr.length!==0) {
    console.log("배열이 비어있지않음");
}