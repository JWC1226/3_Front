function btnclick2() {
    console.log("콘솔창 출력 외부방식");
}
const btn2 = document.querySelector('#btn2');
btn2.onclick = function() {
    alert("알림창 출력 외부방식");
}