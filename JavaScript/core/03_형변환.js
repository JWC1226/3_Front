/*
    형 변환: 데이터 타입을 변환하는 것
             ⇒ 연산 수행 시, 피연산자의 타입이 일치해야 하므로, 형변환이 발생한다!
    - 명시적 형 변환 (강제 형변환)
    - 묵시적 형 변환 (자동 형변환)
 */

// 명시적 형 변환 (강제 형 변환)
console.log(Number("123"));         // 123、문자열이었던 값을 숫자 타입으로 변환
console.log(Number("123px"));       // NaN、숫자가 아닌 문자가 포함될 경우, 표시되는 오류 예약어
console.log(parseInt("123px"));     // 123、시작하는 숫자 부분만 추출하여 변환
console.log(parseInt("px123"));     // NaN、시작하는 부분이 문자이므로 NaN이라는 오류 예약어를 표시
    console.log(parseInt("1p2x3"));     // 1　、시작하는 숫자만 추출하여 반환
console.log(parseFloat("99.9kg"));  // 99.9、소수점을 포함한 실수로 변환
// 숫자를 문자열로 변환
console.log(String(123));           // 123、문자열로 변환할 경우, 색상이 약간 다르게 출력된다
console.log((123).toString());      // 123
// boolean 타입으로 변환
console.log(Boolean("true"));       // true
console.log(Boolean(0));            // false (0은 false로 판단)
console.log(!!"abc");               // true
console.log(!!"");                  // false (""은 false로 판단)

// 묵시적 형 변환 (자동 형 변환)
    // + 연산자에 문자열이 포함되면, 문자열 연결이 우선 적용된다
console.log(1+"1");                 // 11 (숫자가 문자열로 변환되어 11이라는 값을 반환)
console.log("5"+3);                 //"53" (위와 이유는 동일)
console.log(parseInt("5")+3);       // 8 (숫자 타입으로 변환)
    // - * / 연산자는 수학적 연산이 우선되어 피연산자를 숫자로 변환한다
console.log(1-"1");                 // 0 (숫자로 출력)
console.log("5"*"2");               // 10
console.log(true - "2");            // -1 (true는 숫자 1로 변환하여 계산)

/*
    true, false로 취급되는 값
    - falsy 값 (7개): false, 0, -0, "", null, undefinde, NaN
    위의 7개를 제외한 모든 값은 Truthy로 취급된다
    ⇒ [] → true, {} → true, "0" → true
 */
"" ? console.log("빈 문자열은 true다") : console.log ("빈 문자열은 false다");   // "false 값 출력"
    // ⇒ "(빈 문자열)"은 falsy 다
[] ? console.log("빈 배열은 true다") : console.log("빈 배열은 false다");        // "true 값 출력"
    // ⇒ "(빈 배열)"은  truthy 다
// 배열이 비어있는 지 판별
const arr = [];
if (arr) {                          // 배열이 비어있어도 truthy!
    console.log("배열이 존재");
}
// 배열이 비어있는 지 판별 ⇒ Length를 통해 검사!
if (arr.length === 0) {
    console.log("배열이 비어있음!");
}
if (arr.length !== 0) {
    console.log("배열이 비어있지 않음!");
}