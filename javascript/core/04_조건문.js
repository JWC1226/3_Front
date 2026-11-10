/*
조건문
if/else if/else
switch
삼항연산자


*/

const score = 80;
//const score = prompt("점수입력:");
let grade;

if(score>=90) {

    grade = 'A';
}else if (score>=80){
    grade = 'B';
}else {
    grade = 'D';
}

console.log(grade);

//switch
const day = 3;

switch(day) {
    case 0: 
    console.log("일요일");
    break;
    case 1:
        console.log("월요일");
        break;
        case 2:
        console.log("화요일");
        break;
            case 3:
        console.log("수요일");
        break;
        default:
            console.log("목요일 이후")
            break;
}