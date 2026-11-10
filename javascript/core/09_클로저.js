/*
클로저 
내부함수가 외부함수의 변수를 기억하고 접근할수있는 상태
외부함수의 실행이 종료되어 메모리에서 사라져도
내부 함수가 살아있는한(실행준) 참조하는 변수는 계속 유지됨

*/

function getCounter() {
    let count = 0;

    function increase() {
        count++
        return count;
    }
    return increase;

}
const run = getCounter();
console.log(run());
console.log(run());

const run2 = getCounter();
console.log(run2());

function createStore(init =0) {
    let value = init;
    return {
        get:() => value,
        set:(v) => {value = v;},
        increase: () => {
            value++;
            return value;
        }
    }
}

const store = createStore(10);
console.log(store.get());
store.increase();
console.log(store.get());
store.set(100);
console.log(store.get());