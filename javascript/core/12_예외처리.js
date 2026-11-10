/*
예외처리 
실행중 발생하는 오류를 처리하여 프로그램이 중단되지 않고 지속되도록 하기 위해 사용
try catch finally throw
*/

//에러 발생시  예외처리
//-> JSON.parse() 사용시 올바르지 않은 JSON문자열을 전달하면 에러가 발생
try{
const data = JSON.parse("테스트"); //syntax에러 발생
console.log(data);
} catch(error) {
    console.log("에러발생",error.message);
} finally{
    console.log("에러발생시 상관없이 실행");
}

//throw를 사용하여 에러를 발생
function divide(n1,n2) {
    if(n2===0){
        throw new Error("0으로 나눌수없습니다");
    }
    return n1/n2;
}


try{
console.log(divide(10,2));
console.log(divide(10,0));

}catch (err) {
    console.log("Error::", err.message);
}finally {
   console.log("계산완료");
}

