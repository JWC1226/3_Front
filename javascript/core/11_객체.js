/*
객체 object
중괄호({}) 안에 속성명 : 속성값(key:value) 형태로 정의
속성값으로 문자 숫자 배열 객체 함수 등 모든 자료형이 가능
*/

const lunch = {
    name: "백반",
    price: 9000,
    kind:"한식",
    side: ["불고기","김치","잡채"]
};

//* 속성접근 방법 2가지
//1) 점표기법 : 객체명.속성명
//2) 대괄호 표기법: 객체명["속성명"]
//->for...of 객체명 [변수명]

console.log("전날점심메뉴:",lunch.name);
console.log("가격:",lunch["price"]);


//속성값수정

lunch.price = 6000;
console.log("변경가격",lunch.price);

//새로운 속성 추가
lunch.address = "강남";

console.log(lunch);



///-----------------------------

/*
메소드 : 객체 내부에 정의된 함수
this : 해당 메소드를 호출한 객체를 가리킴
=> 화살표 함수로 메소드를 정의하면 this는 상위 스코프를 가리키므로
일반 함수 표현식을 사용하는것을 권장
*/
const person = {
    name:"박기태",
    eat: function(food){
        console.log(`${this.name}은 ${food}를 먹습니다`);
    }
}

person.eat("돈가스");

/*
단축속성명 (short property names)
객체 생성시 키값과 변수명이 동일한경우 축약 표현 가능
*/
const name = "토토로";
const age = 1300;
//{name: xxx, age: xxx}
const charc = {name,age};
console.log(charc);

/*
json(javascript object notation)
클라이언트와 서버간 데이터를 주고받을때 사용하는 표준 텍스트 포맷
구조가 자바스크립트 객체와 유사하지만 실제로 순수 문자열 타입(string)
*/
const user = {
    name:"박기태",
    age:40,
    skills: ["java","sql","html","css","js"],
    introduce: function() {
        console.log("안녕하세요"+this.name+"입니다");
    }
}

//객체 -> json ::문자열로 변환
// json.stringify(객체명)
const jsonstr = JSON.stringify(user);
console.log(jsonstr);
console.log(typeof jsonstr);


//json 문자열 -- 객체변환
//json.parse(json문자열) json은 키값을 문자열로 작성함
const jsonobj = JSON.parse(jsonstr);
//json 문자열 -> 객체변환 ====> 서버에서  받아온 데이터 피싱시 사용
console.log(jsonobj);
console.log(typeof jsonobj);


